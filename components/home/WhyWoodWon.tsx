"use client";

/**
 * S4 — Why Wood Won
 *
 * A decisive, visual science-vs-emotion case for birchwood over plastic.
 * Structure: two-column comparison — each row reveals from both sides
 * on scroll. Plastic (left, terracotta) vs Birchwood (right, forest green).
 *
 * Design philosophy:
 *   - Not a table — a verdict.
 *   - Each row delivers a "punch, punch" reveal: ✗ plastic, ✓ birchwood.
 *   - By the end the visitor feels: "The argument is over."
 */

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { X, Check, ArrowRight, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

/* ── Palette ── */
const PLASTIC = {
  bg:     "#FEF6F3",
  accent: "#B5432A",
  border: "#F5D5CC",
  muted:  "#9A6050",
};
const WOOD = {
  bg:     "#F2F7EE",
  accent: "#3F6B42",
  border: "#C8DFC0",
  muted:  "#5A7A5A",
};

/* ── Comparison data ── */
const COMPARISONS: {
  category:  string;
  plastic:   { headline: string; detail: string };
  birchwood: { headline: string; detail: string };
}[] = [
  {
    category: "Source",
    plastic:   { headline: "Petroleum-derived",     detail: "Non-renewable fossil fuel. Each gram requires extraction, refining, and chemical synthesis." },
    birchwood: { headline: "FSC Certified Forests",  detail: "Birch grown in sustainably managed state forests. Replanted continuously. FSC Chain of Custody." },
  },
  {
    category: "End of Life",
    plastic:   { headline: "500+ year persistence",  detail: "Does not biodegrade — fragments into microplastics that persist in soil and ocean indefinitely." },
    birchwood: { headline: "90-day compost",          detail: "Fully soil-assimilated within 90 days in home or industrial composting. Zero heavy-metal residue." },
  },
  {
    category: "Food Safety",
    plastic:   { headline: "Chemical migration risk", detail: "Phthalates, BPA, styrene, and other plasticizers leach into food — especially at high temperatures." },
    birchwood: { headline: "FDA CFR 21 Certified",    detail: "Zero chemical contact. No bleach, wax, or coatings. Tested under rigorous acetic acid extraction protocols." },
  },
  {
    category: "Heat Performance",
    plastic:   { headline: "Warps above 70°C",        detail: "Structural failure and chemical release at temperatures common in cooked food and hot beverages." },
    birchwood: { headline: "Stable to 100°C+",         detail: "Hydraulic hot-forming and high-temp baking create structural integrity far beyond plastic." },
  },
  {
    category: "Ocean Impact",
    plastic:   { headline: "Microplastic pollution",  detail: "Breaks into nano-particles that enter the marine food chain. Detected in human blood." },
    birchwood: { headline: "Zero ocean persistence",  detail: "Biodegrades fully. No accumulation. No microplastic generation. No marine toxicity." },
  },
  {
    category: "Brand Signal",
    plastic:   { headline: "Consumer rejection",      detail: "78% of global consumers actively prefer brands that eliminate single-use plastic (Euromonitor 2024)." },
    birchwood: { headline: "Premium perception",      detail: "Wooden cutlery is chosen by premium airlines, Michelin-starred catering, and sustainable food brands globally." },
  },
];

const E = [0.16, 1, 0.3, 1] as const;

/* ── Single comparison row ── */
function ComparisonRow({
  row,
  index,
}: {
  row: typeof COMPARISONS[number];
  index: number;
}) {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <div ref={ref} className="grid grid-cols-[1fr_auto_1fr] border-b last:border-b-0"
      style={{ borderColor: "#EDE8E2" }}>

      {/* ── Plastic side ── */}
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.04, duration: 0.65, ease: E }}
        className="flex items-start gap-3 p-5 md:p-7"
        style={{ backgroundColor: PLASTIC.bg }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: `${PLASTIC.accent}18` }}
        >
          <X size={13} strokeWidth={2.5} style={{ color: PLASTIC.accent }} />
        </div>
        <div>
          <p className="font-sans font-semibold text-sm mb-1" style={{ color: PLASTIC.accent }}>
            {row.plastic.headline}
          </p>
          <p className="font-sans text-[12px] leading-relaxed" style={{ color: PLASTIC.muted }}>
            {row.plastic.detail}
          </p>
        </div>
      </motion.div>

      {/* ── Category divider ── */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={inView ? { opacity: 1, scaleY: 1 } : {}}
        transition={{ delay: index * 0.04 + 0.12, duration: 0.5, ease: E }}
        className="flex flex-col items-center justify-center px-3 md:px-5 py-5"
        style={{ borderLeft: `1px solid #EDE8E2`, borderRight: `1px solid #EDE8E2`, minWidth: "90px" }}
      >
        <span className="font-mono text-[7.5px] tracking-[0.25em] text-ink-muted uppercase text-center leading-relaxed">
          {row.category}
        </span>
      </motion.div>

      {/* ── Birchwood side ── */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.04, duration: 0.65, ease: E }}
        className="flex items-start gap-3 p-5 md:p-7"
        style={{ backgroundColor: WOOD.bg }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: `${WOOD.accent}18` }}
        >
          <Check size={13} strokeWidth={2.5} style={{ color: WOOD.accent }} />
        </div>
        <div>
          <p className="font-sans font-semibold text-sm mb-1" style={{ color: WOOD.accent }}>
            {row.birchwood.headline}
          </p>
          <p className="font-sans text-[12px] leading-relaxed" style={{ color: WOOD.muted }}>
            {row.birchwood.detail}
          </p>
        </div>
      </motion.div>

    </div>
  );
}

