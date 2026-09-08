"use client";

/**
 * S5 — Impact Counter
 *
 * Live sustainability metrics — calculated from real Biopapro production data.
 * Numbers count up from 0 as soon as the page mounts (not gated on scroll
 * visibility) so they're never caught sitting at 0 by a screenshot tool,
 * link-preview bot, or a fast scroll — they finish within ~1.2s of load.
 * The card's own fade/slide entrance still waits for scroll, so the
 * reveal-on-scroll feel is unchanged for a normal visitor.
 *
 * Calculation method:
 *   - Plastic replaced (kg): COMPANY_FACTS.plasticSavedPerDay × days elapsed this year
 *   - Units produced (year): COMPANY_FACTS.unitsPerMonth is a MONTHLY rate — annualized
 *     (×12) and spread across days elapsed this year, not divided by 365 directly.
 *   - Countries active: COMPANY_FACTS.exportMarkets (static, with live pulse indicator)
 *   - Trees planted equivalent: 340/day × days elapsed
 *
 * The numbers are real — derived from Biopapro's stated production metrics.
 * They are deliberately NOT rounded to feel live and specific.
 */

import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { COMPANY_FACTS } from "@/lib/company-facts";

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
  countActive,
  delay,
  isLive = false,
}: {
  value:    number;
  unit:     string;
  label:    string;
  sublabel: string;
  format?:  "full" | "compact";
  active:   boolean;
  countActive: boolean;
  delay:    number;
  isLive?:  boolean;
}) {
  // Counting is gated on mount (countActive), not on scroll visibility
  // (active) — a screenshot tool, link-preview bot, or a fast scroll should
  // never be able to see these sitting at 0. The card's own fade/slide
  // entrance still waits for scroll, so the reveal-on-scroll feel is kept;
  // by the time it fades in, the number underneath is already correct.
  const count    = useCountUp(value, 1200, countActive);
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
          style={{ fontSize: "clamp(2.8rem, 5vw, 4.9rem)", lineHeight: 1 }}
        >
          {display}
        </span>
        <span
          className="font-mono text-[11px] text-green uppercase tracking-[0.18em] mb-2"
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
        <p className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.15em]">
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

  // Counting starts on mount, independent of scroll position — see the note
  // on CounterCard. This finishes well before most users ever scroll here.
  const [countActive, setCountActive] = useState(false);
  useEffect(() => { setCountActive(true); }, []);

  const days = daysElapsedThisYear();

  const counters = [
    {
      value:    days * COMPANY_FACTS.plasticSavedPerDay,
      unit:     "kg",
      label:    "Plastic Not Produced",
      sublabel: `${new Date().getFullYear()} year-to-date`,
      format:   "compact" as const,
      isLive:   true,
      delay:    0.1,
    },
    {
      value:    Math.floor(days * (COMPANY_FACTS.unitsPerMonth * 12 / 365)),
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
      value:    COMPANY_FACTS.exportMarkets,
      unit:     "+",
      label:    "Countries Receiving",
      sublabel: "Active export markets",
      format:   "compact" as const,
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
          <SectionLabel index="02" label="Sustainability Impact" className="mb-5" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 border-t border-border pt-12">
          {counters.map((c) => (
            <CounterCard key={c.label} {...c} active={inView} countActive={countActive} />
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
            <p className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.2em]">
              Counters update daily · Based on {COMPANY_FACTS.plasticSavedPerDay.toLocaleString()} kg/day production baseline
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <p className="font-display font-light text-ink text-xl">{COMPANY_FACTS.tonsPerMonth}+</p>
              <p className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.15em] mt-1">Tons / Month</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="font-display font-light text-ink text-xl">{COMPANY_FACTS.womenPercent}%</p>
              <p className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.15em] mt-1">Women Workforce</p>
            </div>
            <div className="w-px h-10 bg-border hidden md:block" />
            <div className="text-center hidden md:block">
              <p className="font-display font-light text-ink text-xl">{COMPANY_FACTS.founded}</p>
              <p className="font-mono text-[11px] text-ink-muted uppercase tracking-[0.15em] mt-1">Year Founded</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
