"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_FACTS } from "@/lib/company-facts";

const E = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  { n: "01", title: "Certified Birchwood Supply",   detail: "FSC® semi-finished, imported" },
  { n: "02", title: "Incoming Material Inspection", detail: "Dimensional, surface, moisture checks" },
  { n: "03", title: "Precision Finishing",           detail: "Stamping lines · 100M+ units/month" },
  { n: "04", title: "Quality Control",               detail: "Optical sort · AQL 2.5 · UV sterilised" },
  { n: "05", title: "Packaging & Export Prep",       detail: "Cartons, documentation, labelling" },
  { n: "06", title: "Distribution",                  detail: "Domestic dispatch + FCL/LCL export" },
] as const;

export default function ManufacturingCredibility() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#EDE5D4" }}
      aria-label="Biopapro manufacturing process"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">

        {/* Section label + headline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: E }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>06</span>
          <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.4)" }} />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#7A6B54" }}>Manufacturing</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.65, ease: E }}
          >
            <div
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(0.65rem, 1.5vw, 0.9rem)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color:         "#7A6B54",
                marginBottom:  "0.4rem",
              }}
            >
              MADE IN
            </div>
            <div
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(3.5rem, 7vw, 7rem)",
                lineHeight:    0.9,
                letterSpacing: "-0.03em",
                color:         "#1A4731",
              }}
            >
              MUMBAI.
            </div>
          </motion.div>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: E }}
            className="inline-flex items-center gap-2 px-4 py-2 self-start lg:self-auto"
            style={{ background: "rgba(26,71,49,0.08)", borderRadius: "4px" }}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#7A6B54" }}>
              Located in
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#E97316" }}>
              {COMPANY_FACTS.location}
            </span>
          </motion.div>
        </div>

        {/* 6 steps — 2-column grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 mb-10">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.55, ease: E }}
              className="flex items-start gap-4 py-3 border-b"
              style={{ borderColor: "rgba(26,71,49,0.1)" }}
            >
              <span
                className="font-mono text-[11px] font-bold flex-shrink-0 mt-0.5"
                style={{ color: "#E97316", width: "1.8rem" }}
              >
                {step.n}
              </span>
              <div className="min-w-0">
                <p className="font-sans font-semibold text-sm" style={{ color: "#1A1208" }}>
                  {step.title}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] mt-0.5" style={{ color: "#7A6B54" }}>
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex items-center justify-between gap-6 flex-wrap"
        >
          <div className="flex items-center gap-6">
            <div>
              <p
                suppressHydrationWarning
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize:   "1.6rem",
                  color:      "#E97316",
                  lineHeight: 1,
                }}
              >
                {String(COMPANY_FACTS.unitsPerMonth).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}+
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] mt-1" style={{ color: "#7A6B54" }}>
                Units / Month
              </p>
            </div>
            <div className="w-px h-10" style={{ background: "rgba(26,71,49,0.15)" }} />
            <div>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 900,
                  fontSize:   "1.6rem",
                  color:      "#E97316",
                  lineHeight: 1,
                }}
              >
                {COMPANY_FACTS.tonsPerMonth}+
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] mt-1" style={{ color: "#7A6B54" }}>
                Tons / Month
              </p>
            </div>
          </div>

          <Link
            href="/manufacturing"
            className="group inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300"
            style={{ background: "#1A4731", color: "#F5F0E6", borderRadius: "4px" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#E97316";
              (e.currentTarget as HTMLElement).style.color      = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1A4731";
              (e.currentTarget as HTMLElement).style.color      = "#F5F0E6";
            }}
          >
            Tour the Factory
            <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
