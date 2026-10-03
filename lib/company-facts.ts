/**
 * Biopapro Company Facts — single canonical source of truth.
 *
 * Every hardcoded company claim in this codebase (founding year, workforce,
 * production volume, location, etc.) should read from here instead of
 * redeclaring its own value. Verified against biopapro.com/pages/about-us
 * and the site's own JSON-LD structured data on 2026-08-26.
 *
 * Only add a field once its value is verified. Certification count/numbers
 * are deliberately NOT here yet — that set is unresolved (see docs/TASKS.md)
 * and is out of scope until the real certification documents are confirmed.
 */

export const COMPANY_FACTS = {
  founded:            2019,
  foundedMonth:       1, // January — exact founding month unconfirmed; assumed for the cumulative-units calculation below. Correct if the real month is known.
  location:           "Mumbai, Maharashtra, India",
  employees:          380,
  womenPercent:       70,
  unitsPerMonth:      100_000_000,
  tonsPerMonth:       300,
  plasticSavedPerDay: 10000,
  exportMarkets:      18,
  certifications:     6, // unresolved 6-vs-9 discrepancy — see docs/TASKS.md, do not change without business confirmation
} as const;

/**
 * Cumulative units produced "since founding", computed as
 * (full months elapsed since COMPANY_FACTS.foundedMonth/founded) × unitsPerMonth.
 *
 * Explicitly requested as a simple always-100M/month calculation, not a
 * verified historical production record — Biopapro almost certainly did not
 * produce at full 100M/month capacity back in 2019, so this is a rough,
 * continuously-increasing figure rather than an audited total. It recomputes
 * from the current date wherever it's called (client-rendered), so the
 * number advances automatically every month without needing a manual update
 * or redeploy.
 */
export function getCumulativeUnitsProduced(asOf: Date = new Date()): number {
  const start = new Date(COMPANY_FACTS.founded, COMPANY_FACTS.foundedMonth - 1, 1);
  const months =
    (asOf.getFullYear() - start.getFullYear()) * 12 +
    (asOf.getMonth() - start.getMonth()) +
    1; // +1 so the founding month itself counts as month 1, not 0
  return Math.max(0, months) * COMPANY_FACTS.unitsPerMonth;
}

/** Formats a unit count as a short "9.3B+" / "930M+" style figure. */
export function formatUnitsShort(units: number): string {
  if (units >= 1_000_000_000) return `${(units / 1_000_000_000).toFixed(1)}B+`;
  if (units >= 1_000_000) return `${(units / 1_000_000).toFixed(0)}M+`;
  return units.toLocaleString();
}

export const OFFICES = [
  {
    region:  "India — Manufacturing HQ",
    address: "G1 Khetwadi, 12th Lane, Girgaon, Mumbai 400004, Maharashtra",
    email:   "export@biopapro.com",
    phone:   "+91 70211 03763",
    type:    "origin" as const,
  },
];
