"use client";

/**
 * S4 — Why Wood Won
 *
 * A material specification, not a marketing comparison table.
 * Structure: editorial thesis line, then a technical spec-sheet body
 * (hairlines, mono data, no colored icon badges), closing on a quiet
 * material/temperature cue rather than a second visual bit.
 *
 * Design philosophy:
 *   - Reads like a datasheet a procurement engineer would actually receive.
 *   - Color carries the verdict (terracotta vs. forest green text), not icons.
 *   - The table doesn't perform an entrance — it's just there, precise and still.
 */

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

/* ── Palette ── */
const PLASTIC = {
  accent: "#B5432A",
  muted:  "#9A6050",
};
const WOOD = {
  accent: "#3F6B42",
  muted:  "#5A7A5A",
};

/* ── Comparison data — unchanged from source ── */
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

/* ── Single spec row — static, no per-row entrance motion ── */
function SpecRow({ row, index }: { row: typeof COMPARISONS[number]; index: number }) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] border-t"
      style={{ borderColor: "#E3DDD3" }}
    >
      {/* Category label */}
      <div className="flex items-center px-6 md:px-0 md:pl-0 pt-5 md:pt-6 pb-1 md:pb-6">
        <span className="font-mono text-[11px] tracking-[0.22em] text-ink-muted uppercase">
          {String(index + 1).padStart(2, "0")} — {row.category}
        </span>
      </div>

      {/* Plastic spec */}
      <div
        className="px-6 md:px-7 py-3 md:py-6 md:border-l"
        style={{ borderColor: "#E3DDD3" }}
      >
        <p className="md:hidden font-mono text-[11px] tracking-[0.18em] uppercase mb-1.5" style={{ color: PLASTIC.accent }}>
          Plastic
        </p>
        <p className="font-sans font-semibold text-sm mb-1" style={{ color: PLASTIC.accent }}>
          {row.plastic.headline}
        </p>
        <p className="font-sans text-[12px] leading-relaxed" style={{ color: PLASTIC.muted }}>
          {row.plastic.detail}
        </p>
      </div>

      {/* Birchwood spec */}
      <div
        className="px-6 md:px-7 py-3 md:py-6 pb-6 md:pb-6 md:border-l"
        style={{ borderColor: "#E3DDD3" }}
      >
        <p className="md:hidden font-mono text-[11px] tracking-[0.18em] uppercase mb-1.5" style={{ color: WOOD.accent }}>
          Birchwood
        </p>
        <p className="font-sans font-semibold text-sm mb-1" style={{ color: WOOD.accent }}>
          {row.birchwood.headline}
        </p>
        <p className="font-sans text-[12px] leading-relaxed" style={{ color: WOOD.muted }}>
          {row.birchwood.detail}
        </p>
      </div>
    </div>
  );
}

/* ── Main component ── */
export default function WhyWoodWon() {
  const headerRef  = useRef<HTMLDivElement>(null);
  const headerView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-surface">

      {/* ── Editorial thesis ── */}
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
          <SectionLabel index="01" label="Material Comparison" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={headerView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.7, ease: E }}
          className="font-display font-light text-ink leading-[0.9] tracking-[-0.02em] max-w-[720px]"
          style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)" }}
        >
          Why Wood Won.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={headerView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.16, duration: 0.65, ease: E }}
          className="font-sans font-light text-ink-light text-base md:text-lg mt-4 max-w-[460px]"
        >
          The science is clear. The choice is inevitable.
        </motion.p>
      </div>

      {/* ── Spec sheet — static, no entrance choreography ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-20">
        <div className="border" style={{ borderColor: "#E3DDD3" }}>
          {/* Header row — desktop only, mobile repeats labels per row */}
          <div className="hidden md:grid grid-cols-[160px_1fr_1fr] pb-3 pt-1">
            <div />
            <div className="px-7 border-l" style={{ borderColor: "#E3DDD3" }}>
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase" style={{ color: PLASTIC.accent }}>
                Plastic
              </span>
            </div>
            <div className="px-7 border-l" style={{ borderColor: "#E3DDD3" }}>
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase" style={{ color: WOOD.accent }}>
                Birchwood
              </span>
            </div>
          </div>

          {COMPARISONS.map((row, i) => (
            <SpecRow key={row.category} row={row} index={i} />
          ))}
        </div>
      </div>

      {/* ── Material conclusion — quiet warmth cue, no split-screen ── */}
      <div
        className="border-t border-border"
        style={{
          background: "linear-gradient(135deg, #F2F7EE 0%, #F2F7EE 55%, #F5EEDD 100%)",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div>
            <p
              className="font-display font-light leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", color: WOOD.accent }}
            >
              Birchwood wins.
              <br />
              <span className="text-ink font-light">Every category. Every time.</span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.2em] max-w-[300px] leading-relaxed">
              6,500 kg of plastic not produced
              <br />today. Because of Biopapro.
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
          </div>

        </div>
      </div>

    </section>
  );
}
