"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const MARKET_COMPLIANCE = [
  {
    region: "European Union",
    markets: ["Germany", "Netherlands", "Spain", "Poland", "Greece", "Romania", "Ireland"],
    required: ["FSC®", "EU 10/2011", "BSCI"],
    supported: ["ISO 9001", "BPI"],
    note: "EU 10/2011 is mandatory for any food-contact product sold in EU member states. BSCI is required by most major EU retailers and distributors.",
  },
  {
    region: "United States & Canada",
    markets: ["United States", "Canada"],
    required: ["FDA CFR 21", "FSC®"],
    supported: ["ISO 9001", "BPI", "BSCI"],
    note: "FDA CFR 21 compliance is mandatory for food-contact cutlery entering the US market. BPI certification supports buyers targeting zero-waste or compostable product claims.",
  },
  {
    region: "Middle East & Gulf",
    markets: ["UAE", "Qatar", "Bahrain"],
    required: ["FSC®", "ISO 9001"],
    supported: ["EU 10/2011", "FDA CFR 21"],
    note: "Gulf markets require FSC® and quality management documentation. EU and FDA declarations are accepted as evidence of food-safety compliance.",
  },
  {
    region: "Asia-Pacific",
    markets: ["Australia", "Maldives"],
    required: ["FSC®", "ISO 9001"],
    supported: ["BPI", "FDA CFR 21"],
    note: "Australia's composting infrastructure makes BPI certification particularly valuable for hospitality and airline buyers sourcing for the AU market.",
  },
] as const;

export default function ComplianceByMarket() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#EFE6D7" }} aria-labelledby="compliance-market-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="03" label="Compliance by Market" />
          </motion.div>
          <motion.h2
            id="compliance-market-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="font-display font-light text-ink leading-[0.95] max-w-2xl"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
          >
            What your market requires —
            <br />
            <span style={{ color: "#C89A5B" }}>we already hold it.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MARKET_COMPLIANCE.map((market, i) => (
            <motion.div
              key={market.region}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.12 + i * 0.08 }}
              className="p-6"
              style={{ background: "#FBF8F2", border: "1px solid #DDD3C5" }}
            >
              {/* Region header */}
              <h3 className="font-sans font-semibold text-[16px] text-ink mb-3">
                {market.region}
              </h3>

              {/* Country tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {market.markets.map((m) => (
                  <span
                    key={m}
                    className="font-sans text-[12px] px-2.5 py-1 text-ink-muted"
                    style={{ border: "1px solid #DDD3C5" }}
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* Required certs */}
              <div className="mb-4">
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-2">
                  Required for import
                </p>
                <div className="flex flex-wrap gap-2">
                  {market.required.map((c) => (
                    <span
                      key={c}
                      className="font-sans text-[13px] font-semibold px-3 py-1.5"
                      style={{ background: "rgba(74,122,61,0.1)", border: "1px solid rgba(74,122,61,0.3)", color: "#4A7A3D" }}
                    >
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Supported certs */}
              <div className="mb-5">
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-ink-muted mb-2">
                  Also available
                </p>
                <div className="flex flex-wrap gap-2">
                  {market.supported.map((c) => (
                    <span
                      key={c}
                      className="font-sans text-[13px] px-3 py-1.5"
                      style={{ border: "1px solid #DDD3C5", color: "#6B5D50" }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note */}
              <p className="font-sans text-[14px] leading-relaxed text-ink-muted pt-4 border-t" style={{ borderColor: "#EDE5D8" }}>
                {market.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
