"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { CAPABILITY_METRICS } from "@/lib/manufacturing-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function CapabilityOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#F6F1E8" }} className="paper" aria-labelledby="capability-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="02" label="Capability Overview" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="capability-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Investor-grade
              <br />
              <span style={{ color: "#C89A5B" }}>manufacturing facts.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)" }}
            >
              A complete picture of Biopapro's manufacturing and export capability —
              facility, workforce, certifications, capacity, and logistics in one view.
            </motion.p>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#DDD3C5", border: "1px solid #DDD3C5" }}>
          {CAPABILITY_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.05 }}
              className="flex flex-col px-7 py-6"
              style={{ background: "#F6F1E8" }}
            >
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-2">
                {m.label}
              </span>
              <span className="font-sans font-medium text-ink leading-snug" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}>
                {m.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom editorial note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
          className="mt-8 font-sans text-[14px] text-ink-muted leading-relaxed max-w-2xl"
        >
          All figures reflect current production capacity at Biopapro's Mumbai facility.
          Certifications are maintained continuously — not only at audit intervals.
          Independent audit reports available on request.
        </motion.p>
      </div>
    </section>
  );
}
