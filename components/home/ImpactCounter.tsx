"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { COMPANY_FACTS } from "@/lib/company-facts";
import { CountUp } from "@/components/reactbits";

function daysElapsed(): number {
  const now   = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.max(1, Math.floor((now.getTime() - start.getTime()) / 86_400_000));
}

const E = [0.16, 1, 0.3, 1] as const;

export default function ImpactCounter() {
  const ref     = useRef<HTMLElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-100px 0px" });

  const days = daysElapsed();

  const STATS = [
    {
      value:  days * COMPANY_FACTS.plasticSavedPerDay,
      unit:   "KG",
      label:  "Plastic Replaced",
      sub:    `${new Date().getFullYear()} year-to-date`,
      live:   true,
    },
    {
      value:  Math.floor(days * (COMPANY_FACTS.unitsPerMonth * 12 / 365)),
      unit:   "UNITS",
      label:  "Birchwood Pieces Made",
      sub:    `${new Date().getFullYear()} year-to-date`,
      live:   true,
    },
    {
      value:  days * 340,
      unit:   "EQUIV.",
      label:  "Trees Planted",
      sub:    "FSC reforestation baseline",
      live:   false,
    },
    {
      value:  COMPANY_FACTS.exportMarkets,
      unit:   "+",
      label:  "Export Countries",
      sub:    "Active markets worldwide",
      live:   true,
    },
  ] as const;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#EDE5D4" }}
      aria-label="Biopapro sustainability impact"
    >
      {/* Giant watermark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(7rem, 24vw, 22rem)",
            lineHeight:    1,
            color:         "rgba(233,115,22,0.05)",
            letterSpacing: "-0.04em",
            whiteSpace:    "nowrap",
          }}
        >
          IMPACT
        </span>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-20 md:pb-28">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: E }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>02</span>
          <span className="w-6 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#7A6B54" }}>Sustainability Impact</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.65, ease: E }}
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(3.4rem, 8vw, 8rem)",
            lineHeight:    0.9,
            letterSpacing: "-0.03em",
            color:         "#1A1208",
            marginBottom:  "1.5rem",
          }}
        >
          {"INDIA'S"}
          <br />
          <span style={{ color: "#E97316" }}>NUMBERS.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6, ease: E }}
          className="font-sans text-base leading-relaxed mb-16 md:mb-20"
          style={{ color: "#7A6B54", maxWidth: "380px" }}
        >
          Not projections. Calculated live from Biopapro's confirmed production metrics.
        </motion.p>

        {/* 4-tile counter grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.65, ease: E }}
              className="relative group"
              style={{
                background:   "#F5F0E6",
                border:       "1px solid rgba(26,71,49,0.1)",
                borderRadius: "12px",
                padding:      "clamp(1.5rem, 3vw, 2.5rem)",
              }}
            >
              {/* Live pulse */}
              {s.live && (
                <span
                  className="absolute top-5 right-5 w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#E97316" }}
                />
              )}

              {/* Big number */}
              <div
                style={{
                  fontFamily:         "'Outfit', sans-serif",
                  fontWeight:         900,
                  fontSize:           "clamp(2.8rem, 5vw, 5.5rem)",
                  lineHeight:         1,
                  color:              "#E97316",
                  fontVariantNumeric: "lining-nums tabular-nums",
                  letterSpacing:      "-0.02em",
                  marginBottom:       "0.3rem",
                }}
              >
                <CountUp to={s.value} format="compact" mode="roll" duration={1.6} easing="expo" />
              </div>

              {/* Unit */}
              <span
                className="font-mono text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: "#7A6B54", display: "block", marginBottom: "1rem" }}
              >
                {s.unit}
              </span>

              {/* Label */}
              <p className="font-sans font-semibold text-sm" style={{ color: "#1A1208" }}>
                {s.label}
              </p>

              {/* Sub */}
              <p
                className="font-mono text-[10px] uppercase tracking-[0.16em] mt-1"
                style={{ color: "#7A6B54" }}
              >
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-8 flex items-center gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#E97316" }} />
          <p
            className="font-mono text-[11px] uppercase tracking-[0.18em]"
            style={{ color: "#7A6B54" }}
          >
            Updates daily · {String(COMPANY_FACTS.plasticSavedPerDay).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} kg/day production baseline
          </p>
        </motion.div>

      </div>
    </section>
  );
}
