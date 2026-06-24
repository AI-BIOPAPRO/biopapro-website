"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { JOURNEY_STEPS } from "@/lib/global-presence-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContainerJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#FBF8F2" }} aria-labelledby="journey-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="06" label="A Container's Journey" />
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
              Forest to your
              <br />
              <span style={{ color: "#C89A5B" }}>loading dock.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light text-base leading-relaxed flex items-center"
            >
              Every Biopapro shipment follows the same nine-step supply chain
              — from FSC-certified forest to final delivery. Full documentation
              issued at each quality gate.
            </motion.p>
          </div>
        </div>

        {/* Journey timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <motion.div
            className="absolute left-[19px] top-6 bottom-6 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #DDD3C5, #C89A5B, #DDD3C5)" }}
            initial={{ scaleY: 0, transformOrigin: "top" }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
          />

          <div className="space-y-0">
            {JOURNEY_STEPS.map((step, i) => {
              const isLast = i === JOURNEY_STEPS.length - 1;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.3 + i * 0.08 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-5"
                  style={{ borderBottom: isLast ? "none" : "1px solid #EDE5D8" }}
                >
                  {/* Step number + dot */}
                  <div className="md:col-span-1 flex items-start gap-3 md:flex-col md:gap-0">
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 relative z-10"
                      style={{
                        background: i === 0 || i === JOURNEY_STEPS.length - 1 ? "#C89A5B" : "#FBF8F2",
                        border: `1.5px solid ${i === 0 || i === JOURNEY_STEPS.length - 1 ? "#C89A5B" : "#DDD3C5"}`,
                      }}
                    >
                      <span
                        className="font-mono text-[9px] font-bold"
                        style={{ color: i === 0 || i === JOURNEY_STEPS.length - 1 ? "#1D1610" : "#6B5D50" }}
                      >
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="md:col-span-2 flex md:flex-col items-start md:items-start md:justify-center gap-2">
                    <span
                      className="font-mono text-[7.5px] uppercase tracking-[0.18em] px-2.5 py-1 whitespace-nowrap"
                      style={{
                        background: "rgba(200,154,91,0.1)",
                        border: "1px solid rgba(200,154,91,0.25)",
                        color: "#8C6239",
                      }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-3 flex items-center">
                    <h3 className="font-sans font-semibold text-ink text-[13.5px] leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Body */}
                  <div className="md:col-span-6 flex items-center">
                    <p className="font-sans text-[12.5px] font-light text-ink-light leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
