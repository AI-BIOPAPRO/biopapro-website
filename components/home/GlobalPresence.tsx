"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { geoEquirectangular } from "d3-geo";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;
const GEO_URL = "/world-110m.json";
const MAP_W = 800;
const MAP_H = 400;

const proj = geoEquirectangular()
  .scale(130)
  .center([20, 5] as [number, number])
  .translate([MAP_W / 2, MAP_H / 2]);

const MUMBAI: [number, number] = [72.8, 19.1];
const [MX, MY] = proj(MUMBAI) as [number, number];

const MARKETS: { name: string; region: string; lonlat: [number, number] }[] = [
  { name: "United States",  region: "Americas",    lonlat: [-77.0,  38.9] },
  { name: "Canada",         region: "Americas",    lonlat: [-75.7,  45.4] },
  { name: "Brazil",         region: "Americas",    lonlat: [-47.9, -15.8] },
  { name: "Mexico",         region: "Americas",    lonlat: [-99.1,  19.4] },
  { name: "United Kingdom", region: "Europe",      lonlat: [ -0.1,  51.5] },
  { name: "Germany",        region: "Europe",      lonlat: [ 13.4,  52.5] },
  { name: "France",         region: "Europe",      lonlat: [  2.3,  48.9] },
  { name: "Netherlands",    region: "Europe",      lonlat: [  4.9,  52.4] },
  { name: "Poland",         region: "Europe",      lonlat: [ 21.0,  52.2] },
  { name: "South Africa",   region: "Africa",      lonlat: [ 28.0, -26.0] },
  { name: "UAE",            region: "Middle East", lonlat: [ 55.3,  25.2] },
  { name: "Saudi Arabia",   region: "Middle East", lonlat: [ 46.7,  24.7] },
  { name: "India",          region: "Asia",        lonlat: [ 77.2,  28.6] },
  { name: "Singapore",      region: "Asia",        lonlat: [103.8,   1.4] },
  { name: "Japan",          region: "Asia",        lonlat: [139.7,  35.7] },
  { name: "South Korea",    region: "Asia",        lonlat: [126.9,  37.6] },
  { name: "Australia",      region: "Pacific",     lonlat: [151.2, -33.9] },
  { name: "New Zealand",    region: "Pacific",     lonlat: [174.8, -36.9] },
];

const REGIONS = ["Americas", "Europe", "Middle East", "Africa", "Asia", "Pacific"] as const;

const REGION_STATS: Record<string, { markets: number; growth: string }> = {
  Americas:      { markets: 4, growth: "+12% YoY" },
  Europe:        { markets: 5, growth: "+18% YoY" },
  "Middle East": { markets: 2, growth: "+31% YoY" },
  Africa:        { markets: 1, growth: "New 2024"  },
  Asia:          { markets: 4, growth: "+22% YoY"  },
  Pacific:       { markets: 2, growth: "+9% YoY"   },
};

// Quadratic bezier arc from Mumbai to destination
function arcD(to: [number, number]): string {
  const [x2, y2] = proj(to) as [number, number];
  const cx = (MX + x2) / 2;
  const cy = Math.min(MY, y2) - Math.abs(x2 - MX) * 0.2;
  return `M ${MX},${MY} Q ${cx},${Math.max(2, cy)} ${x2},${y2}`;
}

// Precompute projected dot positions + routes
const MARKET_DATA = MARKETS.map((m, i) => {
  const [dx, dy] = proj(m.lonlat) as [number, number];
  return { ...m, dx, dy, d: arcD(m.lonlat), delay: 0.35 + i * 0.05 };
});

