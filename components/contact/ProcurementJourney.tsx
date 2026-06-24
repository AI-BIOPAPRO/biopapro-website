"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { PROCUREMENT_JOURNEY } from "@/lib/contact-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const TAG_COLORS: Record<string, string> = {
  You:           "#C89A5B",
  Biopapro:      "#4A7A3D",
  Optional:      "#6B5D50",
  Manufacturing: "#8C6239",
  Delivery:      "#4A7A3D",
};

export default function ProcurementJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#1D1610" }} className="grain" aria-labelledby="journey-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="03" label="Procurement Journey" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="journey-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#F6F1E8" }}
            >
              From inquiry
              <br />
              <span style={{ color: "#C89A5B" }}>to delivered container.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: "rgba(230,210,185,0.70)" }}
            >
              A transparent view of exactly what happens after you submit your inquiry —
              and how long each stage takes.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROCUREMENT_JOURNEY.map((stage, i) => {
            const color = TAG_COLORS[stage.tag] ?? "#C89A5B";
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="relative p-6 flex flex-col"
                style={{ border: "1px solid #3D2E22", background: "rgba(255,255,255,0.02)" }}
              >
                {/* Step + timeline */}
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono font-bold leading-none" style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)", color: "rgba(200,154,91,0.18)" }}>
                    {stage.step}
                  </span>
                  <div className="text-right">
                    <span
                      className="inline-block font-sans text-[11px] font-semibold px-2.5 py-1 mb-1"
                      style={{ background: `${color}18`, border: `1px solid ${color}35`, color }}
                    >
                      {stage.tag}
                    </span>
                    <p className="font-mono text-[11px]" style={{ color: "#C89A5B" }}>
                      {stage.timeline}
                    </p>
                  </div>
                </div>

                <h3 className="font-sans font-semibold mb-3" style={{ fontSize: "15px", color: "#F6F1E8" }}>
                  {stage.title}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed flex-1" style={{ color: "rgba(230,210,185,0.65)" }}>
                  {stage.body}
                </p>

                {/* Connector */}
                {i < PROCUREMENT_JOURNEY.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 12h8M13 8l4 4-4 4" stroke="#C89A5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Total timeline note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
          className="mt-6 p-5 flex items-center gap-5"
          style={{ border: "1px solid rgba(200,154,91,0.2)", background: "rgba(200,154,91,0.04)" }}
        >
          <span className="font-mono font-bold text-[1.5rem] flex-shrink-0" style={{ color: "#C89A5B" }}>35–60</span>
          <p className="font-sans text-[14px] leading-relaxed" style={{ color: "rgba(230,210,185,0.65)" }}>
            <strong style={{ color: "rgba(230,210,185,0.90)", fontWeight: 600 }}>Days, inquiry to delivery</strong>{" "}
            — typical total timeline from first contact to container arrival at your port.
            Expedited production available for urgent requirements — enquire directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
