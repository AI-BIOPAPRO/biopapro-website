"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { PRODUCTION_STEPS } from "@/lib/manufacturing-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProductionJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section id="production" style={{ background: "#EFE6D7" }} aria-labelledby="journey-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="03" label="Production Journey" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="journey-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              From certified supply
              <br />
              <span style={{ color: "#C89A5B" }}>to your warehouse.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)" }}
            >
              Biopapro's production model begins with certified semi-finished birchwood
              from approved suppliers and ends with a fully documented container at your
              port. Six controlled stages. No shortcuts.
            </motion.p>
          </div>
        </div>

        {/* Journey steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTION_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.08 }}
              className="relative p-6"
              style={{ background: "#FBF8F2", border: "1px solid #DDD3C5" }}
            >
              {/* Step number */}
              <div className="flex items-start justify-between mb-5">
                <span
                  className="font-mono font-bold leading-none"
                  style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)", color: "rgba(200,154,91,0.18)" }}
                >
                  {step.step}
                </span>
                <span
                  className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1"
                  style={{
                    background: step.accent === "#4A7A3D" ? "rgba(74,122,61,0.1)" : "rgba(200,154,91,0.1)",
                    border: `1px solid ${step.accent}33`,
                    color: step.accent === "#4A7A3D" ? "#4A7A3D" : "#8C6239",
                  }}
                >
                  {step.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sans font-semibold text-ink mb-3 leading-snug" style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)" }}>
                {step.title}
              </h3>

              {/* Body */}
              <p className="font-sans font-light text-ink-light leading-relaxed" style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)" }}>
                {step.body}
              </p>

              {/* Connector arrow — desktop only, not on last item */}
              {i < PRODUCTION_STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12h8M13 8l4 4-4 4" stroke="#C89A5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
