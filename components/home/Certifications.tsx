"use client";

/**
 * S9 — Certifications
 *
 * Trust vault — official seal-style presentation.
 * Visitors must immediately recognise FSC, ISO, FDA, BPI, BSCI, EU.
 *
 * Design: Each certification feels like an official document with
 * a circular seal, issuing body, certificate code, and scope.
 * Not an informational card — a verification statement.
 */

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2, Download, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const CERTS = [
  {
    id: "fsc",
    badge: "FSC®",
    shortName: "FSC",
    fullName: "Forest Stewardship Council",
    code: "Chain of Custody Certified",
    certNo: "Certificate available on request",
    scope: "100% of raw material — all product lines",
    verifiedBy: "Accredited FSC certification body",
    since: "2019",
    status: "ACTIVE",
    color: "#2D5228",
    bgLight: "#C8DFC0",
    key3: ["100% Certified Wood", "Annual Audit", "Chain of Custody"],
    downloadable: true,
  },
  {
    id: "iso",
    badge: "ISO",
    shortName: "9001:2015",
    fullName: "Quality Management System",
    code: "ISO 9001:2015",
    certNo: "Certificate available on request",
    scope: "Production, QC, Packaging, Export",
    verifiedBy: "Accredited ISO certification body",
    since: "2019",
    status: "ACTIVE",
    color: "#4A7A3D",
    bgLight: "#C8DFC0",
    key3: ["Production QC", "Third-Party Audited", "Annual Renewal"],
    downloadable: true,
  },
  {
    id: "fda",
    badge: "FDA",
    shortName: "CFR 21",
    fullName: "US Food & Drug Administration",
    code: "21 CFR 176.170",
    certNo: "Direct Food Contact Compliant",
    scope: "All wooden tableware — US market",
    verifiedBy: "US FDA",
    since: "2020",
    status: "COMPLIANT",
    color: "#6B6257",
    bgLight: "#EDE5D8",
    key3: ["No Chemical Coatings", "Direct Food Contact", "US Market Ready"],
    downloadable: false,
  },
  {
    id: "bpi",
    badge: "BPI",
    shortName: "COMPOSTABLE",
    fullName: "Biodegradable Products Institute",
    code: "ASTM D6400 / D6868",
    certNo: "BPI Certified Compostable",
    scope: "Selected product lines",
    verifiedBy: "BPI — USA",
    since: "2021",
    status: "CERTIFIED",
    color: "#2D5228",
    bgLight: "#C8DFC0",
    key3: ["Industrial Compostable", "ASTM Compliant", "US & Canada"],
    downloadable: true,
  },
  {
    id: "bsci",
    badge: "amfori",
    shortName: "BSCI",
    fullName: "Business Social Compliance Initiative",
    code: "amfori BSCI Audit",
    certNo: "Social Compliance Verified",
    scope: "All facilities — annual audit",
    verifiedBy: "amfori — Brussels",
    since: "2021",
    status: "ACTIVE",
    color: "#4A5C4A",
    bgLight: "#D4DFD0",
    key3: ["Labour Rights", "Health & Safety", "Annual Factory Audit"],
    downloadable: true,
  },
  {
    id: "eu",
    badge: "EU",
    shortName: "EC 10/2011",
    fullName: "EU Food Contact Regulation",
    code: "Reg. EC 10/2011 · EN 1400",
    certNo: "Migration Tested",
    scope: "All products exported to EU",
    verifiedBy: "Accredited EU Lab",
    since: "2020",
    status: "COMPLIANT",
    color: "#2D4A8A",
    bgLight: "#D0D8F0",
    key3: ["Migration Tested", "EU Market Ready", "Annual Testing"],
    downloadable: false,
  },
] as const;

