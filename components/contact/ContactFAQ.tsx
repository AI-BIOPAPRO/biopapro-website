"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ChevronDown } from "lucide-react";
import SectionLabel from "@/components/shared/SectionLabel";
import { FAQS } from "@/lib/contact-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: "#EFE6D7" }} aria-labelledby="faq-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="07" label="Procurement FAQ" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              Common questions
              <br />
              <span style={{ color: "#C89A5B" }}>from buyers.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)" }}
            >
              Answers to the most frequent questions from importers, distributors,
              and procurement managers sourcing from Biopapro for the first time.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.05 }}
              style={{ border: "1px solid #DDD3C5", background: "#FBF8F2" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                aria-expanded={open === i}
              >
                <span className="font-sans font-semibold text-ink leading-snug" style={{ fontSize: "14px" }}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={17}
                  className="flex-shrink-0 mt-0.5 text-ink-muted transition-transform duration-25"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p
                  className="px-6 pb-5 font-sans text-[14px] leading-relaxed text-ink-light border-t"
                  style={{ borderColor: "#EDE5D8", paddingTop: "1rem" }}
                >
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
