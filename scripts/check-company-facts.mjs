#!/usr/bin/env node
/**
 * check-company-facts.mjs
 *
 * Lightweight, dependency-free scan for company claims (years, percentages,
 * production-volume figures) hardcoded directly in components instead of
 * imported from lib/company-facts.ts. This is exactly the bug class that
 * caused the 2018-vs-2019 / 80%-vs-70% / annual-vs-monthly contradictions
 * this project shipped with.
 *
 * This is a lint-style advisory, not a build gate: it flags *candidates*
 * for review, it does not know which number is correct. A flagged line is
 * not automatically wrong — check it against lib/company-facts.ts by hand.
 *
 * Usage:
 *   node scripts/check-company-facts.mjs           text output
 *   node scripts/check-company-facts.mjs --json     JSON output, exit 2 on findings
 *
 * Suppressing a false positive:
 *   Add `// facts-allow: <short reason>` on the same line, or add the file
 *   to ALLOWLIST_FILES / ALLOWLIST_PATTERNS below for a project-wide rule
 *   (e.g. a customer-input dropdown that legitimately lists every country).
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const SCAN_DIRS = ["components", "app"];

// Whole files that are known to be safe to skip entirely (e.g. legitimate
// per-line country/volume pickers where every value is customer input, not
// a company claim). Prefer a `facts-allow` inline comment over adding here;
// use this only when nearly every line in the file would otherwise trip.
const ALLOWLIST_FILES = new Set([
  // "components/contact/ExportInquiryForm.tsx", // example: country <select> options
]);

// Regexes that indicate the match is structural/styling, not a company claim.
// If any of these match the SAME line as a candidate, the candidate is skipped.
const SAFE_CONTEXT_PATTERNS = [
  /#[0-9A-Fa-f]{3,8}\b/,                         // hex colors near a bare number, e.g. "80%" in a gradient stop
  /linear-gradient|radial-gradient|rgba?\(/,      // CSS color/gradient functions
  /stopColor|stopOpacity/,                        // SVG gradient stops
  /start:\s*["']top|end:\s*["']|scrub|repeatDelay/, // GSAP ScrollTrigger position strings
  /viewBox|translate|scale\(|opacity:\s*\[/,       // transform/animation values
  /COMPANY_FACTS/,                                // already sourced correctly
  /facts-allow/,                                  // explicit inline suppression
  /ISO\s*\d{4,5}\s*:/i,                            // ISO standard designations (e.g. "ISO 45001:2018") — the year is part of the standard's name, not a founding claim
  /^\s*(\/\/|\/\*|\*|\{\s*\/\*)/,                  // pure comment lines (incl. JSX {/* ... */}) — can't render a wrong fact to a user
];

// Regexes for the actual company-claim shapes we care about.
const CLAIM_PATTERNS = [
  { id: "founding-year",  re: /\b(?:est\.?|founded|established)\s*['":\s]*20(1[0-9]|2[0-9])\b/i },
  { id: "bare-year-2018", re: /\b2018\b/ },
  { id: "percent-claim",  re: /\b\d{1,3}%\+?\s*(women|workforce|employees)/i },
  { id: "volume-annual",  re: /\b100\s*M\+?\s*units?\b.*\b(annual|year|\/\s*year)\b/i },
  { id: "volume-annual2", re: /\bunits?\s*\/\s*year\b/i },
  { id: "headquarters",   re: /headquarters\s*[—-]\s*(?!.*mumbai)[a-z]/i },
];

function isAllowedLine(line) {
  return SAFE_CONTEXT_PATTERNS.some((re) => re.test(line));
}

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (entry === "node_modules" || entry.startsWith(".")) continue;
      walk(full, out);
    } else if (/\.(tsx|ts)$/.test(entry)) {
      out.push(full);
    }
  }
  return out;
}

function scanFile(filePath) {
  const rel = relative(ROOT, filePath).replace(/\\/g, "/");
  if (ALLOWLIST_FILES.has(rel)) return [];

  const lines = readFileSync(filePath, "utf8").split("\n");
  const findings = [];

  // A `facts-allow` comment suppresses its own line AND the block it introduces
  // (until the enclosing array/object closes at column 0-ish indent), so one
  // comment above a multi-line const array covers every entry underneath it.
  let blockSuppressed = false;
  let blockIndent = null;

  lines.forEach((line, i) => {
    if (/facts-allow/.test(line)) {
      blockSuppressed = true;
      blockIndent = line.match(/^\s*/)[0].length;
      return;
    }
    if (blockSuppressed) {
      const indent = line.match(/^\s*/)[0].length;
      const isClose = /^\s*[\]\}]/.test(line);
      if (isClose && indent <= blockIndent) {
        blockSuppressed = false; // this closing line itself still counts as suppressed
      }
      return;
    }
    if (isAllowedLine(line)) return;
    for (const { id, re } of CLAIM_PATTERNS) {
      if (re.test(line)) {
        findings.push({ file: rel, line: i + 1, rule: id, text: line.trim().slice(0, 120) });
      }
    }
  });

  return findings;
}

function main() {
  const json = process.argv.includes("--json");
  const files = SCAN_DIRS.flatMap((d) => walk(join(ROOT, d)));
  const findings = files.flatMap(scanFile);

  if (json) {
    console.log(JSON.stringify(findings, null, 2));
  } else if (findings.length === 0) {
    console.log("check-company-facts: clean — no suspicious hardcoded company claims found.");
  } else {
    console.log(`check-company-facts: ${findings.length} candidate(s) to review:\n`);
    for (const f of findings) {
      console.log(`  [${f.rule}] ${f.file}:${f.line}`);
      console.log(`    ${f.text}`);
    }
    console.log(`\nEach one is a candidate, not a confirmed bug — check it against lib/company-facts.ts.`);
    console.log(`Suppress a false positive with a trailing "// facts-allow: <reason>" comment on the line.`);
  }

  process.exit(findings.length > 0 ? 2 : 0);
}

main();
