"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONTACT_INDUSTRIES } from "@/lib/contact-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactIndustries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#F6F1E8" }} className="paper" aria-labelledby="industries-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="06" label="Industries We Supply" />
          </motion.div>
          <motion.h2
            id="industries-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="font-display font-light text-ink leading-[0.95] max-w-2xl"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            We supply eight{" "}
            <span style={{ color: "#C89A5B" }}>industry segments.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONTACT_INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE, delay: 0.08 + i * 0.06 }}
              className="p-6 flex flex-col"
              style={{ background: "#FBF8F2", border: "1px solid #DDD3C5" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200,154,91,0.45)";
                el.style.boxShadow = "0 8px 24px rgba(44,36,27,0.08)";
                el.style.transform = "translateY(-2px)";
                el.style.transition = "all 0.2s ease";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#DDD3C5";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <span className="text-[1.8rem] mb-4">{industry.icon}</span>
              <h3 className="font-sans font-semibold text-ink mb-2" style={{ fontSize: "15px" }}>
                {industry.name}
              </h3>
              <p className="font-sans text-[13px] text-ink-light leading-relaxed mb-4 flex-1">
                {industry.body}
              </p>
              <p className="font-mono text-[11px] text-ink-muted pt-3 border-t" style={{ borderColor: "#EDE5D8" }}>
                {industry.highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
