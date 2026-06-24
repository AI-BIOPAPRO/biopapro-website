"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { geoEquirectangular } from "d3-geo";
import {
  ComposableMap, Geographies, Geography, Marker,
} from "react-simple-maps";
import SectionLabel from "@/components/shared/SectionLabel";
import {
  MARKETS, REGIONS, REGION_DATA, COMPANY_FACTS,
} from "@/lib/global-presence-data";
const EASE = [0.16, 1, 0.3, 1] as const;
const GEO_URL = "/world-110m.json";
const INDIA_ID = "356";
const MAP_W = 800;
const MAP_H = 420;

const proj = geoEquirectangular()
  .scale(140)
  .center([20, 10] as [number, number])
  .translate([MAP_W / 2, MAP_H / 2]);

const INDIA_LONLAT: [number, number] = [72.8, 19.1];
const [INDIA_X, INDIA_Y] = proj(INDIA_LONLAT) as [number, number];

// [longitude, latitude] for each market
const MARKET_LONLAT: Record<string, [number, number]> = {
  "United States":  [-77.0,  38.9],
  "Canada":         [-75.7,  45.4],
  "Mexico":         [-99.1,  19.4],
  "United Kingdom": [ -0.1,  51.5],
  "Ireland":        [ -6.3,  53.3],
  "Germany":        [ 13.4,  52.5],
  "Netherlands":    [  4.9,  52.4],
  "Spain":          [ -3.7,  40.4],
  "Poland":         [ 21.0,  52.2],
  "Greece":         [ 23.7,  37.9],
  "Romania":        [ 26.1,  44.4],
  "UAE":            [ 55.3,  25.2],
  "Qatar":          [ 51.5,  25.3],
  "Bahrain":        [ 50.6,  26.1],
  "Mauritius":      [ 57.6, -20.2],
  "Maldives":       [ 73.5,   4.2],
  "Australia":      [151.2, -33.9],
};

function arcD(to: [number, number]): string {
  const [x2, y2] = proj(to) as [number, number];
  const cx = (INDIA_X + x2) / 2;
  const cy = Math.min(INDIA_Y, y2) - Math.abs(x2 - INDIA_X) * 0.22;
  return `M ${INDIA_X},${INDIA_Y} Q ${cx},${Math.max(4, cy)} ${x2},${y2}`;
}

const ROUTE_PATHS = MARKETS.map((m, i) => {
  const coords = MARKET_LONLAT[m.name];
  if (!coords) return null;
  const [dx, dy] = proj(coords) as [number, number];
  return { name: m.name, region: m.region, d: arcD(coords), dx, dy, delay: 0.4 + i * 0.05 };
}).filter(Boolean) as { name: string; region: string; d: string; dx: number; dy: number; delay: number }[];

// Region label positions [lon, lat]
const REGION_LABELS: { label: string; coords: [number, number] }[] = [
  { label: "AMERICAS",    coords: [-90,   15] },
  { label: "EUROPE",      coords: [  15,  58] },
  { label: "MIDDLE EAST", coords: [  50,  32] },
  { label: "AFRICA",      coords: [  20,   5] },
  { label: "ASIA",        coords: [ 110,  35] },
  { label: "PACIFIC",     coords: [ 160, -15] },
];

const CHAIN_STEPS = [
  { label: "Factory",           sub: "Mumbai, India"    },
  { label: "Packaging",         sub: "OPP bags, cartons" },
  { label: "Container Loading", sub: "20ft / 40ft FCL"  },
  { label: "Port Export",       sub: "JNPT, Mumbai"     },
  { label: "Destination",       sub: "18+ countries"    },
];

