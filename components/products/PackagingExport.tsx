"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Box, Container, Tag } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

const PACKAGING_TIERS = [
  {
    icon: Box,
    title: "Bulk OPP Packaging",
    subtitle: "Standard export",
    description:
      "Products packed in OPP (Oriented Polypropylene) bags — 100 or 500 pieces per bag depending on category. Hygienic, moisture-resistant, and production-line ready for food service.",
    specs: [
      { label: "Cutlery", value: "100 pcs / OPP bag" },
      { label: "Stirrers", value: "500 pcs / OPP bag" },
      { label: "Skewers", value: "200 pcs / OPP bag" },
      { label: "Sets", value: "50 sets / OPP bag" },
    ],
    badge: "Most Popular",
  },
  {
    icon: Tag,
    title: "Individual Sleeving",
    subtitle: "Premium service",
    description:
      "Each piece individually sleeved in OPP with optional kraft paper outer. Preferred by airlines, premium food service, and hotel room service. Custom logo printing available.",
    specs: [
      { label: "Spoon 110mm", value: "100 pcs / carton" },
      { label: "Fork 160mm", value: "100 pcs / carton" },
      { label: "MOQ (sleeved)", value: "10,000 pcs" },
      { label: "Lead time", value: "+7 days" },
    ],
    badge: "Airlines · Hotels",
  },
  {
    icon: Container,
    title: "OEM / Custom Packaging",
    subtitle: "Private label",
    description:
      "Custom kraft paper sleeves with your logo, brand colours, and certifications printed. Full OEM service — from artwork to delivery. Minimum quantities apply for printing setup.",
    specs: [
      { label: "Print colours", value: "Up to 4 colours" },
      { label: "Lead time", value: "4–6 weeks" },
      { label: "MOQ (OEM)", value: "50,000 pcs" },
      { label: "Artwork", value: "Client supplied / assisted" },
    ],
    badge: "Distributors · Retailers",
  },
];

const CONTAINER_DATA = [
  { product: "Wooden Fork 160mm",    cartonPcs: "10,000", cartons20ft: "~800",  cartons40ft: "~1,600" },
  { product: "Wooden Spoon 160mm",   cartonPcs: "10,000", cartons20ft: "~820",  cartons40ft: "~1,650" },
  { product: "Wooden Knife 165mm",   cartonPcs: "10,000", cartons20ft: "~780",  cartons40ft: "~1,580" },
  { product: "Wooden Spork 140mm",   cartonPcs: "10,000", cartons20ft: "~860",  cartons40ft: "~1,720" },
  { product: "Coffee Stirrer 140mm", cartonPcs: "50,000", cartons20ft: "~600",  cartons40ft: "~1,200" },
  { product: "Gun Skewer 15cm",      cartonPcs: "20,000", cartons20ft: "~700",  cartons40ft: "~1,400" },
];