export default function GlobalPresence() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const activeMarkets = activeRegion
    ? MARKET_DATA.filter((m) => m.region === activeRegion)
    : MARKET_DATA;

  return (
    <section
      ref={ref}
      className="relative grain"
      style={{ background: "#1D1610" }}
      aria-labelledby="global-heading"
    >
      <div
        className="h-[3px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #4A7A3D 40%, #2D5228 70%, transparent 100%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-7"
            >
              <SectionLabel index="08" label="Global Presence" inverted />
            </motion.div>

            <motion.h2
              id="global-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="font-display font-light leading-[0.95]"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.6rem)", color: "#F6F1E8" }}
            >
              18+ active markets
              <br />
              <span style={{ color: "#7AAE6B" }}>across 6 continents.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.68, ease: EASE, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="font-sans font-light text-base leading-relaxed mb-6" style={{ color: "rgba(246,241,232,0.88)" }}>
              From European airlines to Pacific food distributors, Biopapro
              ships FCL and LCL containers on a rolling basis. Our export
              logistics team manages customs documentation, phytosanitary
              certificates, and compliance for every destination market.
            </p>

            {/* Region filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveRegion(null)}
                className="font-mono text-[8px] uppercase tracking-[0.16em] px-3 py-1.5 transition-all duration-200"
                style={{
                  background: !activeRegion ? "#4A7A3D" : "transparent",
                  color: !activeRegion ? "#F6F1E8" : "rgba(122,174,107,0.85)",
                  border: `1px solid ${!activeRegion ? "#4A7A3D" : "rgba(74,122,61,0.3)"}`,
                }}
              >
                All Regions
              </button>
              {REGIONS.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region === activeRegion ? null : region)}
                  className="font-mono text-[8px] uppercase tracking-[0.16em] px-3 py-1.5 transition-all duration-200"
                  style={{
                    background: activeRegion === region ? "#4A7A3D" : "transparent",
                    color: activeRegion === region ? "#F6F1E8" : "rgba(122,174,107,0.85)",
                    border: `1px solid ${activeRegion === region ? "#4A7A3D" : "rgba(74,122,61,0.3)"}`,
                  }}
                >
                  {region} <span className="ml-1 opacity-60">{REGION_STATS[region].markets}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* World map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          className="relative w-full border"
          style={{ borderColor: "rgba(74,122,61,0.15)", background: "rgba(0,0,0,0.15)" }}
        >
          <ComposableMap
            projection="geoEquirectangular"
            projectionConfig={{ scale: 130, center: [20, 5] }}
            width={MAP_W}
            height={MAP_H}
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            {/* Countries */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="rgba(74,122,61,0.12)"
                    stroke="rgba(74,122,61,0.25)"
                    strokeWidth={0.3}
                    style={{
                      default: { outline: "none" },
                      hover:   { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Route arcs — animated draw-on */}
            {inView && MARKET_DATA.map((m) => {
              const isActive = !activeRegion || m.region === activeRegion;
              return (
                <motion.path
                  key={`route-${m.name}`}
                  d={m.d}
                  fill="none"
                  stroke={isActive ? "rgba(74,122,61,0.5)" : "rgba(74,122,61,0.08)"}
                  strokeWidth={0.5}
                  strokeDasharray="3 2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.6, delay: m.delay, ease: "easeOut" }}
                />
              );
            })}

            {/* Market dots */}
            {inView && MARKET_DATA.map((m, i) => {
              const isActive = !activeRegion || m.region === activeRegion;
              return (
                <motion.g
                  key={m.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isActive ? 1 : 0.15, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05, duration: 0.35, ease: EASE }}
                  style={{ transformOrigin: `${m.dx}px ${m.dy}px` }}
                >
                  <motion.circle
                    cx={m.dx} cy={m.dy} r={4}
                    fill="none"
                    stroke={isActive ? "rgba(74,122,61,0.5)" : "rgba(74,122,61,0.15)"}
                    strokeWidth={0.4}
                    animate={inView ? { r: [4, 8], opacity: [0.6, 0] } : {}}
                    transition={{ delay: 0.8 + i * 0.06, duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <circle
                    cx={m.dx} cy={m.dy} r={2}
                    fill={isActive ? "#7AAE6B" : "rgba(74,122,61,0.3)"}
                  />
                </motion.g>
              );
            })}

            {/* Mumbai origin */}
            {inView && (
              <>
                {[8, 13, 18].map((r, i) => (
                  <motion.circle
                    key={r}
                    cx={MX} cy={MY} r={r}
                    fill="none"
                    stroke="rgba(74,122,61,0.35)"
                    strokeWidth={0.4}
                    animate={{ r: [r, r + 7], opacity: [0.5, 0] }}
                    transition={{ delay: 0.3 + i * 0.4, duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                  />
                ))}
                <circle cx={MX} cy={MY} r={4}   fill="#4A7A3D" />
                <circle cx={MX} cy={MY} r={2}   fill="#7AAE6B" />
                <text
                  x={MX + 6} y={MY + 5}
                  fontSize="5"
                  fill="rgba(122,174,107,0.65)"
                  fontFamily="JetBrains Mono, monospace"
                  letterSpacing="0.3"
                >
                  MUMBAI
                </text>
              </>
            )}
          </ComposableMap>

          {/* Region stat overlay */}
          {activeRegion && REGION_STATS[activeRegion] && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-3 right-3 px-4 py-3 pointer-events-none"
              style={{ background: "rgba(29,22,16,0.95)", border: "1px solid rgba(74,122,61,0.3)" }}
            >
              <p className="font-display font-light text-xl" style={{ color: "#7AAE6B" }}>
                {activeRegion}
              </p>
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] mt-1" style={{ color: "rgba(246,241,232,0.55)" }}>
                {REGION_STATS[activeRegion].markets} markets · {REGION_STATS[activeRegion].growth}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Market list */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE, delay: 0.55 }}
          className="mt-10 border-t pt-8"
          style={{ borderColor: "rgba(200,154,91,0.15)" }}
        >
          <div className="flex flex-wrap gap-2">
            {activeMarkets.map((market, i) => (
              <motion.span
                key={market.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04, duration: 0.4 }}
                className="font-mono text-[8px] uppercase tracking-[0.14em] px-3 py-1.5"
                style={{
                  border: "1px solid rgba(200,154,91,0.18)",
                  color: "rgba(200,154,91,0.6)",
                  background: "rgba(200,154,91,0.04)",
                }}
              >
                {market.name}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.18em]" style={{ color: "rgba(200,154,91,0.72)" }}>
              Actively expanding · New markets added quarterly
            </p>
            <Link
              href="/global-presence"
              className="group inline-flex items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200"
              style={{ border: "1px solid rgba(122,174,107,0.55)", color: "#7AAE6B" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(122,174,107,0.12)";
                el.style.borderColor = "#7AAE6B";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(122,174,107,0.55)";
              }}
            >
              View Global Presence
              <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