export default function OriginToWorld() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [hoveredMarket, setHoveredMarket] = useState<string | null>(null);

  const visibleMarkets = activeRegion
    ? MARKETS.filter((m) => m.region === activeRegion)
    : MARKETS;

  return (
    <section
      id="origin"
      style={{ background: "#EFE6D7" }}
      aria-labelledby="origin-heading"
    >
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Section header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="02" label="From India to the World" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="origin-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.4rem)" }}
            >
              Every shipment
              <br />
              <span style={{ color: "#C89A5B" }}>starts here.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light text-base leading-relaxed flex items-center"
            >
              From Biopapro's manufacturing facility in Mumbai, export containers
              reach {COMPANY_FACTS.exportMarkets}+ markets across 6 continents.
              FCL and LCL on rolling schedules. Every shipment leaves with full
              documentation.
            </motion.p>
          </div>
        </div>

        {/* ── 3-column editorial layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">

          {/* Left — Manufacturing origin + supply chain */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay: 0.22 }}
          >
            <div className="p-5 flex flex-col" style={{ background: "#FBF8F2", border: "1px solid #DDD3C5" }}>
              <div className="mb-5 pb-4 border-b" style={{ borderColor: "#EDE5D8" }}>
                <p className="font-sans text-[11px] font-semibold text-ink-muted mb-2">
                  Manufacturing Origin
                </p>
                <p className="font-display font-light text-ink" style={{ fontSize: "1.15rem", lineHeight: 1.2 }}>
                  Mumbai,<br />India
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#C89A5B" }} />
                  <span className="font-sans text-[11px] text-ink-muted">
                    Est. {COMPANY_FACTS.founded}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 mb-5">
                {[
                  { v: "100M+", l: "Units / Month" },
                  { v: "300+T", l: "Monthly Capacity" },
                  { v: "380+",  l: "Employees" },
                ].map((m) => (
                  <div key={m.l} className="flex items-baseline gap-2">
                    <span className="font-mono font-bold text-[1rem] leading-none" style={{ color: "#C89A5B" }}>
                      {m.v}
                    </span>
                    <span className="font-sans text-[12px] text-ink-muted">{m.l}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4" style={{ borderColor: "#EDE5D8" }}>
                <p className="font-sans text-[11px] font-semibold text-ink-muted mb-3">Supply Chain</p>
                <div className="flex flex-col gap-0">
                  {CHAIN_STEPS.map((step, i) => (
                    <div key={step.label}>
                      <div className="flex items-center gap-2.5 py-1.5">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{
                            background: i === 0 ? "#C89A5B" : i === CHAIN_STEPS.length - 1 ? "#4A7A3D" : "#DDD3C5",
                            border: "1.5px solid #DDD3C5",
                          }}
                        />
                        <div>
                          <p className="font-sans text-[12px] font-semibold text-ink leading-none">{step.label}</p>
                          <p className="font-sans text-[11px] text-ink-muted mt-0.5">{step.sub}</p>
                        </div>
                      </div>
                      {i < CHAIN_STEPS.length - 1 && (
                        <div className="ml-[3.5px] w-px h-3" style={{ background: "#DDD3C5" }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t" style={{ borderColor: "#EDE5D8" }}>
                <span
                  className="font-sans text-[12px] font-semibold px-2.5 py-1.5"
                  style={{ border: "1px solid rgba(74,122,61,0.3)", color: "#4A7A3D", background: "rgba(74,122,61,0.06)" }}
                >
                  FSC® 100% Certified
                </span>
              </div>
            </div>
          </motion.div>

          {/* Center — World map */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          >
            {/* Region filter */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              <button
                onClick={() => setActiveRegion(null)}
                className="font-sans text-[12px] uppercase tracking-[0.1em] px-3 py-2 transition-all duration-200"
                style={{
                  background: !activeRegion ? "#C89A5B" : "transparent",
                  color: !activeRegion ? "#1D1610" : "#6B5D50",
                  border: `1px solid ${!activeRegion ? "#C89A5B" : "#DDD3C5"}`,
                }}
              >
                All ({MARKETS.length})
              </button>
              {REGIONS.map((r) => (
                <button
                  key={r}
                  onClick={() => setActiveRegion(activeRegion === r ? null : r)}
                  className="font-sans text-[12px] uppercase tracking-[0.1em] px-3 py-2 transition-all duration-200"
                  style={{
                    background: activeRegion === r ? "#C89A5B" : "transparent",
                    color: activeRegion === r ? "#1D1610" : "#6B5D50",
                    border: `1px solid ${activeRegion === r ? "#C89A5B" : "#DDD3C5"}`,
                  }}
                >
                  {r} ({REGION_DATA[r].markets})
                </button>
              ))}
            </div>

            {/* Map */}
            <div
              className="relative border overflow-hidden"
              style={{ background: "#F5EFE4", borderColor: "#DDD3C5" }}
            >
              <ComposableMap
                projection="geoEquirectangular"
                projectionConfig={{ scale: 140, center: [20, 10] }}
                width={MAP_W}
                height={MAP_H}
                style={{ width: "100%", height: "auto", display: "block" }}
              >
                {/* Country fills — India highlighted */}
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isIndia = String(geo.id) === INDIA_ID;
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isIndia ? "rgba(200,154,91,0.55)" : "rgba(200,154,91,0.16)"}
                          stroke="rgba(200,154,91,0.45)"
                          strokeWidth={isIndia ? 0.8 : 0.3}
                          style={{
                            default: { outline: "none" },
                            hover:   { outline: "none" },
                            pressed: { outline: "none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* Animated dashed route arcs */}
                {inView && ROUTE_PATHS.map((r) => {
                  const isActive = !activeRegion || r.region === activeRegion;
                  return (
                    <motion.path
                      key={`route-${r.name}`}
                      d={r.d}
                      fill="none"
                      stroke={isActive ? "rgba(200,154,91,0.65)" : "rgba(200,154,91,0.12)"}
                      strokeWidth={isActive ? 0.8 : 0.4}
                      strokeDasharray="4 3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.8, delay: r.delay, ease: "easeOut" }}
                    />
                  );
                })}

                {/* Region labels */}
                {REGION_LABELS.map((lbl) => {
                  const [lx, ly] = proj(lbl.coords) as [number, number];
                  return (
                    <text
                      key={lbl.label}
                      x={lx} y={ly}
                      textAnchor="middle"
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: 7,
                        fill: "rgba(140,98,57,0.38)",
                        letterSpacing: "0.12em",
                        fontWeight: 600,
                        pointerEvents: "none",
                        userSelect: "none",
                      }}
                    >
                      {lbl.label}
                    </text>
                  );
                })}

                {/* Export market dots */}
                {ROUTE_PATHS.map((r, i) => {
                  const isActive = !activeRegion || r.region === activeRegion;
                  const isHovered = hoveredMarket === r.name;
                  return (
                    <motion.g
                      key={r.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: isActive ? 1 : 0.2, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.04, duration: 0.3, ease: EASE }}
                      style={{ transformOrigin: `${r.dx}px ${r.dy}px`, cursor: "pointer" }}
                      onMouseEnter={() => setHoveredMarket(r.name)}
                      onMouseLeave={() => setHoveredMarket(null)}
                    >
                      {isHovered && (
                        <motion.circle
                          cx={r.dx} cy={r.dy} r={6}
                          fill="none" stroke="rgba(200,154,91,0.5)" strokeWidth={0.8}
                          animate={{ r: [6, 11], opacity: [0.7, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        />
                      )}
                      <circle
                        cx={r.dx} cy={r.dy} r={3}
                        fill={isHovered ? "#C89A5B" : "rgba(250,245,236,0.9)"}
                        stroke="#C89A5B" strokeWidth={1}
                      />
                      {isHovered && (
                        <text
                          x={r.dx} y={r.dy - 8}
                          textAnchor="middle"
                          style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 7, fill: "#1D1610", fontWeight: 600 }}
                        >
                          {r.name}
                        </text>
                      )}
                    </motion.g>
                  );
                })}

                {/* India manufacturing hub — pulsing rings */}
                {[10, 16, 22].map((r, i) => (
                  <motion.circle
                    key={`pulse-${r}`}
                    cx={INDIA_X} cy={INDIA_Y} r={r}
                    fill="none"
                    stroke="rgba(200,154,91,0.3)"
                    strokeWidth={0.5}
                    animate={inView ? { r: [r, r + 8], opacity: [0.6, 0] } : {}}
                    transition={{ delay: 0.5 + i * 0.4, duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                  />
                ))}
                <circle cx={INDIA_X} cy={INDIA_Y} r={5}   fill="#C89A5B" />
                <circle cx={INDIA_X} cy={INDIA_Y} r={2.5} fill="#8C6239" />

                {/* India label */}
                <rect
                  x={INDIA_X + 7} y={INDIA_Y - 10}
                  width={52} height={14}
                  fill="rgba(29,22,16,0.88)" rx={1}
                />
                <text
                  x={INDIA_X + 11} y={INDIA_Y - 2}
                  style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 5.5, fill: "#C89A5B", fontWeight: 700 }}
                >
                  BIOPAPRO
                </text>
                <text
                  x={INDIA_X + 11} y={INDIA_Y + 5}
                  style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 3.8, fill: "rgba(246,241,232,0.75)" }}
                >
                  MFG HUB · MUMBAI
                </text>
              </ComposableMap>

              {/* Legend */}
              <div
                className="absolute bottom-2 left-2 flex items-center gap-4 px-3 py-2"
                style={{ background: "rgba(250,245,236,0.92)", border: "1px solid rgba(221,211,197,0.8)" }}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: "#C89A5B" }} />
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em]" style={{ color: "#6B5D50" }}>
                    Manufacturing Hub
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full border" style={{ background: "rgba(250,245,236,0.9)", borderColor: "#C89A5B" }} />
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em]" style={{ color: "#6B5D50" }}>
                    Export Market
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="20" height="6">
                    <line x1="0" y1="3" x2="20" y2="3" stroke="rgba(200,154,91,0.65)" strokeWidth="1.5" strokeDasharray="4 2" />
                  </svg>
                  <span className="font-mono text-[8px] uppercase tracking-[0.12em]" style={{ color: "#6B5D50" }}>
                    Shipping Route
                  </span>
                </div>
              </div>

              <p className="absolute bottom-2 right-2 font-mono text-[7px] uppercase tracking-[0.14em]" style={{ color: "rgba(140,98,57,0.4)" }}>
                Hover markets for details
              </p>
            </div>

            {/* Country tags below map */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {visibleMarkets.map((m, i) => (
                <motion.span
                  key={m.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.75 + i * 0.025 }}
                  className="font-sans text-[12px] px-2.5 py-1.5 cursor-default"
                  style={{
                    border: `1px solid ${hoveredMarket === m.name ? "#C89A5B" : "#DDD3C5"}`,
                    color: hoveredMarket === m.name ? "#8C6239" : "#6B5D50",
                    background: hoveredMarket === m.name ? "rgba(200,154,91,0.1)" : "rgba(255,255,255,0.5)",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={() => setHoveredMarket(m.name)}
                  onMouseLeave={() => setHoveredMarket(null)}
                >
                  {m.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — Export destinations */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay: 0.38 }}
          >
            <div className="p-5 flex flex-col" style={{ background: "#FBF8F2", border: "1px solid #DDD3C5" }}>
              <div className="mb-4 pb-4 border-b" style={{ borderColor: "#EDE5D8" }}>
                <p className="font-sans text-[11px] font-semibold text-ink-muted mb-1.5">Export Destinations</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono font-bold text-[1.5rem] leading-none" style={{ color: "#C89A5B" }}>
                    {COMPANY_FACTS.exportMarkets}+
                  </span>
                  <span className="font-sans text-[12px] text-ink-muted">Active markets</span>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 flex-1">
                {REGIONS.map((region) => {
                  const data = REGION_DATA[region];
                  const rMarkets = MARKETS.filter((m) => m.region === region);
                  const isActive = !activeRegion || activeRegion === region;
                  return (
                    <div
                      key={region}
                      className="cursor-pointer"
                      style={{ opacity: isActive ? 1 : 0.4, transition: "opacity 0.2s" }}
                      onClick={() => setActiveRegion(activeRegion === region ? null : region)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-sans text-[11px] font-semibold text-ink">{region}</span>
                        <div className="flex items-center gap-1.5">
                          <span
                            className="font-sans text-[11px] px-1.5 py-0.5"
                            style={{ background: "rgba(74,122,61,0.08)", border: "1px solid rgba(74,122,61,0.18)", color: "#4A7A3D" }}
                          >
                            {data.growth}
                          </span>
                          <span className="font-mono font-bold text-[12px]" style={{ color: "#C89A5B" }}>
                            {data.markets}
                          </span>
                        </div>
                      </div>
                      <p className="font-sans text-[12px] text-ink-muted leading-relaxed">
                        {rMarkets.map((m) => m.name).join(" · ")}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t" style={{ borderColor: "#EDE5D8" }}>
                <p className="font-sans text-[12px] text-ink-muted">Actively expanding</p>
                <p className="font-sans text-[11px] text-ink-muted mt-0.5">New markets added quarterly</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
