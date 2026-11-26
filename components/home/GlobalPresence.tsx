"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import { COMPANY_FACTS } from "@/lib/company-facts";

const E = [0.16, 1, 0.3, 1] as const;

const MARKETS = [
  { name: "United States",  region: "Americas"    },
  { name: "Canada",         region: "Americas"    },
  { name: "Mexico",         region: "Americas"    },
  { name: "United Kingdom", region: "Europe"      },
  { name: "Ireland",        region: "Europe"      },
  { name: "Germany",        region: "Europe"      },
  { name: "Netherlands",    region: "Europe"      },
  { name: "Spain",          region: "Europe"      },
  { name: "Poland",         region: "Europe"      },
  { name: "Greece",         region: "Europe"      },
  { name: "Romania",        region: "Europe"      },
  { name: "UAE",            region: "Middle East" },
  { name: "Qatar",          region: "Middle East" },
  { name: "Bahrain",        region: "Middle East" },
  { name: "Mauritius",      region: "Africa"      },
  { name: "Maldives",       region: "Asia"        },
  { name: "Australia",      region: "Pacific"     },
] as const;

const REGIONS = ["Americas", "Europe", "Middle East", "Africa", "Asia", "Pacific"] as const;
type Region = typeof REGIONS[number];

const REGION_STATS: Record<Region, { markets: number; growth: string }> = {
  "Americas":    { markets: 3, growth: "+12% YoY" },
  "Europe":      { markets: 8, growth: "+18% YoY" },
  "Middle East": { markets: 3, growth: "+31% YoY" },
  "Africa":      { markets: 1, growth: "New 2024"  },
  "Asia":        { markets: 1, growth: "+22% YoY"  },
  "Pacific":     { markets: 1, growth: "+9% YoY"   },
};

export default function GlobalPresence() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [activeRegion, setActiveRegion] = useState<Region | null>(null);

  const visibleMarkets = activeRegion
    ? MARKETS.filter((m) => m.region === activeRegion)
    : MARKETS;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#EDE5D4" }}
      aria-labelledby="global-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: E }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-8"
          style={{ background: "rgba(26,71,49,0.1)", color: "#1A4731" }}
        >
          <Globe size={10} />
          Global Presence
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="global-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.65, ease: E }}
          style={{
            fontFamily:    "'Outfit', sans-serif",
            fontWeight:    900,
            fontSize:      "clamp(3rem, 6vw, 6rem)",
            lineHeight:    0.92,
            letterSpacing: "-0.03em",
            color:         "#1A1208",
            marginBottom:  "1.4rem",
          }}
        >
          {COMPANY_FACTS.exportMarkets}+ COUNTRIES<br />
          <span style={{ color: "#1A4731" }}>SERVED & GROWING.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6, ease: E }}
          className="text-[15px] leading-relaxed mb-10"
          style={{ color: "#7A6B54", maxWidth: "520px", fontFamily: "'Outfit', sans-serif" }}
        >
          FSC® certified birchwood cutlery shipped from Mumbai to 18+ markets across 6 continents — FCL / LCL containers, full customs docs, phytosanitary certificates.
        </motion.p>

        {/* Region filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6, ease: E }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveRegion(null)}
            className="text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-2 transition-all duration-200 rounded-full"
            style={{
              background:   !activeRegion ? "#1A4731" : "transparent",
              color:        !activeRegion ? "#F5F0E6" : "#7A6B54",
              border:       `1px solid ${!activeRegion ? "#1A4731" : "rgba(26,71,49,0.2)"}`,
            }}
          >
            All
          </button>
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region === activeRegion ? null : region)}
              className="text-[11px] font-bold uppercase tracking-[0.16em] px-4 py-2 transition-all duration-200 rounded-full"
              style={{
                background:   activeRegion === region ? "#1A4731" : "transparent",
                color:        activeRegion === region ? "#F5F0E6" : "#7A6B54",
                border:       `1px solid ${activeRegion === region ? "#1A4731" : "rgba(26,71,49,0.2)"}`,
              }}
              onMouseEnter={(e) => { if (activeRegion !== region) (e.currentTarget as HTMLElement).style.borderColor = "#1A4731"; }}
              onMouseLeave={(e) => { if (activeRegion !== region) (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,71,49,0.2)"; }}
            >
              {region}
              {activeRegion === region && REGION_STATS[region] && (
                <span className="ml-2 opacity-70">{REGION_STATS[region].growth}</span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Market tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {visibleMarkets.map((m, i) => (
            <motion.span
              key={m.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5"
              style={{
                border:       "1px solid rgba(26,71,49,0.2)",
                color:        "#1A4731",
                background:   "rgba(26,71,49,0.07)",
                borderRadius: "6px",
              }}
            >
              {m.name}
            </motion.span>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <Globe size={11} strokeWidth={2} style={{ color: "#7A6B54" }} />
            <span className="text-[11px] uppercase tracking-[0.18em]" style={{ color: "#7A6B54" }}>
              Expanding quarterly
            </span>
          </div>
          <Link
            href="/global-presence"
            className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] px-5 py-2.5 transition-all duration-200"
            style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "6px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C4580A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#E97316"; }}
          >
            View All Markets
            <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
