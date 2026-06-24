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
    description: "Quality management system certificate covering manufacturing, QC, and export operations. Includes BSCI social audit summary and workplace compliance report.",
    cta: "Request Certificate",
  },
  {
    number: "06",
    title: "Compliance Documents",
    subtitle: "FDA · EU · BPI",
    description: "FDA CFR 21, EU 10/2011 food-contact compliance, BPI compostability test reports. Full bundle for North American and European import documentation.",
    cta: "Request Documents",
  },
];

export default function ProcurementResources() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      className="paper"
      style={{ background: "#F6F1E8" }}
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
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
            >
              Everything your{" "}
              <span style={{ color: "#C89A5B" }}>procurement
              <br />team</span> needs.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="flex flex-col justify-center gap-4"
            >
              <p className="font-sans font-light text-ink-light text-base leading-relaxed">
                All documentation is available on request and sent within 24 hours.
                Certificates, datasheets, and compliance docs are kept current
                and can be issued with each shipment.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4A7A3D" }} />
                <span className="font-mono text-[8.5px] uppercase tracking-[0.22em]" style={{ color: "#4A7A3D" }}>
                  Documents issued within 24 hours
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Resource list — horizontal divider layout */}
        <div
          className="border-t"
          style={{ borderColor: "#DDD3C5" }}
        >
          {RESOURCES.map((resource, i) => (
            <motion.div
              key={resource.number}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.18 + i * 0.06 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 border-b transition-colors duration-200"
              style={{ borderColor: "#DDD3C5" }}
            >
              {/* Number */}
              <div className="md:col-span-1 flex items-start pt-0.5">
                <span
                  className="font-mono text-[11px] font-bold"
                  style={{ color: "#C89A5B", opacity: 0.7 }}
                >
                  {resource.number}
                </span>
              </div>

              {/* Title + subtitle */}
              <div className="md:col-span-3">
                <h3 className="font-sans font-semibold text-ink text-[13.5px] leading-snug mb-1">
                  {resource.title}
                </h3>
                <span
                  className="font-mono text-[7.5px] uppercase tracking-[0.2em]"
                  style={{ color: "#6B5D50" }}
                >
                  {resource.subtitle}
                </span>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="font-sans text-[12.5px] font-light text-ink-light leading-relaxed">
                  {resource.description}
                </p>
              </div>

              {/* CTA */}
              <div className="md:col-span-2 flex items-center justify-start md:justify-end">
                <Link
                  href="/contact"
                  className="group/cta inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] transition-all duration-200 whitespace-nowrap"
                  style={{ color: "#4A7A3D" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#2D5228")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#4A7A3D")}
                >
                  {resource.cta}
                  <ArrowRight size={9} strokeWidth={2.5} className="group-hover/cta:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full bundle CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, ease: EASE, delay: 0.56 }}
          className="mt-10 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border"
          style={{ background: "#FBF8F2", borderColor: "#DDD3C5" }}
        >
          <div>
            <p className="font-sans font-semibold text-ink text-sm mb-1">
              Prefer a complete documentation bundle?
            </p>
            <p className="font-mono text-[7.5px] text-ink-muted uppercase tracking-[0.16em]">
              Catalog · Certificates · Spec sheets · Compliance docs — delivered in a single email
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 flex-shrink-0"
            style={{ background: "#4A7A3D" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2D5228")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7A3D")}
          >
            Request Full Documentation Pack
            <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
