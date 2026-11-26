"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { MFG_METRICS, BUYER_TRUST_POINTS } from "@/lib/manufacturing-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

function AnimatedNumber({ target, suffix, triggered }: { target: number; suffix: string; triggered: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target]);

  const formatted = display >= 1000 ? display.toLocaleString() : display.toString();

  return <span>{formatted}{suffix}</span>;
}

export default function ManufacturingMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const numericValue = (raw: string) => parseInt(raw.replace(/[^0-9]/g, ""), 10) || 0;

  return (
    <section style={{ background: CREAM }} aria-labelledby="metrics-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        {/* Metrics */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-10"
          >
            <SectionLabel index="07" label="Manufacturing Metrics" />
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-px"
            style={{ background: "rgba(26,71,49,0.1)", border: "1px solid rgba(26,71,49,0.1)", borderRadius: "16px", overflow: "hidden" }}
          >
            {MFG_METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="flex flex-col px-7 py-8"
                style={{ background: i % 2 === 0 ? CREAM : CREAM2 }}
              >
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize:   "clamp(2rem, 3.5vw, 3rem)",
                    color:      ORANGE,
                    lineHeight: 1,
                    marginBottom: "10px",
                  }}
                >
                  <AnimatedNumber
                    target={numericValue(m.value)}
                    suffix={m.suffix}
                    triggered={inView}
                  />
                </span>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize:   "15px",
                    color:      INK,
                    marginBottom: "4px",
                  }}
                >
                  {m.label}
                </span>
                <span className="font-sans text-[13px]" style={{ color: MUTED }}>
                  {m.sub}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why buyers trust */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE, delay: 0.3 }}
            className="mb-8"
          >
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] mb-3" style={{ color: MUTED }}>
              08 · Why Global Buyers Trust Biopapro
            </p>
            <h2
              id="metrics-heading"
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.035em",
                color:         INK,
              }}
            >
              RELIABLE SUPPLY.
              <span style={{ color: ORANGE }}> EVERY TIME.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUYER_TRUST_POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: EASE, delay: 0.35 + i * 0.07 }}
                className="p-5"
                style={{ border: "1px solid rgba(26,71,49,0.1)", background: CREAM2, borderRadius: "14px" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ORANGE }} />
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize:   "15px",
                      color:      INK,
                    }}
                  >
                    {point.title}
                  </h3>
                </div>
                <p className="font-sans text-[14px] leading-relaxed" style={{ color: MUTED }}>
                  {point.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
