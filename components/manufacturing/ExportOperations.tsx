"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { EXPORT_CAPABILITIES } from "@/lib/manufacturing-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const LOGISTICS_STEPS = [
  { step: "01", title: "Order Confirmation",     body: "Purchase order confirmed. Production schedule allocated. Export documentation preparation begins in parallel with manufacturing." },
  { step: "02", title: "Production & Packaging", body: "Units manufactured, QC-cleared, and packed into OPP bags and export cartons. Cartons optimised for container fill to minimise freight cost." },
  { step: "03", title: "Documentation Package",  body: "FSC® certificate, phytosanitary certificate, certificate of origin, commercial invoice, and packing list issued. Compliance declarations prepared on request." },
  { step: "04", title: "Container Loading",       body: "Palletised cartons loaded at JNPT Mumbai — India's largest container port. FCL (20ft / 40ft) or LCL consolidation. Container seal number issued." },
  { step: "05", title: "Ocean Freight",           body: "Container departs Mumbai on scheduled service. Bill of lading issued. Tracking reference provided. Transit: 10–35 days depending on destination." },
  { step: "06", title: "Delivery",                body: "Container arrives at destination port with full documentation for customs clearance. Phytosanitary and origin certificates accepted in all 18+ active markets." },
] as const;

export default function ExportOperations() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#EFE6D7" }} aria-labelledby="export-ops-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="06" label="Export Operations" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="export-ops-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Export operations
              <br />
              <span style={{ color: "#C89A5B" }}>built for scale.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)" }}
            >
              From confirmed order to delivered container. Every step in Biopapro's
              export workflow is documented, tracked, and repeatable across 18+ markets.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — logistics flow */}
          <div className="flex flex-col gap-0">
            {LOGISTICS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, ease: EASE, delay: 0.12 + i * 0.07 }}
                className="flex gap-5"
              >
                {/* Left timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#FBF8F2", border: "2px solid #C89A5B" }}
                  >
                    <span className="font-mono font-bold text-[10px]" style={{ color: "#C89A5B" }}>
                      {step.step}
                    </span>
                  </div>
                  {i < LOGISTICS_STEPS.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ background: "#DDD3C5", minHeight: 24 }} />
                  )}
                </div>

                {/* Right content */}
                <div className="pb-6 flex-1 min-w-0">
                  <h3 className="font-sans font-semibold text-ink mb-1.5" style={{ fontSize: "15px" }}>
                    {step.title}
                  </h3>
                  <p className="font-sans text-[14px] text-ink-light leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — capability table */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          >
            <div
              className="p-6 h-full"
              style={{ background: "#FBF8F2", border: "1px solid #DDD3C5" }}
            >
              <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted mb-5">
                Export Capability Reference
              </p>
              <div className="flex flex-col gap-0 divide-y" style={{ borderTop: "1px solid #EDE5D8", borderBottom: "1px solid #EDE5D8" }}>
                {EXPORT_CAPABILITIES.map((cap) => (
                  <div key={cap.label} className="flex flex-col sm:flex-row sm:gap-6 py-3.5">
                    <span className="font-sans text-[12px] font-semibold text-ink-muted flex-shrink-0 sm:w-36 mb-1 sm:mb-0">
                      {cap.label}
                    </span>
                    <span className="font-sans text-[14px] text-ink leading-snug">
                      {cap.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
