"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { FACTORY_CAPABILITIES, QA_CHECKPOINTS } from "@/lib/manufacturing-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

const STAGE_COLORS: Record<string, string> = {
  "Pre-Production": ORANGE,
  "In-Process":     MUTED,
  "Post-Production": GREEN,
  "Food Safety":    GREEN,
  "Packaging":      ORANGE,
  "Pre-Shipment":   ORANGE,
};

export default function QualityAssurance() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  const stages = Array.from(new Set(QA_CHECKPOINTS.map((c) => c.stage)));

  return (
    <section style={{ background: CREAM2 }} aria-labelledby="qa-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="04" label="Quality Assurance" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="qa-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 3.5vw, 3.2rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.035em",
                color:         INK,
              }}
            >
              EVERY SHIPMENT<br />
              <span style={{ color: ORANGE }}>CONTROLLED AND REPEATABLE.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: MUTED }}
            >
              ISO 9001:2015 certified quality management. BRCGS Food Safety certified.
              12+ controlled checkpoints from material intake to container loading —
              each one documented and signed off before the next stage begins.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left — factory capabilities */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
              className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] mb-5"
              style={{ color: MUTED }}
            >
              Operational Capabilities
            </motion.p>
            <div className="flex flex-col gap-3">
              {FACTORY_CAPABILITIES.map((cap, i) => (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.07 }}
                  className="p-5"
                  style={{ border: "1px solid rgba(26,71,49,0.1)", background: CREAM, borderRadius: "14px" }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize:   "15px",
                        color:      INK,
                      }}
                    >
                      {cap.title}
                    </h3>
                    <span
                      className="font-mono text-[11px] px-2.5 py-1 flex-shrink-0"
                      style={{ background: "rgba(233,115,22,0.08)", border: "1px solid rgba(233,115,22,0.2)", color: ORANGE, borderRadius: "6px" }}
                    >
                      {cap.metric}
                    </span>
                  </div>
                  <p className="font-sans text-[14px] leading-relaxed" style={{ color: MUTED }}>
                    {cap.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — QA checkpoint list */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
              className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] mb-5"
              style={{ color: MUTED }}
            >
              Quality Checkpoints — 12 per batch
            </motion.p>
            <div className="flex flex-col gap-6">
              {stages.map((stage, si) => {
                const checks = QA_CHECKPOINTS.filter((c) => c.stage === stage);
                const color = STAGE_COLORS[stage] ?? ORANGE;
                return (
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.25 + si * 0.08 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                      <span className="font-mono text-[12px] font-bold uppercase tracking-[0.1em]" style={{ color }}>
                        {stage}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 pl-4" style={{ borderLeft: `1px solid ${color}30` }}>
                      {checks.map((c) => (
                        <p key={c.check} className="font-sans text-[13px] leading-snug" style={{ color: MUTED }}>
                          {c.check}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
