"use client";

import { useRef, useEffect, useState } from "react";
import {
  geoOrthographic, geoPath, geoGraticule, geoInterpolate,
} from "d3-geo";
import { feature } from "topojson-client";
import { motion } from "motion/react";

const SIZE  = 440;
const R     = SIZE / 2 - 6;
const CX    = SIZE / 2;
const CY    = SIZE / 2;
const SPEED = 0.10; // degrees per frame at ~30fps

const INDIA: [number, number] = [72.8, 19.1];

// Key export routes — great-circle arcs, dots animate along each
const ROUTES: { name: string; to: [number, number]; dur: number; offset: number }[] = [
  { name: "USA",         to: [-77.0,  38.9], dur: 9000,  offset: 0    },
  { name: "Canada",      to: [-75.7,  45.4], dur: 10500, offset: 1200 },
  { name: "Mexico",      to: [-99.1,  19.4], dur: 11000, offset: 3000 },
  { name: "UK",          to: [ -0.1,  51.5], dur: 7500,  offset: 800  },
  { name: "Germany",     to: [ 13.4,  52.5], dur: 7000,  offset: 400  },
  { name: "Netherlands", to: [  4.9,  52.4], dur: 7200,  offset: 600  },
  { name: "UAE",         to: [ 55.3,  25.2], dur: 4000,  offset: 200  },
  { name: "Qatar",       to: [ 51.5,  25.3], dur: 4500,  offset: 500  },
  { name: "Mauritius",   to: [ 57.6, -20.2], dur: 5500,  offset: 1800 },
  { name: "Maldives",    to: [ 73.5,   4.2], dur: 3500,  offset: 100  },
  { name: "Australia",   to: [151.2, -33.9], dur: 12000, offset: 2500 },
];

// True if a lon/lat point faces the viewer given the current globe rotation
function isFront(lon: number, lat: number, rot: [number, number, number]): boolean {
  const toRad = Math.PI / 180;
  const cLon  = -rot[0] * toRad;
  const cLat  = -rot[1] * toRad;
  const pLon  =  lon    * toRad;
  const pLat  =  lat    * toRad;
  return (
    Math.sin(cLat) * Math.sin(pLat) +
    Math.cos(cLat) * Math.cos(pLat) * Math.cos(pLon - cLon)
  ) > 0;
}

interface GlobeData {
  countries: GeoJSON.FeatureCollection;
  india: GeoJSON.Feature | GeoJSON.FeatureCollection;
}

