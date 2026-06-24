"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { TRUST_SIGNALS } from "@/lib/global-presence-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function BuyerTrust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    // Warm light — trust signals feel more authentic on cream than dark
    <section
      className="paper"
      style={{ background: "#F6F1E8" }}
      aria-labelledby="trust-heading"
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
            <SectionLabel index="07" label="Why Global Buyers Choose Biopapro" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="trust-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Certified.
              <br />
              Consistent.
              <br />
              <span style={{ color: "#C89A5B" }}>Export-ready.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light text-base leading-relaxed flex items-center"
            >
              Global buyers require more than a product — they require a supplier
              who delivers on time, with the documentation their compliance teams
              need. Six certifications. Two offices. One manufacturing standard.
            </motion.p>
          </div>
        </div>

        {/* Trust signals — warm cards on cream */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_SIGNALS.map((signal, i) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.06 }}
              className="flex flex-col p-5 bg-surface border border-border"
              style={{ transition: "border-color 0.28s, box-shadow 0.3s" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200,154,91,0.45)";
                el.style.boxShadow = "0 6px 24px rgba(44,36,27,0.09)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#DDD3C5";
                el.style.boxShadow = "none";
              }}
            >
              {/* Check + tag */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-7 h-7 flex items-center justify-center"
                  style={{ background: "rgba(74,122,61,0.1)", border: "1px solid rgba(74,122,61,0.25)" }}
                >
                  <Check size={12} style={{ color: "#4A7A3D" }} strokeWidth={2.5} />
                </div>
                <span
                  className="font-mono text-[7px] uppercase tracking-[0.16em] px-2 py-0.5"
                  style={{ background: "rgba(200,154,91,0.1)", border: "1px solid rgba(200,154,91,0.25)", color: "#8C6239" }}
                >
                  {signal.tag}
                </span>
              </div>

              <h3 className="font-mono text-[10.5px] font-bold uppercase tracking-[0.1em] text-ink mb-2">
                {signal.label}
              </h3>

              <p className="font-sans text-[12px] font-light text-ink-light leading-relaxed">
                {signal.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Editorial quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.62, ease: EASE, delay: 0.7 }}
          className="mt-12 pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderColor: "#DDD3C5" }}
        >
          <p
            className="font-display font-light italic text-ink-light"
            style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.4rem)", maxWidth: 580 }}
          >
            "One manufacturing standard. Six certifications. Eighteen markets.
            Every buyer gets the same product, the same documentation, the same quality."
          </p>
          <p className="font-mono text-[7.5px] uppercase tracking-[0.2em] text-ink-muted flex-shrink-0">
            Biopapro Export Team
          </p>
        </motion.div>
      </div>
    </section>
  );
}
