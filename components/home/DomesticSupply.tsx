"use client";

/**
 * S4 — Domestic B2B Supply
 *
 * Biopapro is manufacturer-first: it supplies India's food-service
 * industry at commercial scale, not just an export operation. This
 * section exists to make that half of the business immediately
 * legible on the homepage, using the exact card/header pattern
 * already established on Global Presence's "Industries We Supply"
 * (components/global-presence/IndustriesServed.tsx) — same visual
 * language, no new design system introduced.
 *
 * Segment descriptions are deliberately generic (no invented MOQs,
 * client counts, or volume figures per segment) — Biopapro doesn't
 * have verified per-segment numbers to cite.
 */

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const SEGMENTS = [
  {
    id: "restaurants",
    icon: "🍽",
    name: "Restaurants & Cafés",
    description: "Everyday dining service — consistent quality tableware built for high-volume covers.",
  },
  {
    id: "qsr",
    icon: "🍔",
    name: "QSRs & Cloud Kitchens",
    description: "Built for speed and consistency — sturdy, functional cutlery for fast-turnaround service.",
  },
  {
    id: "hotels",
    icon: "🏨",
    name: "Hotels & Hospitality",
    description: "In-room dining, banqueting, and F&B outlets — premium presentation at scale.",
  },
  {
    id: "caterers",
    icon: "🎪",
    name: "Caterers & Events",
    description: "Reliable bulk supply for events of any size, delivered on schedule.",
  },
  {
    id: "corporate",
    icon: "🏢",
    name: "Corporate Cafeterias",
    description: "Sustainable tableware for employee dining programs, sized to your headcount.",
  },
  {
    id: "distributors",
    icon: "📦",
    name: "Distributors & Wholesalers",
    description: "Bulk supply partnerships for businesses reselling across their own networks.",
  },
] as const;

export default function DomesticSupply() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section className="bg-parchment" aria-labelledby="domestic-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-20 md:pb-24">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="04" label="Domestic B2B Supply" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="domestic-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Built for India&rsquo;s
              <br />
              <span style={{ color: "#4A7A3D" }}>food-service industry.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light text-base leading-relaxed flex items-center"
            >
              From restaurants and QSRs to hotels, caterers and distributors,
              Biopapro supplies sustainable single-use tableware for businesses
              that require consistent quality, dependable supply, and
              commercial-scale volumes.
            </motion.p>
          </div>
        </div>

        {/* Segment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {SEGMENTS.map((segment, i) => (
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.62, ease: EASE, delay: 0.18 + i * 0.07 }}
              className="group flex flex-col bg-surface border border-border p-6"
              style={{ transition: "border-color 0.28s, box-shadow 0.32s, transform 0.28s" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(74,122,61,0.4)";
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
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 flex items-center justify-center text-[18px] flex-shrink-0"
                  style={{ background: "rgba(74,122,61,0.08)", border: "1px solid rgba(74,122,61,0.22)" }}
                >
                  {segment.icon}
                </div>
                <h3 className="font-sans font-semibold text-ink text-[13px] leading-tight">
                  {segment.name}
                </h3>
              </div>
              <p className="font-sans text-[12.5px] font-light text-ink-light leading-relaxed">
                {segment.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Domestic procurement CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8 border-t border-border"
        >
          <p className="font-sans text-ink-light text-sm">
            Sourcing for a restaurant, hotel, or distribution business in India?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200 flex-shrink-0"
            style={{ border: "1px solid #4A7A3D", color: "#4A7A3D" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#4A7A3D";
              el.style.color = "#F6F1E8";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#4A7A3D";
            }}
          >
            Source for India
            <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
