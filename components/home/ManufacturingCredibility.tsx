"use client";

/**
 * S6 — Manufacturing Credibility
 *
 * Six-step production journey from raw birch logs to export container.
 * Each step is a full-width staggered row: index + title left, detail right.
 * On scroll the row reveals — title slides in from left, detail from right.
 *
 * Dark section (#1D1610) — one of the 30% dark moments on the page.
 * Communicates: "This is serious manufacturing. Not a craft workshop."
 *
 * Steps:
 *   01 — Raw Material Sourcing   (FSC forest, birch logs)
 *   02 — Log Conversion          (veneer slicing, moisture control)
 *   03 — Blanking & Forming      (die-cut stamping, multi-cavity)
 *   04 — Polishing & Finishing   (rotating drum, 4-stage grit)
 *   05 — Quality Control         (optical sorting, weight check)
 *   06 — Packaging & Export      (sterilisation, 18+ country dispatch)
 */

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

// Accurate to Biopapro's actual operation: FSC-certified semi-finished birchwood
// is sourced from approved suppliers; Biopapro performs incoming inspection →
// finishing → QC → packaging → export. No forestry, no raw-log conversion.
// Kept in step with lib/manufacturing-data.ts (PRODUCTION_STEPS).
const STEPS = [
  {
    index: "01",
    title: "Certified Birchwood Supply",
    subtitle: "FSC Chain of Custody",
    body: "FSC-certified semi-finished birchwood is sourced from approved suppliers in Russia and China. Every incoming batch arrives with full FSC chain-of-custody documentation, and supplier qualification is maintained under ISO 9001 procurement controls.",
    stat: { value: "100%", label: "FSC Certified Supply" },
    tags: ["FSC® CoC", "Approved Suppliers", "ISO 9001 Procurement"],
  },
  {
    index: "02",
    title: "Incoming Material Inspection",
    subtitle: "Quality Gate at Intake",
    body: "Every batch is inspected on arrival at the Mumbai facility — dimensional specification, surface quality grading, and moisture content. Sub-specification material is rejected at intake, before it enters the production line.",
    stat: { value: "100%", label: "Batches Inspected" },
    tags: ["Dimensional Check", "Surface Grading", "Moisture Control"],
  },
  {
    index: "03",
    title: "Precision Finishing",
    subtitle: "High-Speed Manufacturing Lines",
    body: "Stamping and finishing lines process semi-finished birchwood into final product form, with dimensional tolerances held across production runs. Output: 100M+ units per month from a single facility in Mumbai.",
    stat: { value: "100M+/mo", label: "Units Produced" },
    tags: ["Stamping & Finishing", "Tolerance Control", "Single Facility"],
  },
  {
    index: "04",
    title: "Quality Control & Food Safety",
    subtitle: "Optical Sort + AQL 2.5",
    body: "Automated optical sorting rejects dimensional defects and surface flaws; trained QC operators then run manual AQL 2.5 inspection. All food-contact units pass through a UV sterilisation tunnel — aligned with FDA CFR 21 and EU 10/2011 requirements.",
    stat: { value: "AQL 2.5", label: "Inspection Standard" },
    tags: ["Optical Sorting", "UV Sterilisation", "Food-Contact Safe"],
  },
  {
    index: "05",
    title: "Packaging & Export Preparation",
    subtitle: "Container-Optimised Cartons",
    body: "Units are packed into OPP polybags (100 or 500 pcs) and standardised export cartons sized for container fill. Export documentation is prepared in parallel: FSC certificate, phytosanitary certificate, certificate of origin, commercial invoice, packing list.",
    stat: { value: "15+", label: "Docs / Shipment" },
    tags: ["OPP Bagging", "Export Cartons", "Full Documentation"],
  },
  {
    index: "06",
    title: "Global Distribution",
    subtitle: "JNPT Mumbai · FCL & LCL",
    body: "Palletised cartons are loaded into 20ft or 40ft FCL containers at JNPT — India's largest container port. LCL consolidation is available for smaller volumes. 18+ active export markets across 6 continents.",
    stat: { value: "21–28d", label: "Ocean Transit" },
    tags: ["JNPT Mumbai", "FCL / LCL", "18+ Markets"],
  },
] as const;

