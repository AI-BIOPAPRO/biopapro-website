"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { SUSTAINABILITY_CERTS } from "@/lib/sustainability-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SustainabilityCerts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#1D1610" }} className="grain" aria-labelledby="sus-certs-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left — heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-7"
            >
              <SectionLabel index="06" label="Certifications" />
            </motion.div>
            <motion.h2
              id="sus-certs-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)", color: "#F6F1E8" }}
            >
              Verified.
              <br />
              <span style={{ color: "#7DB870" }}>Not self-declared.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
              className="font-sans font-light leading-relaxed mb-8"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: "rgba(230,210,185,0.65)" }}
            >
              Every sustainability claim Biopapro makes is independently verified
              and documented. Certificate copies available to procurement and
              compliance teams on request.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
            >
              <Link
                href="/certifications"
                className="inline-flex items-center gap-2.5 font-sans text-[13px] font-semibold transition-colors duration-200"
                style={{ color: "#7DB870" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A8D8A0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#7DB870")}
              >
                View all 9 certifications
                <ArrowUpRight size={14} strokeWidth={2} />
              </Link>
            </motion.div>
          </div>

          {/* Right — cert cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SUSTAINABILITY_CERTS.map((cert, i) => (
                <motion.div
                  key={cert.code}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.18 + i * 0.08 }}
                  className="p-5"
                  style={{ border: "1px solid #3D2E22", background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-mono font-bold text-[13px] px-2.5 py-1"
                      style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}40`, color: cert.color === "#004494" ? "#8AABCF" : cert.color === "#007A34" || cert.color === "#2E7D32" ? "#7DB870" : "#7DB870" }}
                    >
                      {cert.code}
                    </span>
                  </div>
                  <h3 className="font-sans font-semibold mb-1.5" style={{ fontSize: "15px", color: "#F6F1E8" }}>
                    {cert.name}
                  </h3>
                  <p className="font-sans text-[13px]" style={{ color: "rgba(230,210,185,0.5)" }}>
                    {cert.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
