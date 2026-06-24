"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SpinningGlobe from "@/components/global-presence/SpinningGlobe";
import SectionLabel from "@/components/shared/SectionLabel";
import { MARKETS, COMPANY_FACTS } from "@/lib/global-presence-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function GlobalHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden paper pt-[72px]"
      style={{ background: "#F6F1E8" }}
      aria-labelledby="global-hero-heading"
    >
      {/* Top amber accent */}
      <div
        className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #C89A5B 30%, #8C6239 60%, transparent 100%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 pt-16 pb-12 lg:pt-20 lg:pb-16">

          {/* Left — editorial copy */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-8"
            >
              <SectionLabel index="01" label="Global Presence" />
            </motion.div>

            <motion.h1
              id="global-hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.92] mb-8"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.8rem)" }}
            >
              Manufactured
              <br />
              in India.
              <br />
              <em className="not-italic" style={{ color: "#C89A5B", fontStyle: "italic", fontFamily: "inherit" }}>
                Delivered
              </em>{" "}
              worldwide.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed max-w-[480px] mb-10"
              style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)" }}
            >
              From a single manufacturing ecosystem in Mumbai, Biopapro supplies
              {" "}{COMPANY_FACTS.exportMarkets}+ international markets with FSC-certified birchwood
              tableware — on time, at scale, with complete export documentation.
            </motion.p>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
              className="flex flex-wrap gap-0 mb-10 border border-border"
            >
              {[
                { value: `${COMPANY_FACTS.exportMarkets}+`, label: "Export Markets" },
                { value: "100M+",                           label: "Units / Month" },
                { value: "380+",                            label: "Employees" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-6 py-4 flex-1"
                  style={{ borderRight: i < 2 ? "1px solid #DDD3C5" : "none" }}
                >
                  <span className="font-mono font-bold text-[1.4rem] leading-none" style={{ color: "#C89A5B" }}>
                    {s.value}
                  </span>
                  <span className="font-mono text-[7.5px] uppercase tracking-[0.18em] text-ink-muted mt-1 text-center">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Office indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {[
                { location: "Mumbai, India", label: "Manufacturing HQ" },
              ].map((o) => (
                <div
                  key={o.location}
                  className="flex items-center gap-2 px-3 py-1.5"
                  style={{ border: "1px solid #DDD3C5", background: "rgba(255,255,255,0.5)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C89A5B" }} />
                  <span className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-ink-muted">
                    {o.location}
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
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300"
                style={{ background: "#4A7A3D" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2D5228")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7A3D")}
              >
                Request Export Quote
                <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <a
                href="#origin"
                className="font-mono text-[9px] uppercase tracking-[0.2em] transition-colors duration-200 text-ink-muted hover:text-ink"
              >
                Explore supply network →
              </a>
            </motion.div>
          </div>

          {/* Right — world map */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          >
            <SpinningGlobe triggered={inView} />
          </motion.div>
        </div>

        {/* Market strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.65, ease: EASE, delay: 0.55 }}
          className="border-t pb-10 pt-6 flex flex-wrap items-center gap-x-6 gap-y-2"
          style={{ borderColor: "#DDD3C5" }}
        >
          <span className="font-mono text-[7.5px] uppercase tracking-[0.28em] text-ink-muted">
            Active markets
          </span>
          {MARKETS.map((m) => (
            <span
              key={m.name}
              className="font-mono text-[7.5px] uppercase tracking-[0.1em] text-ink-muted opacity-60"
            >
              {m.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
