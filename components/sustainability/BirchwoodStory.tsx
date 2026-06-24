"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { BIRCHWOOD_FACTS } from "@/lib/sustainability-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function BirchwoodStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section className="relative overflow-hidden grain" style={{ background: "#1D1610" }} aria-labelledby="birchwood-heading">
      {/* Sustainability video — subtle background texture */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        >
          <source src="/videos/Sustainability page.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(29,22,16,0.55)" }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

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
              className="font-display font-light leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#F6F1E8" }}
            >
              Why birchwood
              <br />
              <span style={{ color: "#7DB870" }}>beats plastic.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: "rgba(230,210,185,0.70)" }}
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
          <div className="p-7" style={{ border: "1px solid #3D2E22", background: "rgba(255,255,255,0.01)" }}>
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] mb-5" style={{ color: "rgba(200,80,80,0.7)" }}>
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
                <span className="flex-shrink-0 mt-1 text-[13px]" style={{ color: "rgba(200,80,80,0.7)" }}>✗</span>
                <span className="font-sans text-[14px] leading-snug" style={{ color: "rgba(230,210,185,0.55)" }}>{point}</span>
              </div>
            ))}
          </div>

          {/* Birchwood column */}
          <div className="p-7" style={{ border: "1px solid rgba(74,122,61,0.35)", background: "rgba(74,122,61,0.04)" }}>
            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.14em] mb-5" style={{ color: "#7DB870" }}>
              Biopapro Birchwood Cutlery
            </p>
            {[
              "Sourced from FSC®-certified renewable forests",
              "Biodegrades in industrial composting within weeks",
              "No microplastic residue — ever",
              "BPI Compostable certified (ASTM D6400)",
              "FSC® Chain of Custody independently audited",
              "Compliant with EU single-use plastics directive",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 mb-3">
                <span className="flex-shrink-0 mt-1 text-[13px]" style={{ color: "#7DB870" }}>✓</span>
                <span className="font-sans text-[14px] leading-snug" style={{ color: "rgba(230,210,185,0.75)" }}>{point}</span>
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
              style={{ border: "1px solid #3D2E22", background: "rgba(255,255,255,0.02)" }}
            >
              <h3 className="font-sans font-semibold mb-3" style={{ fontSize: "15px", color: "#F6F1E8" }}>
                {fact.title}
              </h3>
              <p className="font-sans text-[14px] leading-relaxed" style={{ color: "rgba(230,210,185,0.65)" }}>
                {fact.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
