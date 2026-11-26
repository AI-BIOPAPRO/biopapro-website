"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ShieldCheck } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATIONS_LIST } from "@/lib/products-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

export default function ProductCertifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: CREAM }}
      aria-labelledby="certs-heading"
    >
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="07" label="Certifications" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="certs-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 3.5vw, 3rem)",
                lineHeight:    0.93,
                letterSpacing: "-0.03em",
                color:         INK,
              }}
            >
              FIVE CERTIFICATIONS.<br />
              <span style={{ color: GREEN }}>EVERY MARKET COVERED.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="text-base leading-relaxed flex items-center"
              style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}
            >
              From FSC chain-of-custody to ISO-certified manufacturing,
              every Biopapro product ships with the documentation your
              import team needs to clear customs and satisfy regulatory
              requirements across North America, Europe, and Asia.
            </motion.p>
          </div>
        </div>

        {/* Certification cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS_LIST.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE, delay: 0.24 + i * 0.07 }}
              className="flex flex-col p-6"
              style={{ background: CREAM2, border: "1px solid rgba(26,71,49,0.15)", borderRadius: "12px" }}
            >
              {/* Icon + title */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-lg"
                  style={{ background: "rgba(26,71,49,0.1)", border: "1px solid rgba(26,71,49,0.2)" }}
                >
                  <ShieldCheck size={14} style={{ color: GREEN }} />
                </div>
                <div>
                  <p
                    className="font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: ORANGE }}
                  >
                    {cert.name}
                  </p>
                  <p
                    className="font-mono text-[11px] uppercase tracking-[0.16em]"
                    style={{ color: MUTED }}
                  >
                    {cert.fullName}
                  </p>
                </div>
              </div>

              <p
                className="text-[12px] leading-relaxed flex-1 mb-4"
                style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}
              >
                {cert.description}
              </p>

              {/* Scope */}
              <div
                className="pt-3 border-t"
                style={{ borderColor: "rgba(26,71,49,0.1)" }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.18em]"
                  style={{ color: "rgba(26,71,49,0.5)" }}
                >
                  Scope
                </p>
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.12em] mt-1"
                  style={{ color: INK }}
                >
                  {cert.scope}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom cert name strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.68 }}
          className="mt-14 pt-10 border-t flex flex-wrap items-center justify-between gap-6"
          style={{ borderColor: "rgba(26,71,49,0.15)" }}
        >
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {CERTIFICATIONS_LIST.map((cert) => (
              <span
                key={cert.id}
                className="font-mono text-[11px] uppercase tracking-[0.2em] font-bold"
                style={{ color: GREEN }}
              >
                {cert.name}
              </span>
            ))}
          </div>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.16em]"
            style={{ color: MUTED }}
          >
            All certificates available on request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
