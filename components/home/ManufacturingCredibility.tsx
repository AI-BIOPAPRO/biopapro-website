"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_FACTS } from "@/lib/company-facts";

const E = [0.16, 1, 0.3, 1] as const;

const CREDS = [
  { value: "100M+",  label: "Units / Month",    sub: "Manufactured in Mumbai" },
  { value: "300+",   label: "Tons / Month",      sub: "Birchwood processed"    },
  { value: "18+",    label: "Export Markets",    sub: "Across 4 continents"    },
] as const;

const BADGES = ["FSC®", "ISO 9001", "BRCGS", "Food-Safe"] as const;

export default function ManufacturingCredibility() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#EDE5D4" }}
      aria-label="Biopapro manufacturing"
    >
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "580px" }}>

        {/* ── LEFT: Factory image — takes up 42% ── */}
        <motion.div
          className="relative lg:w-[42%] flex-shrink-0"
          style={{ minHeight: "340px" }}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: E }}
        >
          <Image
            src="https://biopapro.com/cdn/shop/files/F7_1_-_Edited_2.png"
            alt="Biopapro factory floor — Mumbai production facility"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 42vw"
            quality={82}
          />
          {/* Subtle vignette — right edge only so image bleeds into cream */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, transparent 60%, #EDE5D4 100%)",
            }}
          />
          {/* Bottom vignette on mobile */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: "linear-gradient(to top, #EDE5D4 0%, transparent 40%)",
            }}
          />

          {/* Floating location chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5, ease: E }}
            className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-4 py-2"
            style={{
              background: "rgba(26,71,49,0.90)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderRadius: "6px",
            }}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "rgba(245,240,230,0.55)" }}>
              Located in
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#E97316" }}>
              Mumbai, India
            </span>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Editorial credentials ── */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-16 py-16 lg:py-20">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: E }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>06</span>
            <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.4)" }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#7A6B54" }}>Manufacturing</span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.72, ease: E }}
            style={{ marginBottom: "2.5rem" }}
          >
            <div
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(0.65rem, 1.3vw, 0.85rem)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color:         "#7A6B54",
                marginBottom:  "0.4rem",
              }}
            >
              MADE IN
            </div>
            <div
              style={{
                fontFamily:              "'Outfit', sans-serif",
                fontWeight:              900,
                fontSize:                "clamp(4rem, 8vw, 8.5rem)",
                lineHeight:              0.88,
                letterSpacing:           "-0.035em",
                background:              "linear-gradient(to bottom, #FF9933 0%, #FF9933 33%, #FFFFFF 33%, #FFFFFF 66%, #138808 66%, #138808 100%)",
                WebkitBackgroundClip:    "text",
                WebkitTextFillColor:     "transparent",
                backgroundClip:          "text",
              }}
            >
              INDIA.
            </div>
          </motion.div>

          {/* Brand statement */}
          <motion.p
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.22, duration: 0.65, ease: E }}
            style={{
              fontFamily:   "'Outfit', sans-serif",
              fontSize:     "clamp(0.9rem, 1.1vw, 1rem)",
              lineHeight:   1.75,
              color:        "#5A4D3A",
              maxWidth:     "420px",
              marginBottom: "2.5rem",
            }}
          >
            Precision-finished birchwood cutlery manufactured at scale in Mumbai
            — FSC-certified, food-safe, and exported to airlines, hotels and
            QSR chains across {COMPANY_FACTS.exportMarkets}+ markets worldwide.
          </motion.p>

          {/* 3 big stats — horizontal */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-10">
            {CREDS.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: E }}
              >
                <div
                  suppressHydrationWarning
                  style={{
                    fontFamily:    "'Outfit', sans-serif",
                    fontWeight:    900,
                    fontSize:      "clamp(1.9rem, 3vw, 2.8rem)",
                    lineHeight:    1,
                    color:         "#E97316",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.value}
                </div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] mt-1" style={{ color: "#1A1208" }}>
                  {c.label}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] mt-0.5" style={{ color: "#7A6B54" }}>
                  {c.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cert badges + CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex items-center gap-4 flex-wrap"
          >
            {/* Badge pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] px-3 py-1.5"
                  style={{
                    background:    "rgba(26,71,49,0.08)",
                    color:         "#1A4731",
                    borderRadius:  "4px",
                    border:        "1px solid rgba(26,71,49,0.15)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>

            <div className="w-px h-6 hidden sm:block" style={{ background: "rgba(26,71,49,0.2)" }} />

            <Link
              href="/manufacturing"
              className="group inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-300"
              style={{ background: "#1A4731", color: "#F5F0E6", borderRadius: "4px" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E97316";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1A4731";
              }}
            >
              Tour the Factory
              <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
