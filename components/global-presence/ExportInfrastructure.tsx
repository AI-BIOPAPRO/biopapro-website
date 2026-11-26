"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Factory, ShieldCheck, Package, FileCheck, Truck, Zap } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

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
    body: "COO, phytosanitary certificates, FSC chain-of-custody documents, ISO and BRCGS certificates, independent lab test reports. Full pack issued per shipment.",
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
      style={{ background: CREAM2 }}
      aria-labelledby="infrastructure-heading"
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
            <SectionLabel index="05" label="Export Infrastructure" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="infrastructure-heading"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.72, ease: EASE, delay: 0.08 }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 3.5vw, 3.2rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.035em",
                color:         INK,
              }}
            >
              CAN THEY HANDLE<br />
              <span style={{ color: ORANGE }}>PROCUREMENT AT SCALE?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans text-base leading-relaxed flex items-center"
              style={{ color: MUTED }}
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
                style={{ background: CREAM, border: "1px solid rgba(26,71,49,0.1)", borderRadius: "16px" }}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded"
                    style={{ background: "rgba(26,71,49,0.08)", border: "1px solid rgba(26,71,49,0.14)" }}
                  >
                    <Icon size={15} style={{ color: GREEN }} />
                  </div>
                  <span
                    className="font-mono text-[11px] uppercase tracking-[0.18em] px-2.5 py-1"
                    style={{ background: "rgba(233,115,22,0.08)", border: "1px solid rgba(233,115,22,0.2)", color: ORANGE, borderRadius: "6px" }}
                  >
                    {cap.stat}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize:   "14px",
                    color:      INK,
                    marginBottom: "10px",
                  }}
                >
                  {cap.title}
                </h3>

                <p className="font-sans text-[12px] leading-relaxed" style={{ color: MUTED }}>
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
