"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { SOCIAL_FACTS } from "@/lib/sustainability-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

export default function SocialImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: CREAM2 }} aria-labelledby="social-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-7"
            >
              <SectionLabel index="05" label="Social Impact" />
            </motion.div>

            <motion.h2
              id="social-heading"
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
              SUSTAINABILITY STARTS<br />
              <span style={{ color: GREEN }}>WITH PEOPLE.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans leading-relaxed mb-10"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: MUTED }}
            >
              Environmental sustainability and social responsibility are not
              separate agendas at Biopapro. A workforce that is 70%+ women,
              independently audited for social compliance, and built on long-term
              employment — this is what the supply chain looks like behind the product.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIAL_FACTS.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.22 + i * 0.07 }}
                  className="p-5"
                  style={{ background: CREAM, border: "1px solid rgba(26,71,49,0.1)", borderRadius: "14px" }}
                >
                  <span className="block font-mono font-bold mb-1.5" style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", color: GREEN }}>
                    {fact.stat}
                  </span>
                  <span
                    style={{
                      display:    "block",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      fontSize:   "13px",
                      color:      INK,
                      marginBottom: "6px",
                    }}
                  >
                    {fact.label}
                  </span>
                  <p className="font-sans text-[13px] leading-relaxed" style={{ color: MUTED }}>
                    {fact.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — workforce video in a rounded frame */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4", borderRadius: "20px", background: CREAM }}
            >
              <video
                autoPlay muted loop playsInline preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/Manufacturing page women working.mp4" type="video/mp4" />
              </video>
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, rgba(26,71,49,0.82) 0%, transparent 100%)" }}
              >
                <p
                  style={{
                    fontFamily:    "'Outfit', sans-serif",
                    fontWeight:    900,
                    fontSize:      "clamp(1.2rem,2vw,1.5rem)",
                    lineHeight:    0.95,
                    letterSpacing: "-0.025em",
                    color:         CREAM,
                    marginBottom:  "6px",
                  }}
                >
                  &ldquo;WE BUILD CAREERS,<br />NOT JUST PRODUCTS.&rdquo;
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "rgba(245,240,230,0.55)" }}>
                  Mumbai facility, established 2019
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
