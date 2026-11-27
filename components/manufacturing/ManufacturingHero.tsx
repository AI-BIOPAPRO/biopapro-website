"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { MFG_HERO_STATS } from "@/lib/manufacturing-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

export default function ManufacturingHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-[72px]"
      style={{ background: CREAM }}
      aria-labelledby="mfg-hero-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16 pt-5 pb-3">

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-3">

          {/* Left — headline card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.78, ease: EASE }}
            className="flex flex-col justify-between"
            style={{ background: CREAM2, borderRadius: "20px", padding: "clamp(28px,4vw,52px)" }}
          >
            <div>
              <div className="mb-7">
                <SectionLabel index="01" label="Manufacturing" />
              </div>

              <h1
                id="mfg-hero-heading"
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(3rem, 6vw, 5.5rem)",
                  lineHeight:    0.87,
                  letterSpacing: "-0.045em",
                  color:         INK,
                  marginBottom:  "24px",
                }}
              >
                BUILT FOR<br />
                <span style={{ color: ORANGE }}>SUPPLY AT SCALE.</span>
              </h1>

              <p style={{ color: MUTED, fontFamily: "'Outfit', sans-serif", fontSize: "clamp(0.9rem,1.3vw,1.1rem)", lineHeight: 1.75, maxWidth: "560px", marginBottom: "32px" }}>
                From a single manufacturing facility in Mumbai, Biopapro delivers
                consistent, certified birchwood tableware across India and to
                18+ markets worldwide. 100M+ units per month. Every batch documented.
                Every shipment on schedule.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors duration-300"
                  style={{ background: GREEN, color: CREAM, borderRadius: "10px" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#145229")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = GREEN)}
                >
                  Request Quote
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </Link>
                <a
                  href="#production"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200"
                  style={{ color: MUTED }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = INK)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = MUTED)}
                >
                  See how we manufacture →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — video + stats */}
          <div className="flex flex-col gap-3">

            {/* Video card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.72, ease: EASE, delay: 0.1 }}
              className="relative overflow-hidden flex-1"
              style={{ borderRadius: "20px", minHeight: "240px" }}
            >
              <video
                autoPlay muted loop playsInline preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
              </video>
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(26,71,49,0.72) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-5 left-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: "rgba(245,240,230,0.5)" }}>
                  Mumbai, India
                </p>
                <p
                  style={{
                    fontFamily:    "'Outfit', sans-serif",
                    fontWeight:    900,
                    fontSize:      "clamp(1.1rem,1.8vw,1.4rem)",
                    lineHeight:    0.95,
                    letterSpacing: "-0.025em",
                    color:         CREAM,
                    marginTop:     "4px",
                  }}
                >
                  INDIA&apos;S LARGEST<br />
                  <span style={{ color: ORANGE }}>BIRCHWOOD FACILITY.</span>
                </p>
              </div>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {MFG_HERO_STATS.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    background:   i % 2 === 0 ? GREEN : CREAM2,
                    borderRadius: "14px",
                    padding:      "18px 20px",
                  }}
                >
                  <span
                    style={{
                      display:    "block",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 900,
                      fontSize:   "clamp(1.1rem,1.8vw,1.5rem)",
                      color:      i % 2 === 0 ? ORANGE : INK,
                      marginBottom: "4px",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: i % 2 === 0 ? "rgba(245,240,230,0.5)" : MUTED }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
