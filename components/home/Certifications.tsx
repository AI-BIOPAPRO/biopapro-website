"use client";

/**
 * S9 — Certifications
 *
 * Trust vault — official seal-style presentation.
 * Visitors must immediately recognise FSC, ISO, BRCGS.
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
import { COMPANY_FACTS } from "@/lib/company-facts";
import { CERT_LOGOS } from "@/components/certifications/CertLogos";

const EASE = [0.16, 1, 0.3, 1] as const;

const CERTS = [
  {
    id: "fsc",
    badge: "FSC®",
    shortName: "FSC",
    fullName: "Forest Stewardship Council",
    code: "Chain of Custody Certified",
    certNo: "SGSHK-COC-400230",
    scope: "100% of raw material — all product lines",
    verifiedBy: "SGS Hong Kong Limited",
    since: "2022",
    status: "ACTIVE",
    color: "#2D5228",
    bgLight: "#C8DFC0",
    key3: ["FSC 100%", "Chain of Custody", "Annual Audit"],
    downloadable: true,
  },
  {
    id: "iso9001",
    badge: "ISO",
    shortName: "9001:2015",
    fullName: "Quality Management System",
    code: "ISO 9001:2015",
    certNo: "IN/87521966/2521",
    scope: "Production, QC, Packaging, Export",
    verifiedBy: "ICV Assessments Pvt. Ltd.",
    since: "2025",
    status: "ACTIVE",
    color: "#4A7A3D",
    bgLight: "#C8DFC0",
    key3: ["EGAC Accredited", "Third-Party Audited", "Valid to 2028"],
    downloadable: true,
  },
  {
    id: "iso14001",
    badge: "ISO",
    shortName: "14001:2015",
    fullName: "Environmental Management System",
    code: "ISO 14001:2015",
    certNo: "IN/78621967/8965",
    scope: "Energy, Waste, Material Consumption",
    verifiedBy: "ICV Assessments Pvt. Ltd.",
    since: "2025",
    status: "ACTIVE",
    color: "#4A7A3D",
    bgLight: "#C8DFC0",
    key3: ["EGAC Accredited", "Third-Party Audited", "Valid to 2028"],
    downloadable: true,
  },
  {
    id: "iso45001",
    badge: "ISO",
    shortName: "45001:2018",
    fullName: "Occupational Health & Safety",
    code: "ISO 45001:2018",
    certNo: "IN/38421968/7610",
    scope: "All facilities — workforce safety",
    verifiedBy: "ICV Assessments Pvt. Ltd.",
    since: "2025",
    status: "ACTIVE",
    color: "#4A7A3D",
    bgLight: "#C8DFC0",
    key3: ["EGAC Accredited", "Third-Party Audited", "Valid to 2028"],
    downloadable: true,
  },
  {
    id: "brcgs",
    badge: "BRCGS",
    shortName: "CONSUMER PRODUCTS",
    fullName: "Global Standard for Consumer Products",
    code: "BRCGS Issue 4 — Foundation Level",
    certNo: "IN21/818844913",
    scope: "Manufacture of wooden cutlery — full facility",
    verifiedBy: "SGS United Kingdom Ltd.",
    since: "2026",
    status: "ACTIVE",
    color: "#005C8B",
    bgLight: "#D0D8F0",
    key3: ["UKAS Accredited", "Grade: PASSED", "Valid to Aug 2027"],
    downloadable: true,
  },
] as const;

/* ── Seal circle, logo pulled from the actual issued certificate ── */
function CertSeal({ id, color }: { id: string; color: string }) {
  const Logo = CERT_LOGOS[id];
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
      {/* Real logo, cropped from the issued certificate */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {Logo && <Logo size={48} />}
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
        <CertSeal id={cert.id} color={cert.color} />
        <div className="flex flex-col gap-1.5 min-w-0 pt-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] px-2 py-0.5"
              style={{ background: cert.color, color: "#fff" }}
            >
              {cert.status}
            </span>
            <span className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.14em]">
              Since {cert.since}
            </span>
          </div>
          <p className="font-sans font-semibold text-ink text-[13px] leading-tight">
            {cert.fullName}
          </p>
          <p className="font-mono text-[11px] tracking-[0.12em]" style={{ color: cert.color }}>
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
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Verified by
          </span>
          <span className="font-mono text-[11px] font-bold tracking-[0.1em]" style={{ color: cert.color }}>
            {cert.verifiedBy}
          </span>
        </div>

        {/* Key3 tags */}
        <div className="flex flex-wrap gap-1.5">
          {cert.key3.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] uppercase tracking-[0.12em] px-2.5 py-1"
              style={{ border: `1px solid ${cert.color}30`, color: cert.color, background: cert.bgLight + "20" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-4 pt-2 border-t border-border flex items-center justify-between">
        <span className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.14em]">
          {cert.certNo}
        </span>
        {cert.downloadable ? (
          <Link
            href="/certifications"
            className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200"
            style={{ color: cert.color }}
          >
            <Download size={9} />
            View Certificate
          </Link>
        ) : (
          <Link
            href="/certifications"
            className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 text-ink-muted hover:text-ink"
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

        {/* ── Header — a single quiet fade, not a staggered reveal ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 10 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14"
        >
          <div className="mb-7">
            <SectionLabel index="07" label="Certifications & Compliance" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <h2
              id="certs-heading"
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)" }}
            >
              Five certifications.
              <br />
              <span className="text-green-deep">Every claim verified.</span>
            </h2>

            <div className="flex flex-col justify-center gap-5">
              <p className="font-sans font-light text-ink-light text-base leading-relaxed">
                Biopapro holds five active certifications covering forest sourcing,
                manufacturing quality, environmental management, workplace safety,
                and consumer product standards. Every certificate is independently
                issued and audited.
              </p>
              {/* Trust stat row */}
              <div className="flex items-center gap-6 pt-2 border-t border-border">
                {[
                  { value: "5",    label: "Active Certifications" },
                  { value: "100%", label: "Third-Party Verified"  },
                  { value: String(COMPANY_FACTS.founded), label: "Certified Since" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display font-light text-green-deep text-2xl leading-none">{s.value}</p>
                    <p className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.14em] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

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
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Full compliance documentation · Certificate copies · NDA available on request
          </p>
          <Link
            href="/certifications"
            className="group inline-flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200"
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
