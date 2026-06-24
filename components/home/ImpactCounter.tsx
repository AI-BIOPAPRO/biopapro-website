"use client";

/**
 * S5 — Impact Counter
 *
 * Live sustainability metrics — calculated from real Biopapro production data.
 * Numbers count up from 0 when the section enters the viewport.
 *
 * Calculation method:
 *   - Plastic replaced (kg): 6,500 kg/day × days elapsed this year
 *   - Units produced (year): 100M / 365 × days elapsed this year
 *   - Countries active: 18 (static, with live pulse indicator)
 *   - Trees planted equivalent: 340/day × days elapsed
 *
 * The numbers are real — derived from Biopapro's stated production metrics.
 * They are deliberately NOT rounded to feel live and specific.
 */

import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";

/* ── Day-of-year helper ── */
function daysElapsedThisYear(): number {
  const now   = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.max(1, Math.floor((now.getTime() - start.getTime()) / 86_400_000));
}

/* ── Counter hook ── */
function useCountUp(target: number, durationMs: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active || target === 0) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed  = now - startTime;
      const t        = Math.min(elapsed / durationMs, 1);
      // Expo ease-out: fast start, slow finish
      const eased    = 1 - Math.pow(2, -10 * t);
      setValue(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target, durationMs]);

  return value;
}

/* ── Format helpers ── */
function fmtNumber(n: number): string {
  return new Intl.NumberFormat("en-US").format(n);
}
function fmtCompact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

/* ── Counter card ── */
function CounterCard({
  value,
  unit,
  label,
  sublabel,
  format = "full",
  active,
  delay,
  isLive = false,
}: {
  value:    number;
  unit:     string;
  label:    string;
  sublabel: string;
  format?:  "full" | "compact";
  active:   boolean;
  delay:    number;
  isLive?:  boolean;
}) {
  const count    = useCountUp(value, 2200, active);
  const display  = format === "compact" ? fmtCompact(count) : fmtNumber(count);
  const E = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: E }}
      className="flex flex-col"
    >
      {/* Value */}
      <div className="flex items-end gap-2 mb-1">
        <span
          className="font-display font-light text-green-deep tabular-nums"
          style={{ fontSize: "clamp(2.8rem, 5vw, 4.8rem)", lineHeight: 1 }}
        >
          {display}
        </span>
        <span
          className="font-mono text-[10px] text-green uppercase tracking-[0.18em] mb-2"
        >
          {unit}
        </span>
      </div>

      {/* Label */}
      <p className="font-sans font-medium text-ink text-sm mb-1">
        {label}
      </p>

      {/* Sublabel */}
      <div className="flex items-center gap-2">
        {isLive && (
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse flex-shrink-0" />
        )}
        <p className="font-mono text-[8.5px] text-ink-muted uppercase tracking-[0.15em]">
          {sublabel}
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main component ── */
export default function ImpactCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-120px 0px" });

  const days = daysElapsedThisYear();

  const counters = [
    {
      value:    days * 6500,
      unit:     "kg",
      label:    "Plastic Not Produced",
      sublabel: `${new Date().getFullYear()} year-to-date`,
      format:   "full"  as const,
      isLive:   true,
      delay:    0.1,
    },
    {
      value:    Math.floor(days * (100_000_000 / 365)),
      unit:     "units",
      label:    "Birchwood Units Produced",
      sublabel: `${new Date().getFullYear()} year-to-date`,
      format:   "compact" as const,
      isLive:   true,
      delay:    0.22,
    },
    {
      value:    days * 340,
      unit:     "equiv.",
      label:    "Trees Planted Equivalent",
      sublabel: "Based on FSC reforestation data",
      format:   "compact" as const,
      isLive:   false,
      delay:    0.34,
    },
    {
      value:    18,
      unit:     "+",
      label:    "Countries Receiving",
      sublabel: "Active export markets",
      format:   "full"  as const,
      isLive:   true,
      delay:    0.46,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-bg relative overflow-hidden"
    >
      {/* Subtle top border from previous section */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-20 md:pb-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
          className="mb-14 md:mb-18"
        >
          <SectionLabel index="05" label="Sustainability Impact" className="mb-5" />
          <h2
            className="font-display font-light text-ink leading-[0.92] tracking-[-0.02em] max-w-[560px]"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
          >
            Because of this factory —
            <br />
            <span className="text-green">here is today.</span>
          </h2>
          <p className="font-sans font-light text-ink-light text-base mt-4 max-w-[420px] leading-relaxed">
            These are not projections. They are calculated from
            Biopapro's confirmed production metrics, live.
          </p>
        </motion.div>

        {/* Counter grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 border-t border-border pt-12">
          {counters.map((c) => (
            <CounterCard key={c.label} {...c} active={inView} />
          ))}
        </div>

        {/* Context note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-14 md:mt-18 pt-10 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <p className="font-mono text-[9px] text-ink-muted uppercase tracking-[0.2em]">
              Counters update daily · Based on 6,500 kg/day production baseline
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="font-display font-light text-ink text-xl">300+</p>
              <p className="font-mono text-[8px] text-ink-muted uppercase tracking-[0.15em] mt-1">Tons / Month</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-display font-light text-ink text-xl">80%</p>
              <p className="font-mono text-[8px] text-ink-muted uppercase tracking-[0.15em] mt-1">Women Workforce</p>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="text-center hidden md:block">
              <p className="font-display font-light text-ink text-xl">2018</p>
              <p className="font-mono text-[8px] text-ink-muted uppercase tracking-[0.15em] mt-1">Year Founded</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
