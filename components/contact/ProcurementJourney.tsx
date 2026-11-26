"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { PROCUREMENT_JOURNEY } from "@/lib/contact-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

const TAG_COLORS: Record<string, string> = {
  You:           ORANGE,
  Biopapro:      GREEN,
  Optional:      MUTED,
  Manufacturing: MUTED,
  Delivery:      GREEN,
};

export default function ProcurementJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: CREAM }} aria-labelledby="journey-heading">
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
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 3.5vw, 3.2rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.035em",
                color:         INK,
              }}
            >
              FROM INQUIRY<br />
              <span style={{ color: ORANGE }}>TO DELIVERED CONTAINER.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: MUTED }}
            >
              A transparent view of exactly what happens after you submit your inquiry —
              and how long each stage takes.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROCUREMENT_JOURNEY.map((stage, i) => {
            const color = TAG_COLORS[stage.tag] ?? ORANGE;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="relative p-6 flex flex-col"
                style={{ border: "1px solid rgba(26,71,49,0.1)", background: CREAM2, borderRadius: "16px" }}
              >
                {/* Step + timeline */}
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono font-bold leading-none" style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)", color: "rgba(26,71,49,0.1)" }}>
                    {stage.step}
                  </span>
                  <div className="text-right">
                    <span
                      className="inline-block font-mono text-[11px] font-semibold px-2.5 py-1 mb-1"
                      style={{ background: `${color}14`, border: `1px solid ${color}30`, color, borderRadius: "6px" }}
                    >
                      {stage.tag}
                    </span>
                    <p className="font-mono text-[11px]" style={{ color: ORANGE }}>
                      {stage.timeline}
                    </p>
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize:   "15px",
                    color:      INK,
                    marginBottom: "10px",
                  }}
                >
                  {stage.title}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed flex-1" style={{ color: MUTED }}>
                  {stage.body}
                </p>

                {/* Connector */}
                {i < PROCUREMENT_JOURNEY.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 12h8M13 8l4 4-4 4" stroke={ORANGE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
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
          style={{ border: "1px solid rgba(26,71,49,0.12)", background: GREEN, borderRadius: "16px" }}
        >
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize:   "clamp(1.8rem,2.5vw,2.2rem)",
              color:      ORANGE,
              flexShrink: 0,
            }}
          >
            35–60
          </span>
          <p className="font-sans text-[14px] leading-relaxed" style={{ color: "rgba(245,240,230,0.75)" }}>
            <strong style={{ color: CREAM, fontWeight: 700 }}>Days, inquiry to delivery</strong>{" "}
            — typical total timeline from first contact to container arrival at your port.
            Expedited production available for urgent requirements — enquire directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
