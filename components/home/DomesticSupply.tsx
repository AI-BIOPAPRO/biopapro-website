"use client";

/**
 * Domestic B2B Supply — Bold India-first section
 * Full mango-to-forest gradient with bold industry tiles
 */

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, UtensilsCrossed, Coffee, Store, Users, Building2, ShoppingBag } from "lucide-react";
import { Aurora, ScrollFloat } from "@/components/reactbits";

const E = [0.16, 1, 0.3, 1] as const;

const SEGMENTS = [
  { icon: UtensilsCrossed, label: "Restaurants & Cafés",      desc: "Everyday tableware at high-volume scale" },
  { icon: Store,           label: "QSRs & Cloud Kitchens",    desc: "Speed and consistency for fast-turnaround service" },
  { icon: Building2,       label: "Hotels & Hospitality",     desc: "Premium presentation at scale" },
  { icon: Users,           label: "Caterers & Events",        desc: "Single-use with upscale wooden aesthetics" },
  { icon: Coffee,          label: "Corporate Cafeterias",     desc: "Daily supply contracts, consistent quality" },
  { icon: ShoppingBag,     label: "Distributors & Wholesale", desc: "Pan-India B2B supply at competitive pricing" },
] as const;

export default function DomesticSupply() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#F5F0E6" }}
      aria-label="Biopapro domestic B2B supply"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-20 md:pb-28">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: E }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>04</span>
              <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#1A1208" }}>Domestic Supply</span>
            </div>
            <h2
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2.8rem, 6vw, 6rem)",
                lineHeight:    0.9,
                letterSpacing: "-0.03em",
                color:         "#1A1208",
              }}
            >
              BUILT FOR
              <br />
              <span style={{ color: "#E97316" }}>{"INDIA'S"}</span>
              <br />
              FOOD-SERVICE.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6, ease: E }}
            className="font-sans text-sm leading-relaxed lg:max-w-[320px]"
            style={{ color: "#7A6B54" }}
          >
            From restaurants and QSRs to hotels, caterers and corporate campuses — Biopapro supplies sustainable single-use tableware at the scale, consistency and dependable supply India&apos;s food-service industry requires.
          </motion.p>
        </div>

        {/* 6-segment grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SEGMENTS.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={seg.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.65, ease: E }}
                className="group flex items-start gap-5 p-6 md:p-7 transition-all duration-300 cursor-default"
                style={{
                  background:   "rgba(26,18,8,0.03)",
                  border:       "1px solid rgba(26,18,8,0.07)",
                  borderRadius: "4px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background   = "rgba(233,115,22,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor  = "rgba(233,115,22,0.25)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background   = "rgba(26,18,8,0.03)";
                  (e.currentTarget as HTMLElement).style.borderColor  = "rgba(26,18,8,0.07)";
                }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded"
                  style={{ background: "rgba(233,115,22,0.1)" }}
                >
                  <Icon size={18} strokeWidth={2} style={{ color: "#E97316" }} />
                </div>
                <div>
                  <p
                    className="font-sans font-bold text-sm mb-1"
                    style={{ color: "#1A1208" }}
                  >
                    {seg.label}
                  </p>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: "#7A6B54" }}>
                    {seg.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollFloat delay={0.3} className="flex justify-start mt-12">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300"
            style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "4px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#C4580A"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#E97316"; }}
          >
            Get Domestic Pricing
            <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </ScrollFloat>

      </div>
    </section>
  );
}
