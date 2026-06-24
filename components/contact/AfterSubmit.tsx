"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { AFTER_SUBMIT } from "@/lib/contact-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AfterSubmit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#1D1610" }} className="grain" aria-labelledby="after-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="05" label="What You Receive" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="after-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: "#F6F1E8" }}
            >
              After you submit,
              <br />
              <span style={{ color: "#C89A5B" }}>here's what arrives.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: "rgba(230,210,185,0.70)" }}
            >
              Every inquiry response includes a full procurement package — not a
              generic reply. The information you need to make a sourcing decision,
              delivered in one email.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {AFTER_SUBMIT.map((item, i) => (
            <motion.div
              key={item.item}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE, delay: 0.1 + i * 0.06 }}
              className="p-5"
              style={{ border: "1px solid #3D2E22", background: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C89A5B" }} />
                <h3 className="font-sans font-semibold text-[14px]" style={{ color: "#F6F1E8" }}>
                  {item.item}
                </h3>
              </div>
              <p className="font-sans text-[13px] leading-relaxed" style={{ color: "rgba(230,210,185,0.55)" }}>
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Response commitment */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
          className="mt-6 p-5 grid grid-cols-1 sm:grid-cols-3 gap-5"
          style={{ border: "1px solid rgba(200,154,91,0.2)", background: "rgba(200,154,91,0.04)" }}
        >
          {[
            { label: "Response Time",  value: "24–48 hours",      sub: "Business hours, Mon–Sat" },
            { label: "Languages",      value: "English · German",  sub: "EU inquiries in German on request" },
            { label: "Response To",    value: "Your email",        sub: "Full package in a single reply" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] mb-1" style={{ color: "rgba(200,154,91,0.6)" }}>
                {item.label}
              </span>
              <span className="font-sans font-semibold text-[15px] mb-0.5" style={{ color: "#F6F1E8" }}>{item.value}</span>
              <span className="font-sans text-[13px]" style={{ color: "rgba(230,210,185,0.5)" }}>{item.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
