"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const RESOURCES = [
  {
    number: "01",
    title: "Product Catalog",
    subtitle: "PDF · Updated 2025",
    description: "Full 30+ SKU catalog with dimensions, MOQ, packaging options, and container loading data. Formatted for procurement teams and import buyers.",
    cta: "Request Catalog",
  },
  {
    number: "02",
    title: "Technical Datasheets",
    subtitle: "PDF per SKU",
    description: "Individual dimensional drawings, weight specs, and material composition for each product. Required for customs declarations and food service compliance.",
    cta: "Request Datasheets",
  },
  {
    number: "03",
    title: "Packaging Specifications",
    subtitle: "Logistics ready",
    description: "Export carton dimensions, carton weights, pallet configuration, and container loading charts for every category. Sent as a single PDF bundle.",
    cta: "Request Pack Specs",
  },
  {
    number: "04",
    title: "FSC® Certificate",
    subtitle: "Chain of Custody",
    description: "Current FSC Chain of Custody certificate for all birchwood products. Required for retailers, airlines, and hospitality groups with sustainability mandates.",
    cta: "Request Certificate",
  },
  {
    number: "05",
    title: "ISO & Quality Certificates",
    subtitle: "ISO 9001:2015",
    description: "Quality, environmental, and occupational health & safety certificates (ISO 9001, ISO 14001, ISO 45001) covering manufacturing, QC, and export operations.",
    cta: "Request Certificate",
  },
  {
    number: "06",
    title: "Independent Test Reports",
    subtitle: "SGS · Intertek",
    description: "Heavy metal & phthalate testing (SGS), microbiology and packaging material testing (Intertek). Full bundle for North American and European import documentation.",
    cta: "Request Reports",
  },
];

const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";
const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";

export default function ProcurementResources() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      style={{ background: CREAM2 }}
      aria-labelledby="resources-heading"
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
            <SectionLabel index="06" label="Procurement Resources" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="resources-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 3.2vw, 3rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.03em",
                color:         INK,
              }}
            >
              EVERY DOC.<br />
              <span style={{ color: GREEN }}>READY TO SEND.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="flex flex-col justify-center gap-4"
            >
              <p
                className="text-base leading-relaxed"
                style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}
              >
                All documentation is available on request and sent within 24 hours.
                Certificates, datasheets, and compliance docs are kept current
                and can be issued with each shipment.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: ORANGE }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: GREEN }}>
                  Documents issued within 24 hours
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Resource list */}
        <div className="border-t" style={{ borderColor: "rgba(26,71,49,0.12)" }}>
          {RESOURCES.map((resource, i) => (
            <motion.div
              key={resource.number}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.18 + i * 0.06 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 border-b transition-colors duration-200"
              style={{ borderColor: "rgba(26,71,49,0.1)" }}
            >
              {/* Number */}
              <div className="md:col-span-1 flex items-start pt-0.5">
                <span
                  className="font-mono text-[11px] font-bold"
                  style={{ color: "rgba(26,71,49,0.35)" }}
                >
                  {resource.number}
                </span>
              </div>

              {/* Title + subtitle */}
              <div className="md:col-span-3">
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize:   "0.875rem",
                    color:      INK,
                    marginBottom: "4px",
                  }}
                >
                  {resource.title}
                </h3>
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: MUTED }}
                >
                  {resource.subtitle}
                </span>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p
                  className="text-[12.5px] leading-relaxed"
                  style={{ color: MUTED, fontFamily: "'Outfit', sans-serif" }}
                >
                  {resource.description}
                </p>
              </div>

              {/* CTA */}
              <div className="md:col-span-2 flex items-center justify-start md:justify-end">
                <Link
                  href="/contact"
                  className="group/cta inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-200 whitespace-nowrap"
                  style={{ color: GREEN }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = ORANGE)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = GREEN)}
                >
                  {resource.cta}
                  <ArrowRight size={9} strokeWidth={2.5} className="group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full bundle CTA — green bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, ease: EASE, delay: 0.56 }}
          className="mt-10 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-2xl"
          style={{ background: GREEN }}
        >
          <div>
            <p
              style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1rem", color: CREAM, marginBottom: "6px" }}
            >
              Prefer a complete documentation bundle?
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: "rgba(245,240,230,0.5)" }}>
              Catalog · Certificates · Spec sheets · Compliance docs — single email delivery
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 flex-shrink-0 rounded-xl"
            style={{ background: ORANGE }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#C4580A")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = ORANGE)}
          >
            Request Documentation Pack
            <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
