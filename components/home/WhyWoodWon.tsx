"use client";

/**
 * Why Wood Won — Bold two-panel manifesto
 * LEFT (#1A1208 dark): PLASTIC problem stats
 * RIGHT (#E97316 mango): BIRCHWOOD solution stats
 */

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Aurora, ScrollFloat } from "@/components/reactbits";

const E = [0.16, 1, 0.3, 1] as const;

const PLASTIC_STATS = [
  { number: "500+",  unit: "YEARS",    desc: "to decompose in landfill" },
  { number: "8M",    unit: "TONS",     desc: "enter oceans every year" },
  { number: "BPA",   unit: "+ TOXINS", desc: "leach into your food" },
] as const;

const WOOD_STATS = [
  { number: "90",    unit: "DAYS",     desc: "to fully biodegrade" },
  { number: "FSC®",  unit: "CERT.",    desc: "responsible forest origin" },
  { number: "ZERO",  unit: "CHEMS",    desc: "no chemicals. ever." },
] as const;

function StatRow({
  number, unit, desc, accentColor, descColor, borderColor, inView, delay,
}: {
  number: string; unit: string; desc: string;
  accentColor: string; descColor: string; borderColor: string;
  inView: boolean; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: E }}
      className="flex items-baseline gap-4 py-5 border-b"
      style={{ borderColor }}
    >
      <span
        style={{
          fontFamily:    "'Outfit', sans-serif",
          fontWeight:    900,
          fontSize:      "clamp(2.4rem, 4vw, 3.8rem)",
          lineHeight:    1,
          color:         accentColor,
          letterSpacing: "-0.02em",
          minWidth:      "5rem",
        }}
      >
        {number}
      </span>
      <div>
        <span
          className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] block mb-0.5"
          style={{ color: accentColor, opacity: 0.7 }}
        >
          {unit}
        </span>
        <span className="font-sans text-sm" style={{ color: descColor }}>
          {desc}
        </span>
      </div>
    </motion.div>
  );
}

export default function WhyWoodWon() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-label="Why birchwood beats plastic"
    >
      <div className="flex flex-col lg:flex-row min-h-[600px]">

        {/* ── LEFT: PLASTIC (THE PROBLEM) ── */}
        <div
          className="relative flex-1 overflow-hidden"
          style={{ background: "#F5F0E6" }}
        >
          {/* Watermark */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-end justify-start pointer-events-none select-none overflow-hidden pb-4 pl-6"
          >
            <span
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(5rem, 14vw, 14rem)",
                lineHeight:    1,
                color:         "rgba(26,71,49,0.04)",
                letterSpacing: "-0.04em",
              }}
            >
              PLASTIC
            </span>
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-between">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: E }}
              className="inline-flex items-center gap-2 self-start mb-8"
            >
              <span
                className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] px-3 py-1.5"
                style={{ background: "rgba(181,67,42,0.2)", color: "#B5432A", borderRadius: "2px" }}
              >
                THE PROBLEM
              </span>
            </motion.div>

            {/* Stats */}
            <div className="flex-1">
              {PLASTIC_STATS.map((s, i) => (
                <StatRow
                  key={s.number}
                  {...s}
                  accentColor="#B5432A"
                  descColor="#7A6B54"
                  borderColor="rgba(26,71,49,0.1)"
                  inView={inView}
                  delay={0.15 + i * 0.1}
                />
              ))}
            </div>

            {/* Footer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="font-mono text-[11px] uppercase tracking-[0.2em] mt-8"
              style={{ color: "rgba(26,71,49,0.45)" }}
            >
              Single-use plastic: a global crisis
            </motion.p>
          </div>
        </div>

        {/* ── MIDDLE VS BADGE ── */}
        <div
          className="relative z-20 flex items-center justify-center lg:w-14 py-6 lg:py-0"
          style={{ background: "#EDE5D4" }}
        >
          <div
            className="font-mono text-[10px] font-black uppercase tracking-[0.18em] lg:rotate-90"
            style={{
              color:   "#1A4731",
              padding: "0.5rem 0.75rem",
              background: "#EDE5D4",
            }}
          >
            VS
          </div>
        </div>

        {/* ── RIGHT: BIRCHWOOD (THE SOLUTION) ── */}
        <div
          className="relative flex-1 overflow-hidden"
          style={{ background: "#E97316" }}
        >
          <Aurora col1="#C4580A" col2="#E97316" col3="#E97316" opacity={0.3} />

          {/* Watermark */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-end justify-end pointer-events-none select-none overflow-hidden pb-4 pr-6"
          >
            <span
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(5rem, 14vw, 14rem)",
                lineHeight:    1,
                color:         "rgba(255,255,255,0.055)",
                letterSpacing: "-0.04em",
              }}
            >
              BIRCH
            </span>
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16 h-full flex flex-col justify-between">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.5, ease: E }}
              className="inline-flex items-center gap-2 self-start mb-8"
            >
              <span
                className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] px-3 py-1.5"
                style={{ background: "rgba(255,255,255,0.18)", color: "#FFFFFF", borderRadius: "2px" }}
              >
                THE SOLUTION
              </span>
            </motion.div>

            {/* Stats */}
            <div className="flex-1">
              {WOOD_STATS.map((s, i) => (
                <StatRow
                  key={s.number}
                  {...s}
                  accentColor="#FFFFFF"
                  descColor="rgba(255,255,255,0.75)"
                  borderColor="rgba(255,255,255,0.15)"
                  inView={inView}
                  delay={0.2 + i * 0.1}
                />
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="mt-8 flex items-center gap-4"
            >
              <Link
                href="/sustainability"
                className="group inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300"
                style={{ background: "#1A4731", color: "#FFFFFF", borderRadius: "4px" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1A4731"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#1A4731"; }}
              >
                Our Sustainability Story
                <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Bottom strip */}
      <div
        className="flex items-center justify-center py-5 px-8"
        style={{ background: "#EDE5D4", borderTop: "1px solid rgba(26,71,49,0.1)" }}
      >
        <ScrollFloat delay={0.1}>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.24em] text-center"
            style={{ color: "#7A6B54" }}
          >
            That is why{" "}
            <span style={{ color: "#E97316", fontWeight: 700 }}>18+ countries</span>
            {" "}chose Biopapro birchwood over plastic
          </p>
        </ScrollFloat>
      </div>
    </section>
  );
}
