"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { FACTORY_CAPABILITIES, QA_CHECKPOINTS } from "@/lib/manufacturing-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const STAGE_COLORS: Record<string, string> = {
  "Pre-Production": "#C89A5B",
  "In-Process":     "#8C6239",
  "Post-Production":"#4A7A3D",
  "Food Safety":    "#4A7A3D",
  "Packaging":      "#C89A5B",
  "Pre-Shipment":   "#C89A5B",
};

export default function QualityAssurance() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  // Group checkpoints by stage
  const stages = Array.from(new Set(QA_CHECKPOINTS.map((c) => c.stage)));

  return (
    <section style={{ background: "#1D1610" }} className="grain" aria-labelledby="qa-heading">
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
              className="font-display font-light leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#F6F1E8" }}
            >
              Every shipment
              <br />
              <span style={{ color: "#C89A5B" }}>controlled and repeatable.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: "rgba(230,210,185,0.70)" }}
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
              className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "rgba(200,154,91,0.65)" }}
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
                  style={{ border: "1px solid #3D2E22", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-sans font-semibold text-[15px]" style={{ color: "#F6F1E8" }}>
                      {cap.title}
                    </h3>
                    <span
                      className="font-mono text-[11px] px-2.5 py-1 flex-shrink-0"
                      style={{ background: "rgba(200,154,91,0.1)", border: "1px solid rgba(200,154,91,0.25)", color: "#C89A5B" }}
                    >
                      {cap.metric}
                    </span>
                  </div>
                  <p className="font-sans text-[14px] leading-relaxed" style={{ color: "rgba(230,210,185,0.65)" }}>
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
              className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] mb-5"
              style={{ color: "rgba(200,154,91,0.65)" }}
            >
              Quality Checkpoints — 12 per batch
            </motion.p>
            <div className="flex flex-col gap-6">
              {stages.map((stage, si) => {
                const checks = QA_CHECKPOINTS.filter((c) => c.stage === stage);
                const color = STAGE_COLORS[stage] ?? "#C89A5B";
                return (
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, x: 12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.25 + si * 0.08 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                      <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em]" style={{ color }}>
                        {stage}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2 pl-4" style={{ borderLeft: `1px solid ${color}33` }}>
                      {checks.map((c) => (
                        <p key={c.check} className="font-sans text-[13px] leading-snug" style={{ color: "rgba(230,210,185,0.65)" }}>
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
