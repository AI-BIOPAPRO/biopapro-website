"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATIONS } from "@/lib/certifications-data";
import { CERT_LOGOS } from "@/components/certifications/CertLogos";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATUS_STYLE = {
  ACTIVE:    { bg: "rgba(74,122,61,0.15)",  border: "rgba(74,122,61,0.4)",  color: "#4A7A3D"  },
  CERTIFIED: { bg: "rgba(46,125,50,0.15)",  border: "rgba(46,125,50,0.4)",  color: "#2E7D32"  },
  COMPLIANT: { bg: "rgba(26,58,107,0.12)",  border: "rgba(26,58,107,0.4)",  color: "#1A3A6B"  },
} as const;

function CertCard({ cert, index, inView }: {
  cert: typeof CERTIFICATIONS[number];
  index: number;
  inView: boolean;
}) {
  const Logo = CERT_LOGOS[cert.id];
  const status = STATUS_STYLE[cert.status];

  return (
    <motion.div
      id={`cert-${cert.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay: 0.08 + index * 0.06 }}
      className="flex flex-col"
      style={{
        background: "#FAFAF8",
        border: "1px solid #DDD3C5",
        borderTop: `3px solid ${cert.tagColor}`,
      }}
    >
      {/* ── Card header ── */}
      <div className="flex items-start gap-4 p-5 pb-4">
        {/* Circular logo badge */}
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 64,
            height: 64,
            background: "#FFFFFF",
            border: "1.5px solid #DDD3C5",
          }}
        >
          <Logo size={52} />
        </div>

        {/* Name + status */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span
              className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] px-2 py-0.5"
              style={{ background: status.bg, border: `1px solid ${status.border}`, color: status.color }}
            >
              {cert.status}
            </span>
            <span className="font-sans text-[11px] text-ink-muted">
              Since {cert.since}
            </span>
          </div>
          <h3 className="font-sans font-semibold text-ink leading-snug mb-0.5" style={{ fontSize: "14px" }}>
            {cert.name}
          </h3>
          <p className="font-mono text-[11px] text-ink-muted">
            {cert.standard}
          </p>
        </div>
      </div>

      {/* ── Scope ── */}
      <div className="px-5 pb-3">
        <p className="font-sans text-[13px] text-ink-light">
          <span className="font-semibold text-ink">⊙ Scope: </span>
          {cert.scope}
        </p>
      </div>

      {/* ── Verified by ── */}
      <div className="mx-5 mb-3 px-3 py-2" style={{ background: `${cert.tagColor}0D`, border: `1px solid ${cert.tagColor}22` }}>
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-0.5">
          Verified by
        </p>
        <p className="font-sans text-[13px] font-semibold" style={{ color: cert.tagColor }}>
          {cert.verifiedBy}
        </p>
      </div>

      {/* ── Chips ── */}
      <div className="px-5 pb-4 flex flex-wrap gap-1.5">
        {cert.chips.map((chip) => (
          <span
            key={chip}
            className="font-sans text-[11px] px-2.5 py-1"
            style={{ border: "1px solid #DDD3C5", color: "#6B5D50", background: "#F6F1E8" }}
          >
            {chip}
          </span>
        ))}
      </div>

      {/* ── Footer ── */}
      <div
        className="mt-auto flex items-center justify-between px-5 py-3 border-t"
        style={{ borderColor: "#EDE5D8" }}
      >
        <span className="font-mono text-[10px] text-ink-muted truncate max-w-[55%]">
          {cert.certRef}
        </span>
        <a
          href="/contact"
          className="flex items-center gap-1 font-sans text-[11px] font-semibold transition-colors duration-200"
          style={{ color: cert.tagColor }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          Request Certificate
          <ArrowUpRight size={11} strokeWidth={2.5} />
        </a>
      </div>
    </motion.div>
  );
}

export default function CertificationsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="certifications"
      style={{ background: "#F6F1E8" }}
      className="paper"
      aria-labelledby="certs-heading"
    >
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        {/* Section header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="02" label="Certifications & Compliance" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-8">
            <motion.h2
              id="certs-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Nine certifications.
              <br />
              <span style={{ color: "#C89A5B" }}>Every claim verified.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="flex flex-col justify-center gap-5"
            >
              <p className="font-sans font-light text-ink-light leading-relaxed" style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)" }}>
                Biopapro holds nine active certifications covering forest sourcing,
                manufacturing quality, food safety, compostability, and social compliance.
                Every certificate is independently issued and renewed annually.
              </p>
              {/* Mini stats */}
              <div className="flex gap-8">
                {[
                  { v: "9",     l: "Active Certifications"   },
                  { v: "100%",  l: "Third-Party Verified"    },
                  { v: "2019",  l: "Certified Since"         },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-mono font-bold text-[1.4rem] leading-none" style={{ color: "#C89A5B" }}>{s.v}</p>
                    <p className="font-sans text-[11px] text-ink-muted mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3-column certification cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} inView={inView} />
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t"
          style={{ borderColor: "#DDD3C5" }}
        >
          <p className="font-sans text-[13px] text-ink-muted">
            Full compliance documentation · Certificate copies · NDA available on request
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-ink hover:text-ink-light transition-colors duration-200"
          >
            View All Certifications
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
