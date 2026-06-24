"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { FileText, Package, Ship } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { DOCUMENTATION_ITEMS } from "@/lib/certifications-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const DOC_GROUPS = [
  {
    label: "Every Shipment",
    icon: Ship,
    color: "#C89A5B",
    items: DOCUMENTATION_ITEMS.filter((d) => d.available === "Every shipment"),
  },
  {
    label: "Always Included",
    icon: Package,
    color: "#4A7A3D",
    items: DOCUMENTATION_ITEMS.filter((d) => d.available === "Always included"),
  },
  {
    label: "On Request",
    icon: FileText,
    color: "#6B5D50",
    items: DOCUMENTATION_ITEMS.filter((d) => d.available === "On request"),
  },
];

export default function DocumentationPackage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#1D1610" }} className="grain" aria-labelledby="docs-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="04" label="Documentation Package" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="docs-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light leading-[0.95]"
              style={{ fontSize: "clamp(1.8rem, 3.2vw, 3rem)", color: "#F6F1E8" }}
            >
              Every shipment
              <br />
              <span style={{ color: "#C89A5B" }}>arrives documented.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: "rgba(230,210,185,0.70)" }}
            >
              Customs clearance, compliance audits, and ESG reporting — all covered.
              Certificate copies and test reports are available on request for your
              procurement or compliance team.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DOC_GROUPS.map((group, gi) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 + gi * 0.1 }}
                className="p-6"
                style={{ border: "1px solid #3D2E22", background: "rgba(255,255,255,0.02)" }}
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b" style={{ borderColor: "#3D2E22" }}>
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                    style={{ background: `${group.color}18`, border: `1px solid ${group.color}33` }}
                  >
                    <Icon size={16} style={{ color: group.color }} />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[14px]" style={{ color: "#F6F1E8" }}>
                      {group.label}
                    </p>
                    <p className="font-sans text-[12px]" style={{ color: "rgba(230,210,185,0.45)" }}>
                      {group.items.length} document{group.items.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* Doc list */}
                <div className="flex flex-col gap-3">
                  {group.items.map((doc) => (
                    <div key={doc.label} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px]"
                        style={{ background: group.color }}
                      />
                      <span
                        className="font-sans text-[13px] leading-snug"
                        style={{ color: "rgba(230,210,185,0.70)" }}
                      >
                        {doc.label}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.45 }}
          className="mt-6 p-5 flex items-start gap-4"
          style={{ border: "1px solid rgba(200,154,91,0.2)", background: "rgba(200,154,91,0.04)" }}
        >
          <span className="text-xl flex-shrink-0 mt-0.5">📋</span>
          <p className="font-sans text-[14px] leading-relaxed" style={{ color: "rgba(230,210,185,0.70)" }}>
            <strong style={{ color: "rgba(230,210,185,0.90)", fontWeight: 600 }}>Pre-shipment documentation package</strong>{" "}
            — copies of all certificates, test reports, and regulatory declarations are provided to your procurement team before goods depart Mumbai. Standard turnaround is 2–3 business days from order confirmation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