/* ── Single step row ── */
function StepRow({ step, index }: { step: (typeof STEPS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 border-b border-dark-border last:border-b-0"
    >
      {/* ── Index + title side ── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -28 : 28 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE, delay: 0.05 }}
        className={`lg:col-span-5 flex flex-col justify-between px-6 md:px-10 lg:px-12 py-10 lg:py-14 gap-6 ${
          isEven ? "" : "lg:order-last"
        }`}
      >
        <div>
          {/* Step number */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="font-mono text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(200,154,91,0.78)" }}
            >
              STEP {step.index}
            </span>
            <div className="flex-1 h-px" style={{ background: "rgba(200,154,91,0.15)" }} />
          </div>

          {/* Title */}
          <h3
            className="font-display font-light leading-[1.05] mb-3"
            style={{
              fontSize: "clamp(1.7rem, 2.8vw, 2.5rem)",
              color: "#F6F1E8",
            }}
          >
            {step.title}
          </h3>
          <p
            className="font-mono text-[9.5px] tracking-[0.18em] uppercase"
            style={{ color: "rgba(200,154,91,0.65)" }}
          >
            {step.subtitle}
          </p>
        </div>

        {/* Stat callout */}
        <div
          className="inline-flex flex-col gap-1 px-5 py-4 border self-start"
          style={{ borderColor: "rgba(200,154,91,0.22)", background: "rgba(200,154,91,0.05)" }}
        >
          <span
            className="font-display font-light"
            style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", color: "#C89A5B", lineHeight: 1 }}
          >
            {step.stat.value}
          </span>
          <span
            className="font-mono text-[8.5px] uppercase tracking-[0.2em]"
            style={{ color: "rgba(200,154,91,0.55)" }}
          >
            {step.stat.label}
          </span>
        </div>
      </motion.div>

      {/* ── Divider ── */}
      <div
        className={`hidden lg:flex lg:col-span-1 items-stretch justify-center py-0 ${
          isEven ? "" : "lg:order-first"
        }`}
      >
        <div className="w-px" style={{ background: "rgba(200,154,91,0.12)" }} />
      </div>

      {/* ── Body + tags side ── */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 28 : -28 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.75, ease: EASE, delay: 0.15 }}
        className={`lg:col-span-6 px-6 md:px-10 lg:px-12 py-10 lg:py-14 flex flex-col justify-center gap-6 ${
          isEven ? "" : "lg:order-first"
        }`}
      >
        {/* Body text */}
        <p
          className="font-sans font-light text-base leading-relaxed"
          style={{ color: "rgba(246,241,232,0.72)", maxWidth: "520px" }}
        >
          {step.body}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[8px] uppercase tracking-[0.18em] px-3 py-1.5"
              style={{
                border: "1px solid rgba(200,154,91,0.18)",
                color: "rgba(200,154,91,0.85)",
                background: "rgba(200,154,91,0.04)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Main section ── */
export default function ManufacturingCredibility() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      className="relative grain"
      style={{ background: "#1D1610" }}
      aria-labelledby="manufacturing-heading"
    >
      {/* ── Top border accent ── */}
      <div
        className="h-[3px] w-full"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #C89A5B 40%, #8C6239 70%, transparent 100%)",
        }}
      />

      {/* ── Section header ── */}
      <div
        ref={headerRef}
        className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 pt-20 pb-16 lg:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8"
        >
          <SectionLabel
            index="06"
            label="Manufacturing"
            inverted
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          <motion.h2
            id="manufacturing-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE, delay: 0.1 }}
            className="font-display font-light leading-[0.95]"
            style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)", color: "#F6F1E8" }}
          >
            From raw log
            <br />
            to export container.
            <br />
            <span style={{ color: "#C89A5B" }}>Six steps. Zero shortcuts.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, ease: EASE, delay: 0.22 }}
            className="flex flex-col justify-end gap-6"
          >
            <p
              className="font-sans font-light text-base leading-relaxed"
              style={{ color: "rgba(246,241,232,0.88)" }}
            >
              Biopapro operates 18 production lines across{" "}
              <span style={{ color: "#E5C99A" }}>3 manufacturing halls</span>. Every stage
              of the production process is performed in-house — no outsourced
              steps, no quality gaps. The result is a consistent product that
              meets the food-contact requirements of every market we export to.
            </p>

            {/* Factory stats row */}
            <div
              className="grid grid-cols-3 border-t"
              style={{ borderColor: "rgba(200,154,91,0.18)" }}
            >
              {[
                { value: "18",      label: "Production Lines" },
                { value: "3",       label: "Manufacturing Halls" },
                { value: "100M+",   label: "Units / Year" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className={`pt-5 pr-4 ${i < 2 ? "border-r" : ""}`}
                  style={{ borderColor: "rgba(200,154,91,0.12)" }}
                >
                  <p
                    className="font-display font-light"
                    style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", color: "#C89A5B", lineHeight: 1 }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="font-mono text-[8px] uppercase tracking-[0.16em] mt-1.5"
                    style={{ color: "rgba(200,154,91,0.78)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Step rows ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(200,154,91,0.12)" }}
      >
        {STEPS.map((step, i) => (
          <StepRow key={step.index} step={step} index={i} />
        ))}
      </div>

      {/* ── CTA footer ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(200,154,91,0.12)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-20 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p
              className="font-display font-light text-2xl"
              style={{ color: "#F6F1E8" }}
            >
              Ready to see the full operation?
            </p>
            <p
              className="font-mono text-[9px] uppercase tracking-[0.18em] mt-1"
              style={{ color: "rgba(200,154,91,0.78)" }}
            >
              Factory audit available for qualified buyers
            </p>
          </div>
          <Link
            href="/manufacturing"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 flex-shrink-0"
            style={{
              background: "#C89A5B",
              color: "#1D1610",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#8C6239"; (e.currentTarget as HTMLElement).style.color = "#F6F1E8"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#C89A5B"; (e.currentTarget as HTMLElement).style.color = "#1D1610"; }}
          >
            Full Manufacturing Story
            <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

    </section>
  );
}