export default function PackagingExport() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: CREAM2 }}
      aria-labelledby="packaging-heading"
    >
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="04" label="Packaging & Export" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="packaging-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, ease: EASE, delay: 0.08 }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 3.5vw, 3.2rem)",
                lineHeight:    0.93,
                letterSpacing: "-0.03em",
                color:         INK,
              }}
            >
              EXPORT-READY.<br />
              <span style={{ color: GREEN }}>EVERY CARTON.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="text-base leading-relaxed flex items-center"
              style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}
            >
              Packaging is not an afterthought. Every product ships in
              standardised cartons sized for container optimisation. Bulk,
              individually sleeved, and OEM options accommodate the full
              spectrum of food service procurement requirements.
            </motion.p>
          </div>
        </div>

        {/* Packaging tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {PACKAGING_TIERS.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease: EASE, delay: 0.24 + i * 0.08 }}
                className="flex flex-col p-6"
                style={{ background: CREAM, border: "1px solid rgba(26,71,49,0.15)", borderRadius: "12px" }}
              >
                {/* Badge row */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-lg"
                    style={{ background: "rgba(26,71,49,0.1)", border: "1px solid rgba(26,71,49,0.2)" }}
                  >
                    <Icon size={15} style={{ color: GREEN }} />
                  </div>
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.2em] px-2.5 py-1 rounded"
                    style={{ background: "rgba(233,115,22,0.1)", border: "1px solid rgba(233,115,22,0.25)", color: ORANGE }}
                  >
                    {tier.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily:   "'Outfit', sans-serif",
                    fontWeight:   700,
                    fontSize:     "1.1rem",
                    color:        INK,
                    marginBottom: "0.25rem",
                  }}
                >
                  {tier.title}
                </h3>
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.2em] mb-4"
                  style={{ color: GREEN }}
                >
                  {tier.subtitle}
                </p>

                <p
                  className="text-[12.5px] leading-relaxed mb-5 flex-1"
                  style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}
                >
                  {tier.description}
                </p>

                {/* Spec rows */}
                <div className="border-t pt-4 space-y-2" style={{ borderColor: "rgba(26,71,49,0.1)" }}>
                  {tier.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between">
                      <span
                        className="font-mono text-[11px] uppercase tracking-[0.12em]"
                        style={{ color: "rgba(122,107,84,0.7)" }}
                      >
                        {spec.label}
                      </span>
                      <span
                        className="font-mono text-[11px] font-medium"
                        style={{ color: INK }}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Container loading table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.68, ease: EASE, delay: 0.48 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <Container size={14} style={{ color: GREEN }} />
            <p
              className="font-mono text-[11px] uppercase tracking-[0.28em]"
              style={{ color: MUTED }}
            >
              Container Loading Reference (Indicative)
            </p>
          </div>

          <div
            className="overflow-x-auto rounded-xl"
            style={{ border: "1px solid rgba(26,71,49,0.15)", background: CREAM }}
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(26,71,49,0.1)" }}>
                  {["Product", "Pcs / Carton", "20ft Container", "40ft Container"].map((h) => (
                    <th
                      key={h}
                      className="font-mono text-[11px] uppercase tracking-[0.2em] text-left py-3 px-4"
                      style={{ color: MUTED }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CONTAINER_DATA.map((row, i) => (
                  <tr
                    key={row.product}
                    style={{
                      borderBottom: "1px solid rgba(26,71,49,0.07)",
                      background: i % 2 === 0 ? "transparent" : "rgba(26,71,49,0.03)",
                    }}
                  >
                    <td
                      className="text-[12px] py-3.5 px-4"
                      style={{ color: INK, fontFamily: "'Outfit', sans-serif" }}
                    >
                      {row.product}
                    </td>
                    <td
                      className="font-mono text-[11px] py-3.5 px-4 font-bold"
                      style={{ color: GREEN }}
                    >
                      {row.cartonPcs}
                    </td>
                    <td
                      className="font-mono text-[11px] py-3.5 px-4"
                      style={{ color: MUTED }}
                    >
                      {row.cartons20ft} cartons
                    </td>
                    <td
                      className="font-mono text-[11px] py-3.5 px-4"
                      style={{ color: MUTED }}
                    >
                      {row.cartons40ft} cartons
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="font-mono text-[11px] uppercase tracking-[0.16em] mt-4"
            style={{ color: "rgba(122,107,84,0.55)" }}
          >
            * Quantities are indicative. Exact loading depends on carton dimensions and stacking configuration. Contact for precise container quotations.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.58 }}
          className="mt-14 pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderColor: "rgba(26,71,49,0.15)" }}
        >
          <div>
            <p style={{ fontSize: "1.05rem", color: INK, fontFamily: "'Outfit', sans-serif", fontWeight: 500 }}>
              Need a container-level quotation?
            </p>
            <p
              className="font-mono text-[11px] uppercase tracking-[0.18em] mt-1"
              style={{ color: MUTED }}
            >
              Lead time · Freight terms · Certificate documentation — all in one quote
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-300 flex-shrink-0"
            style={{ background: ORANGE, borderRadius: "8px" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#C4580A")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = ORANGE)}
          >
            Request Container Quote
            <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