export default function SpinningGlobe({ triggered }: { triggered: boolean }) {
  // Rotation ref — avoids stale closure, starts centred on India
  const rotRef  = useRef<[number, number, number]>([-72.8, -19.1, 0]);
  const animRef  = useRef<number>(0);
  const [tick, setTick]   = useState(0);
  const [data, setData]   = useState<GlobeData | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Fetch topology — small public file, cached by browser after first load
  useEffect(() => {
    fetch("/world-110m.json")
      .then((r) => r.json())
      .then((topo) => {
        const countries = feature(topo, topo.objects.countries) as unknown as GeoJSON.FeatureCollection;
        const indiaGeo  = topo.objects.countries.geometries.find(
          (g: any) => Number(g.id) === 356
        );
        const india = feature(topo, indiaGeo) as unknown as GeoJSON.Feature;
        setData({ countries, india });
        setLoaded(true);
      });
  }, []);

  // Animation loop — ~30fps
  useEffect(() => {
    if (!triggered) return;
    let last = 0;
    const loop = (t: number) => {
      if (t - last > 33) {
        rotRef.current = [rotRef.current[0] - SPEED, rotRef.current[1], 0];
        setTick((n) => n + 1);
        last = t;
      }
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [triggered]);

  const rot  = rotRef.current;
  const proj = geoOrthographic()
    .scale(R)
    .translate([CX, CY])
    .rotate(rot)
    .clipAngle(90);

  const pathFn = geoPath(proj);
  const graticuleLine = geoGraticule().step([20, 20])();

  // Compute animated dot positions
  const now = Date.now();
  const dots = ROUTES.map((r) => {
    const elapsed = (now + r.offset) % r.dur;
    const frac    = elapsed / r.dur;
    const [lon, lat] = geoInterpolate(INDIA, r.to)(frac);
    const front   = isFront(lon, lat, rot);
    const pt      = proj([lon, lat]);
    return { ...r, pt, front };
  });

  // India dot position
  const indiaPt    = proj(INDIA);
  const indiaFront = isFront(INDIA[0], INDIA[1], rot);

  return (
    <div className="relative" style={{ width: "100%", maxWidth: SIZE }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={triggered ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{ width: "100%", height: "auto", display: "block" }}
          aria-label="Spinning globe showing Biopapro export routes from India"
        >
          <defs>
            <clipPath id="globe-sphere-clip">
              <circle cx={CX} cy={CY} r={R} />
            </clipPath>
            <radialGradient id="globe-ocean" cx="36%" cy="32%">
              <stop offset="0%"   stopColor="#FAF5EC" />
              <stop offset="70%"  stopColor="#F0E8D8" />
              <stop offset="100%" stopColor="#E8DEC8" />
            </radialGradient>
            <radialGradient id="globe-sheen" cx="30%" cy="25%">
              <stop offset="0%"   stopColor="rgba(255,255,255,0.18)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* Ocean sphere */}
          <circle cx={CX} cy={CY} r={R} fill="url(#globe-ocean)" />

          <g clipPath="url(#globe-sphere-clip)">
            {/* Graticule grid */}
            <path
              d={pathFn(graticuleLine) ?? ""}
              fill="none"
              stroke="rgba(200,154,91,0.1)"
              strokeWidth={0.5}
            />

            {/* All countries */}
            {data && (
              <path
                d={pathFn(data.countries) ?? ""}
                fill="rgba(200,154,91,0.18)"
                stroke="rgba(200,154,91,0.45)"
                strokeWidth={0.4}
              />
            )}

            {/* India — highlighted fill */}
            {data && (
              <path
                d={pathFn(data.india) ?? ""}
                fill="rgba(200,154,91,0.62)"
                stroke="rgba(200,154,91,0.85)"
                strokeWidth={0.7}
              />
            )}

            {/* Shipping route arcs — great circle, auto-clipped by orthographic */}
            {triggered && ROUTES.map((r) => {
              const routeGeo: GeoJSON.Feature = {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  // 32 interpolated points gives a smooth great-circle arc
                  coordinates: Array.from({ length: 33 }, (_, i) => {
                    const [lon, lat] = geoInterpolate(INDIA, r.to)(i / 32);
                    return [lon, lat];
                  }),
                },
              };
              return (
                <path
                  key={r.name}
                  d={pathFn(routeGeo) ?? ""}
                  fill="none"
                  stroke="rgba(200,154,91,0.5)"
                  strokeWidth={0.75}
                  strokeDasharray="3 2.5"
                  strokeLinecap="round"
                />
              );
            })}

            {/* Animated dots along each route */}
            {triggered && dots.map((dot) =>
              dot.front && dot.pt ? (
                <circle
                  key={dot.name}
                  cx={dot.pt[0]}
                  cy={dot.pt[1]}
                  r={2.8}
                  fill="#C89A5B"
                  opacity={0.92}
                />
              ) : null
            )}

            {/* India origin dot — pulsing rings handled via CSS animation */}
            {indiaFront && indiaPt && (
              <>
                <circle cx={indiaPt[0]} cy={indiaPt[1]} r={14}
                  fill="rgba(200,154,91,0.08)" />
                <circle cx={indiaPt[0]} cy={indiaPt[1]} r={9}
                  fill="rgba(200,154,91,0.18)" />
                <circle cx={indiaPt[0]} cy={indiaPt[1]} r={5.5} fill="#C89A5B" />
                <circle cx={indiaPt[0]} cy={indiaPt[1]} r={2.8} fill="#8C6239" />
              </>
            )}
          </g>

          {/* Specular sheen overlay — gives 3D depth */}
          <circle cx={CX} cy={CY} r={R} fill="url(#globe-sheen)" />

          {/* Outer border */}
          <circle cx={CX} cy={CY} r={R}
            fill="none"
            stroke="rgba(200,154,91,0.3)"
            strokeWidth={1}
          />
        </svg>
      </motion.div>

      {/* "Manufacturing Origin" badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={triggered ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="absolute bottom-3 left-3 px-3 py-2.5"
        style={{ background: "#1D1610", border: "1px solid #3D2E22" }}
      >
        <p className="font-mono text-[7px] uppercase tracking-[0.22em]"
          style={{ color: "rgba(200,154,91,0.7)" }}>
          Manufacturing Origin
        </p>
        <p className="font-mono text-[9px] uppercase tracking-[0.14em] mt-0.5"
          style={{ color: "#F6F1E8" }}>
          Mumbai, India
        </p>
      </motion.div>

      {/* Loading placeholder */}
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(246,241,232,0.6)" }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-amber-300 border-t-amber-600 animate-spin" />
        </div>
      )}
    </div>
  );
}