/* ── Main component ── */
export default function WhyWoodWon() {
  const headerRef  = useRef<HTMLDivElement>(null);
  const headerView = useInView(headerRef, { once: true, margin: "-60px" });
  const footerRef  = useRef<HTMLDivElement>(null);
  const footerView = useInView(footerRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-surface">

      {/* ── Header ── */}
      <div
        ref={headerRef}
        className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-12 md:pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={headerView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: E }}
          className="mb-6"
        >
          <SectionLabel index="04" label="Material Comparison" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={headerView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, duration: 0.7, ease: E }}
              className="font-display font-light text-ink leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)" }}
            >
              Why Wood Won.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={headerView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.16, duration: 0.65, ease: E }}
              className="font-sans font-light text-ink-light text-base md:text-lg mt-3 max-w-[460px]"
            >
              The science is clear. The choice is inevitable.
            </motion.p>
          </div>

          {/* Column labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={headerView ? { opacity: 1 } : {}}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="hidden md:grid grid-cols-[1fr_auto_1fr] w-full max-w-[640px]"
          >
            <div className="text-center pb-2">
              <span className="font-mono text-[8.5px] tracking-[0.28em] uppercase"
                style={{ color: PLASTIC.accent }}>
                Plastic
              </span>
            </div>
            <div className="w-[94px]" />
            <div className="text-center pb-2">
              <span className="font-mono text-[8.5px] tracking-[0.28em] uppercase"
                style={{ color: WOOD.accent }}>
                Birchwood
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Comparison table ── */}
      <div
        className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-20"
      >
        <div className="border border-border overflow-hidden">
          {/* Mobile column headers */}
          <div
            className="md:hidden grid grid-cols-2 border-b"
            style={{ borderColor: "#EDE8E2" }}
          >
            <div className="py-3 px-5 text-center" style={{ backgroundColor: PLASTIC.bg }}>
              <span className="font-mono text-[8px] tracking-[0.28em] uppercase" style={{ color: PLASTIC.accent }}>
                Plastic
              </span>
            </div>
            <div className="py-3 px-5 text-center" style={{ backgroundColor: WOOD.bg }}>
              <span className="font-mono text-[8px] tracking-[0.28em] uppercase" style={{ color: WOOD.accent }}>
                Birchwood
              </span>
            </div>
          </div>

          {COMPARISONS.map((row, i) => (
            <ComparisonRow key={row.category} row={row} index={i} />
          ))}
        </div>
      </div>

      {/* ── Verdict ── */}
      <div
        ref={footerRef}
        className="border-t border-border"
        style={{ backgroundColor: WOOD.bg }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={footerView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: E }}
          >
            <p
              className="font-display font-light leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: WOOD.accent }}
            >
              Birchwood wins.
              <br />
              <span className="text-ink font-light">Every category. Every time.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={footerView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.6, ease: E }}
            className="flex flex-col gap-4"
          >
            <p className="font-mono text-[9px] text-ink-muted uppercase tracking-[0.2em] max-w-[300px] leading-relaxed">
              6,500 kg of plastic not produced
              <br />today. Because of Biopapro.
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
      </div>

    </section>
  );
}
