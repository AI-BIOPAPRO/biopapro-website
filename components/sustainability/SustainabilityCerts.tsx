"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { SUSTAINABILITY_CERTS } from "@/lib/sustainability-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

export default function SustainabilityCerts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: CREAM }} aria-labelledby="sus-certs-heading">
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
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 3.2vw, 3rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.035em",
                color:         INK,
                marginBottom:  "20px",
              }}
            >
              VERIFIED.<br />
              <span style={{ color: GREEN }}>NOT SELF-DECLARED.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
              className="font-sans leading-relaxed mb-8"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: MUTED }}
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
                className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200"
                style={{ color: GREEN }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = ORANGE)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = GREEN)}
              >
                View all 5 certifications
                <ArrowUpRight size={12} strokeWidth={2.5} />
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
                  style={{ border: "1px solid rgba(26,71,49,0.1)", background: CREAM2, borderRadius: "14px" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="font-mono font-bold text-[13px] px-2.5 py-1"
                      style={{
                        background: "rgba(26,71,49,0.08)",
                        border: "1px solid rgba(26,71,49,0.18)",
                        color: GREEN,
                        borderRadius: "6px",
                      }}
                    >
                      {cert.code}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize:   "15px",
                      color:      INK,
                      marginBottom: "6px",
                    }}
                  >
                    {cert.name}
                  </h3>
                  <p className="font-sans text-[13px]" style={{ color: MUTED }}>
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
