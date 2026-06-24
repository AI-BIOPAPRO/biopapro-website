"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ShieldCheck } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATIONS_LIST } from "@/lib/products-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProductCertifications() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      className="relative overflow-hidden grain"
      style={{ background: "#1D1610" }}
      aria-labelledby="certs-heading"
    >
      <div
        className="h-[1px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #3D2E22 40%, #5C3D1E 60%, transparent 100%)" }}
      />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="07" label="Certifications" inverted />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="certs-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light leading-[0.93]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#F6F1E8" }}
            >
              Six certifications.
              <br />
              <span style={{ color: "#C89A5B" }}>Every market covered.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-base leading-relaxed flex items-center"
              style={{ color: "rgba(230,210,185,0.65)" }}
            >
              From FSC chain-of-custody to FDA food contact compliance,
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
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #3D2E22" }}
            >
              {/* Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(200,154,91,0.12)", border: "1px solid rgba(200,154,91,0.28)" }}
                >
                  <ShieldCheck size={14} style={{ color: "#C89A5B" }} />
                </div>
                <div>
                  <p
                    className="font-mono text-[11px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: "#C89A5B" }}
                  >
                    {cert.name}
                  </p>
                  <p
                    className="font-mono text-[7.5px] uppercase tracking-[0.16em]"
                    style={{ color: "rgba(230,210,185,0.4)" }}
                  >
                    {cert.fullName}
                  </p>
                </div>
              </div>

              <p
                className="font-sans text-[12px] font-light leading-relaxed flex-1 mb-4"
                style={{ color: "rgba(230,210,185,0.6)" }}
              >
                {cert.description}
              </p>

              {/* Scope */}
              <div
                className="pt-3 border-t"
                style={{ borderColor: "#3D2E22" }}
              >
                <p
                  className="font-mono text-[7px] uppercase tracking-[0.18em]"
                  style={{ color: "rgba(200,154,91,0.45)" }}
                >
                  Scope
                </p>
                <p
                  className="font-mono text-[8.5px] uppercase tracking-[0.12em] mt-1"
                  style={{ color: "rgba(246,241,232,0.65)" }}
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
          style={{ borderColor: "#3D2E22" }}
        >
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {CERTIFICATIONS_LIST.map((cert) => (
              <span
                key={cert.id}
                className="font-mono text-[8.5px] uppercase tracking-[0.2em]"
                style={{ color: "rgba(200,154,91,0.5)" }}
              >
                {cert.name}
              </span>
            ))}
          </div>
          <p
            className="font-mono text-[7.5px] uppercase tracking-[0.16em]"
            style={{ color: "rgba(230,210,185,0.3)" }}
          >
            All certificates available on request
          </p>
        </motion.div>
      </div>
    </section>
  );
}
