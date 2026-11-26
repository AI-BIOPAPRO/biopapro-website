"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { AFTER_SUBMIT } from "@/lib/contact-data";

const EASE = [0.16, 1, 0.3, 1] as const;

const CREAM  = "#F5F0E6";
const CREAM2 = "#EDE5D4";
const GREEN  = "#1A4731";
const ORANGE = "#E97316";
const INK    = "#1A1208";
const MUTED  = "#7A6B54";

export default function AfterSubmit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: CREAM2 }} aria-labelledby="after-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="06" label="What You Receive" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="after-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2rem, 3.5vw, 3.2rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.035em",
                color:         INK,
              }}
            >
              AFTER YOU SUBMIT,<br />
              <span style={{ color: ORANGE }}>HERE&apos;S WHAT ARRIVES.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)", color: MUTED }}
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
              style={{ border: "1px solid rgba(26,71,49,0.1)", background: CREAM, borderRadius: "14px" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ORANGE }} />
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize:   "14px",
                    color:      INK,
                  }}
                >
                  {item.item}
                </h3>
              </div>
              <p className="font-sans text-[13px] leading-relaxed" style={{ color: MUTED }}>
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
          style={{ border: "1px solid rgba(26,71,49,0.12)", background: GREEN, borderRadius: "16px" }}
        >
          {[
            { label: "Response Time",  value: "24–48 hours",      sub: "Business hours, Mon–Sat" },
            { label: "Languages",      value: "English · German",  sub: "EU inquiries in German on request" },
            { label: "Response To",    value: "Your email",        sub: "Full package in a single reply" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] mb-1" style={{ color: "rgba(245,240,230,0.5)" }}>
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize:   "15px",
                  color:      CREAM,
                  marginBottom: "2px",
                }}
              >
                {item.value}
              </span>
              <span className="font-sans text-[13px]" style={{ color: "rgba(245,240,230,0.5)" }}>{item.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
