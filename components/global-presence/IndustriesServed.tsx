"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { INDUSTRIES } from "@/lib/global-presence-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function IndustriesServed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#EFE6D7" }} aria-labelledby="industries-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="04" label="Industries We Supply" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="industries-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Built for
              <br />
              <span style={{ color: "#C89A5B" }}>global food service.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light text-base leading-relaxed flex items-center"
            >
              Biopapro products are certified, container-ready, and
              already deployed across airlines, hotel chains, food-service
              operators, and distribution networks in 18+ countries.
            </motion.p>
          </div>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.62, ease: EASE, delay: 0.18 + i * 0.07 }}
              className="group flex flex-col bg-surface border border-border p-6"
              style={{ transition: "border-color 0.28s, box-shadow 0.32s, transform 0.28s" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200,154,91,0.45)";
                el.style.boxShadow = "0 8px 28px rgba(44,36,27,0.1)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#DDD3C5";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Icon + name */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center text-[18px] flex-shrink-0"
                  style={{ background: "rgba(200,154,91,0.1)", border: "1px solid rgba(200,154,91,0.25)" }}
                >
                  {industry.icon}
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-ink text-[13px] leading-tight">
                    {industry.name}
                  </h3>
                  <p className="font-mono text-[7px] uppercase tracking-[0.16em]" style={{ color: "#C89A5B" }}>
                    MOQ {industry.moq}
                  </p>
                </div>
              </div>

              <p className="font-sans text-[12.5px] font-light text-ink-light leading-relaxed flex-1 mb-4">
                {industry.description}
              </p>

              {/* Products */}
              <div className="mb-3">
                <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-ink-muted mb-2">
                  Products
                </p>
                <div className="flex flex-wrap gap-1">
                  {industry.products.slice(0, 3).map((p) => (
                    <span
                      key={p}
                      className="font-mono text-[7px] uppercase tracking-[0.1em] px-2 py-1"
                      style={{ background: "rgba(74,122,61,0.07)", border: "1px solid rgba(74,122,61,0.18)", color: "#4A7A3D" }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clients note */}
              <div className="pt-3 border-t" style={{ borderColor: "#EDE5D8" }}>
                <p className="font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.1em] leading-relaxed">
                  {industry.clients}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
