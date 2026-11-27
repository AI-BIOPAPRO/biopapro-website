"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { COMPANY_FACTS } from "@/lib/company-facts";

const EASE = [0.16, 1, 0.3, 1] as const;
const PLASTIC_KG = COMPANY_FACTS.plasticSavedPerDay.toLocaleString();

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

export default function SustainabilityHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-[72px]"
      style={{ background: CREAM }}
      aria-labelledby="sus-hero-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-16 pt-5 pb-3">

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-3">

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
                <SectionLabel index="01" label="Sustainability" />
              </div>

              <h1
                id="sus-hero-heading"
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(3rem, 5.5vw, 5.2rem)",
                  lineHeight:    0.87,
                  letterSpacing: "-0.045em",
                  color:         INK,
                  marginBottom:  "24px",
                }}
              >
                {PLASTIC_KG}KG<br />
                OF PLASTIC.<br />
                <span style={{ color: GREEN }}>NOT TODAY.</span>
              </h1>

              <p style={{ color: MUTED, fontFamily: "'Outfit', sans-serif", fontSize: "clamp(0.9rem,1.1vw,1rem)", lineHeight: 1.75, maxWidth: "520px", marginBottom: "32px" }}>
                Every day, Biopapro&apos;s birchwood tableware displaces {PLASTIC_KG}kg of single-use
                plastic from the global supply chain. FSC-certified sourcing. ISO 14001
                environmental management. This is what the product does.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors duration-300"
                  style={{ background: ORANGE, color: "#fff", borderRadius: "10px" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#C4580A")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = ORANGE)}
                >
                  Source Sustainably
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </Link>
                <Link
                  href="/certifications"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200"
                  style={{ color: GREEN }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = ORANGE)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = GREEN)}
                >
                  View certifications →
                </Link>
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
              className="relative overflow-hidden"
              style={{ borderRadius: "20px", minHeight: "280px", flex: 1 }}
            >
              <video
                autoPlay muted loop playsInline preload="none"
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/Sustainibilty 1-2.mp4" type="video/mp4" />
              </video>
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(26,71,49,0.65) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 900,
                    fontSize:   "clamp(1.2rem, 2vw, 1.6rem)",
                    lineHeight: 0.95,
                    color:      CREAM,
                    letterSpacing: "-0.025em",
                  }}
                >
                  FSC® CERTIFIED.<br />
                  <span style={{ color: ORANGE }}>ZERO COMPROMISE.</span>
                </p>
              </div>
            </motion.div>

            {/* Impact stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { value: `${PLASTIC_KG}kg`, label: "Plastic displaced daily" },
                { value: "100M+",           label: "Units shipped per month" },
                { value: "FSC® 100%",       label: "Certified sourcing"      },
                { value: "BRCGS",           label: "Global food safety std"  },
              ].map((item, i) => (
                <div
                  key={item.label}
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
                      fontSize:   "clamp(1rem,1.5vw,1.3rem)",
                      color:      i % 2 === 0 ? CREAM : INK,
                      marginBottom: "4px",
                    }}
                  >
                    {item.value}
                  </span>
                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{ color: i % 2 === 0 ? "rgba(245,240,230,0.5)" : MUTED }}
                  >
                    {item.label}
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
