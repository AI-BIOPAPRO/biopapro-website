"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { BIRCHWOOD_FACTS } from "@/lib/sustainability-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

export default function BirchwoodStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: CREAM2 }} aria-labelledby="birchwood-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="03" label="The Material" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="birchwood-heading"
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
              WHY BIRCHWOOD<br />
              <span style={{ color: GREEN }}>BEATS PLASTIC.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: MUTED }}
            >
              Birchwood is not chosen for aesthetics alone. It is renewable, biodegradable,
              certifiably sourced, and verified compostable — properties that single-use
              plastic will never possess.
            </motion.p>
          </div>
        </div>

        {/* Comparison — plastic vs birchwood */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {/* Plastic column */}
          <div
            className="p-7"
            style={{ border: "1px solid rgba(200,80,80,0.15)", background: "rgba(200,80,80,0.03)", borderRadius: "16px" }}
          >
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] mb-5" style={{ color: "rgba(180,60,60,0.7)" }}>
              Single-Use Plastic Cutlery
            </p>
            {[
              "Derived from fossil fuels",
              "Persists in the environment for 400+ years",
              "Breaks down into microplastics",
              "Cannot be composted",
              "Cannot be certified sustainable",
              "Increasingly banned across EU, India, and other markets",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: "rgba(180,60,60,0.7)", fontSize: "13px" }}>✗</span>
                <span className="font-sans text-[14px] leading-snug" style={{ color: MUTED }}>{point}</span>
              </div>
            ))}
          </div>

          {/* Birchwood column */}
          <div
            className="p-7"
            style={{ border: "1px solid rgba(26,71,49,0.2)", background: "rgba(26,71,49,0.04)", borderRadius: "16px" }}
          >
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] mb-5" style={{ color: GREEN }}>
              Biopapro Birchwood Cutlery
            </p>
            {[
              "Sourced from FSC®-certified renewable forests",
              "Biodegrades in industrial composting within weeks",
              "No microplastic residue — ever",
              "FSC® Chain of Custody independently audited",
              "ISO 9001, ISO 14001 & ISO 45001 certified manufacturing",
              "BRCGS Global Standard for Consumer Products certified",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: GREEN, fontSize: "13px" }}>✓</span>
                <span className="font-sans text-[14px] leading-snug" style={{ color: INK }}>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4 birchwood property cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BIRCHWOOD_FACTS.map((fact, i) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE, delay: 0.28 + i * 0.07 }}
              className="p-5"
              style={{ border: "1px solid rgba(26,71,49,0.1)", background: CREAM, borderRadius: "14px" }}
            >
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize:   "15px",
                  color:      INK,
                  marginBottom: "10px",
                }}
              >
                {fact.title}
              </h3>
              <p className="font-sans text-[14px] leading-relaxed" style={{ color: MUTED }}>
                {fact.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
