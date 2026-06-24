"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { MFG_HERO_STATS } from "@/lib/manufacturing-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ManufacturingHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden grain pt-[72px]"
      style={{ background: "#1D1610" }}
      aria-labelledby="mfg-hero-heading"
    >
      {/* Background video — manufacturing floor */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.18 }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(29,22,16,0.5) 0%, rgba(29,22,16,0.85) 100%)" }}
        />
      </div>

      {/* Amber top accent */}
      <div
        className="relative z-10 h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #C89A5B 30%, #8C6239 60%, transparent 100%)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-20 lg:pt-24 lg:pb-24">
        <div className="max-w-[860px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-8"
          >
            <SectionLabel index="01" label="Manufacturing" />
          </motion.div>

          <motion.h1
            id="mfg-hero-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-display font-light leading-[0.92] mb-8"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "#F6F1E8" }}
          >
            Built for
            <br />
            <em className="not-italic" style={{ color: "#C89A5B", fontStyle: "italic", fontFamily: "inherit" }}>
              global supply.
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
            className="font-sans font-light leading-relaxed max-w-[580px] mb-12"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)", color: "rgba(230,210,185,0.72)" }}
          >
            From a single manufacturing facility in Mumbai, Biopapro delivers
            consistent, certified birchwood tableware to 18+ markets worldwide.
            100M+ units per month. Every batch documented. Every shipment on schedule.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-12"
            style={{ background: "#3D2E22", border: "1px solid #3D2E22" }}
          >
            {MFG_HERO_STATS.map((s) => (
              <div key={s.label} className="flex flex-col px-6 py-5" style={{ background: "rgba(29,22,16,0.9)" }}>
                <span className="font-mono font-bold leading-none mb-1.5" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#C89A5B" }}>
                  {s.value}
                </span>
                <span className="font-sans text-[13px] font-medium" style={{ color: "rgba(230,210,185,0.55)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.34 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.12em] transition-colors duration-300"
              style={{ background: "#4A7A3D", color: "#F6F1E8" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2D5228")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7A3D")}
            >
              Request Export Quote
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </Link>
            <a
              href="#production"
              className="font-sans text-[13px] transition-colors duration-200"
              style={{ color: "rgba(230,210,185,0.5)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,210,185,0.9)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(230,210,185,0.5)")}
            >
              See how we manufacture →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
