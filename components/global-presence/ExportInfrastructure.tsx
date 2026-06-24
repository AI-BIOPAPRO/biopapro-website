"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Factory, ShieldCheck, Package, FileCheck, Truck, Zap } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const CAPABILITIES = [
  {
    icon: Factory,
    title: "Production at Scale",
    stat: "100M units / month",
    body: "Dedicated stamping lines running continuous operations in Mumbai. 300+ tons of FSC birchwood processed monthly. Capacity reserved for long-term supply agreements.",
  },
  {
    icon: Package,
    title: "Container-Optimised Packing",
    stat: "20ft & 40ft FCL",
    body: "Every carton is sized and stacked for maximum container utilisation. 800–1,600 cartons per 40ft container depending on product. LCL consolidation available.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Before Shipping",
    stat: "ISO 9001:2015",
    body: "Optical sorting, UV sterilisation, and manual QC inspection at every production run. No container leaves the facility without batch test records.",
  },
  {
    icon: FileCheck,
    title: "Export Documentation",
    stat: "All markets covered",
    body: "COO, phytosanitary certificates, FSC chain-of-custody documents, FDA compliance letters, EU food-contact declarations. Full pack issued per shipment.",
  },
  {
    icon: Truck,
    title: "Mumbai Port Access",
    stat: "Direct FCL loading",
    body: "Direct container loading from manufacturing facility to Nhava Sheva (JNPT) and Mumbai ports. 10–28 day transit times to major destination ports worldwide.",
  },
  {
    icon: Zap,
    title: "Lead Times",
    stat: "3–5 week standard",
    body: "Standard production-to-shipment lead time 3–5 weeks from confirmed PO. Express options available for existing customers. Rolling supply schedules accommodated.",
  },
] as const;

export default function ExportInfrastructure() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      className="relative grain"
      style={{ background: "#1D1610" }}
      aria-labelledby="infrastructure-heading"
    >
      <div
        className="h-[1px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #3D2E22 40%, #5C3D1E 60%, transparent 100%)" }}
      />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-20">

        {/* Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="05" label="Export Infrastructure" inverted />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="infrastructure-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, ease: EASE, delay: 0.08 }}
              className="font-display font-light leading-[0.93]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#F6F1E8" }}
            >
              Can they handle
              <br />
              <span style={{ color: "#C89A5B" }}>procurement at scale?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-base leading-relaxed flex items-center"
              style={{ color: "rgba(246,241,232,0.68)" }}
            >
              Yes. Biopapro operates dedicated production lines, certified
              quality systems, and an export-ready logistics infrastructure
              built for volume buyers who need consistency, not one-off orders.
            </motion.p>
          </div>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.62, ease: EASE, delay: 0.22 + i * 0.07 }}
                className="flex flex-col p-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid #3D2E22" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-9 h-9 flex items-center justify-center"
                    style={{ background: "rgba(200,154,91,0.1)", border: "1px solid rgba(200,154,91,0.28)" }}
                  >
                    <Icon size={15} style={{ color: "#C89A5B" }} />
                  </div>
                  <span
                    className="font-mono text-[7px] uppercase tracking-[0.18em] px-2.5 py-1"
                    style={{ background: "rgba(200,154,91,0.08)", border: "1px solid rgba(200,154,91,0.2)", color: "#C89A5B" }}
                  >
                    {cap.stat}
                  </span>
                </div>

                <h3 className="font-sans font-semibold text-[13px] mb-3 leading-snug" style={{ color: "#F6F1E8" }}>
                  {cap.title}
                </h3>

                <p className="font-sans text-[12px] font-light leading-relaxed" style={{ color: "rgba(246,241,232,0.58)" }}>
                  {cap.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
