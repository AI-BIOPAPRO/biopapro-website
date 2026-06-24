"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { MARKETS, REGIONS, REGION_DATA } from "@/lib/global-presence-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function RegionalFootprint() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      id="footprint"
      style={{ background: "#F6F1E8" }}
      className="paper"
      aria-labelledby="footprint-heading"
    >
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="03" label="Global Footprint" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="footprint-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Six regions.
              <br />
              <span style={{ color: "#C89A5B" }}>17 confirmed markets.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light text-base leading-relaxed flex items-center"
            >
              Biopapro has established export relationships across the Americas,
              Europe, the Middle East, Africa, and the Pacific — with a regional
              the Middle East, and the Pacific.
            </motion.p>
          </div>
        </div>

        {/* Regional breakdown grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REGIONS.map((region, i) => {
            const data = REGION_DATA[region];
            const markets = MARKETS.filter((m) => m.region === region);
            return (
              <motion.div
                key={region}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.07 }}
                className="flex flex-col border border-border bg-surface p-6"
                style={{ transition: "box-shadow 0.3s" }}
              >
                {/* Region header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-sans font-semibold text-ink text-[14px] leading-snug mb-0.5">
                      {region}
                    </h3>
                    <p className="font-sans text-[11px] text-ink-muted">
                      {data.label}
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className="font-mono font-bold text-[1.3rem] leading-none"
                      style={{ color: "#C89A5B" }}
                    >
                      {data.markets}
                    </p>
                    <p className="font-sans text-[11px] text-ink-muted mt-0.5">
                      markets
                    </p>
                  </div>
                </div>

                {/* Growth badge */}
                <div className="mb-4">
                  <span
                    className="font-sans text-[11px] px-2.5 py-1"
                    style={{
                      background: "rgba(200,154,91,0.1)",
                      border: "1px solid rgba(200,154,91,0.28)",
                      color: "#8C6239",
                    }}
                  >
                    {data.growth}
                  </span>
                </div>

                {/* Country list */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {markets.map((m) => (
                    <span
                      key={m.name}
                      className="font-sans text-[12px] px-2.5 py-1"
                      style={{ background: "#F6F1E8", border: "1px solid #DDD3C5", color: "#6B5D50" }}
                    >
                      {m.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