/* ── Seal circle SVG ── */
function CertSeal({ badge, shortName, color }: { badge: string; shortName: string; color: string }) {
  return (
    <div className="relative flex-shrink-0" style={{ width: 80, height: 80 }}>
      <svg viewBox="0 0 80 80" width={80} height={80}>
        {/* Outer ring */}
        <circle cx="40" cy="40" r="37" fill="none" stroke={color} strokeWidth="1.5" opacity="0.4" />
        {/* Inner ring */}
        <circle cx="40" cy="40" r="31" fill="none" stroke={color} strokeWidth="0.8" opacity="0.25" />
        {/* Fill */}
        <circle cx="40" cy="40" r="30" fill={color} opacity="0.08" />
        {/* Dashed outer ring */}
        <circle cx="40" cy="40" r="37" fill="none" stroke={color} strokeWidth="0.5"
          strokeDasharray="2 3" opacity="0.5" />
      </svg>
      {/* Badge text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
        <span className="font-mono font-bold leading-none text-center"
          style={{ fontSize: badge.length > 4 ? "8px" : "13px", color, letterSpacing: "0.05em" }}>
          {badge}
        </span>
        <span className="font-mono font-bold leading-none text-center"
          style={{ fontSize: "7px", color, letterSpacing: "0.12em", opacity: 0.75 }}>
          {shortName}
        </span>
      </div>
    </div>
  );
}

/* ── Cert card ── */
function CertCard({ cert, index }: { cert: (typeof CERTS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.62, ease: EASE, delay: index * 0.08 }}
      className="group relative flex flex-col bg-card border border-border hover:border-green/40 hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      {/* Status bar top */}
      <div className="h-[3px] w-full" style={{ background: cert.color }} />

      {/* Card header: seal + name */}
      <div className="px-5 pt-5 pb-4 flex items-start gap-4 border-b border-border">
        <CertSeal badge={cert.badge} shortName={cert.shortName} color={cert.color} />
        <div className="flex flex-col gap-1.5 min-w-0 pt-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="font-mono text-[8px] font-bold uppercase tracking-[0.22em] px-2 py-0.5"
              style={{ background: cert.color, color: "#fff" }}
            >
              {cert.status}
            </span>
            <span className="font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.14em]">
              Since {cert.since}
            </span>
          </div>
          <p className="font-sans font-semibold text-ink text-[13px] leading-tight">
            {cert.fullName}
          </p>
          <p className="font-mono text-[8px] tracking-[0.12em]" style={{ color: cert.color }}>
            {cert.code}
          </p>
        </div>
      </div>

      {/* Cert details */}
      <div className="px-5 py-4 flex flex-col gap-3 flex-1">
        {/* Scope */}
        <div className="flex items-start gap-2">
          <CheckCircle2 size={11} style={{ color: cert.color, flexShrink: 0, marginTop: 2 }} />
          <p className="font-sans text-[12px] text-ink leading-snug">
            <span className="font-semibold">Scope:</span>{" "}
            <span className="text-ink-light">{cert.scope}</span>
          </p>
        </div>

        {/* Verified by */}
        <div
          className="px-3 py-2 flex items-center gap-2"
          style={{ background: cert.bgLight + "40", border: `1px solid ${cert.color}25` }}
        >
          <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-ink-muted">
            Verified by
          </span>
          <span className="font-mono text-[8px] font-bold tracking-[0.1em]" style={{ color: cert.color }}>
            {cert.verifiedBy}
          </span>
        </div>

        {/* Key3 tags */}
        <div className="flex flex-wrap gap-1.5">
          {cert.key3.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[7.5px] uppercase tracking-[0.12em] px-2.5 py-1"
              style={{ border: `1px solid ${cert.color}30`, color: cert.color, background: cert.bgLight + "20" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-4 pt-2 border-t border-border flex items-center justify-between">
        <span className="font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.14em]">
          {cert.certNo}
        </span>
        {cert.downloadable ? (
          <Link
            href="/certifications"
            className="inline-flex items-center gap-1 font-mono text-[7.5px] uppercase tracking-[0.16em] transition-colors duration-200"
            style={{ color: cert.color }}
          >
            <Download size={9} />
            View Certificate
          </Link>
        ) : (
          <Link
            href="/certifications"
            className="inline-flex items-center gap-1 font-mono text-[7.5px] uppercase tracking-[0.16em] transition-colors duration-200 text-ink-muted hover:text-ink"
          >
            <ExternalLink size={9} />
            Learn More
          </Link>
        )}
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section className="bg-parchment paper" aria-labelledby="certs-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-20">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="09" label="Certifications & Compliance" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="certs-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
            >
              Six certifications.
              <br />
              <span className="text-green-deep">Every claim verified.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.2 }}
              className="flex flex-col justify-center gap-5"
            >
              <p className="font-sans font-light text-ink-light text-base leading-relaxed">
                Biopapro holds six active certifications covering forest sourcing,
                manufacturing quality, food safety, compostability, and social
                compliance. Every certificate is independently issued and
                renewed annually.
              </p>
              {/* Trust stat row */}
              <div className="flex items-center gap-6 pt-2 border-t border-border">
                {[
                  { value: "6",    label: "Active Certifications" },
                  { value: "100%", label: "Third-Party Verified"  },
                  { value: "2019", label: "Certified Since"       },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display font-light text-green-deep text-2xl leading-none">{s.value}</p>
                    <p className="font-mono text-[8px] text-ink-muted uppercase tracking-[0.14em] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Cert grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
          className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink-muted">
            Full compliance documentation · Certificate copies · NDA available on request
          </p>
          <Link
            href="/certifications"
            className="group inline-flex items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200"
            style={{ border: "1px solid #4A7A3D", color: "#4A7A3D" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#4A7A3D";
              el.style.color = "#F6F1E8";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#4A7A3D";
            }}
          >
            View All Certifications
            <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
