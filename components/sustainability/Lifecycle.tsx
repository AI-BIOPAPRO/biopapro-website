"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { LIFECYCLE_STAGES } from "@/lib/sustainability-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Lifecycle() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#EFE6D7" }} aria-labelledby="lifecycle-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="04" label="Product Lifecycle" />
          </motion.div>
          <motion.h2
            id="lifecycle-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="font-display font-light text-ink leading-[0.95] max-w-2xl"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            From certified forest
            <br />
            <span style={{ color: "#4A7A3D" }}>back to the earth.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {LIFECYCLE_STAGES.map((stage, i) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.1 }}
              className="relative p-6"
              style={{ background: "#FBF8F2", border: "1px solid #DDD3C5" }}
            >
              {/* Large step number */}
              <span
                className="block font-mono font-bold leading-none mb-4"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "rgba(74,122,61,0.15)" }}
              >
                {stage.step}
              </span>

              {/* Tag */}
              <span
                className="inline-block font-sans text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 mb-3"
                style={{ background: "rgba(74,122,61,0.1)", border: "1px solid rgba(74,122,61,0.25)", color: "#4A7A3D" }}
              >
                {stage.tag}
              </span>

              <h3 className="font-sans font-semibold text-ink mb-3" style={{ fontSize: "15px" }}>
                {stage.title}
              </h3>
              <p className="font-sans text-[14px] text-ink-light leading-relaxed">
                {stage.body}
              </p>

              {/* Connector arrow */}
              {i < LIFECYCLE_STAGES.length - 1 && (
                <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 items-center justify-center" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="#4A7A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
          className="mt-8 p-6 flex items-start gap-4"
          style={{ background: "rgba(74,122,61,0.06)", border: "1px solid rgba(74,122,61,0.2)" }}
        >
          <span className="text-xl flex-shrink-0">♻</span>
          <p className="font-sans text-[14px] leading-relaxed text-ink-light">
            <strong className="text-ink font-semibold">End-of-life note:</strong>{" "}
            Birchwood cutlery should be directed to industrial composting facilities where certified
            compostable products are accepted. BPI certification applies to industrial composting
            conditions (ASTM D6400) — not home composting. Buyers sourcing for markets with industrial
            composting infrastructure (Germany, Netherlands, Australia, US) can make verified
            compostability claims to their customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
