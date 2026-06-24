"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const HERO_STATS = [
  { value: "18+",    label: "Countries Supplied"    },
  { value: "100M+",  label: "Units / Month"         },
  { value: "FSC®",   label: "Certified Sourcing"    },
  { value: "24–48h", label: "Response Commitment"   },
] as const;

export default function ContactHero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden paper pt-[72px]"
      style={{ background: "#F6F1E8" }}
      aria-labelledby="contact-hero-heading"
    >
      <div
        className="h-[2px] w-full"
        style={{ background: "linear-gradient(90deg, transparent 0%, #C89A5B 30%, #8C6239 60%, transparent 100%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">

          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-8"
            >
              <SectionLabel index="01" label="Contact & Procurement" />
            </motion.div>

            <motion.h1
              id="contact-hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.92] mb-8"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.8rem)" }}
            >
              Let's discuss
              <br />
              your{" "}
              <em className="not-italic" style={{ color: "#C89A5B", fontStyle: "italic", fontFamily: "inherit" }}>
                next shipment.
              </em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed max-w-[520px]"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.1rem)" }}
            >
              Share your product requirements, volume, and delivery region.
              Biopapro's export team will respond with a full procurement package
              — catalogue, specifications, certifications, and pricing — within
              24–48 hours.
            </motion.p>
          </div>

          {/* Right — stats */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
          >
            <div className="grid grid-cols-2 gap-px" style={{ background: "#DDD3C5", border: "1px solid #DDD3C5" }}>
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex flex-col px-6 py-5" style={{ background: "#F6F1E8" }}>
                  <span className="font-mono font-bold leading-none mb-1.5" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", color: "#C89A5B" }}>
                    {s.value}
                  </span>
                  <span className="font-sans text-[13px] font-medium text-ink-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="w-8 h-px" style={{ background: "#C89A5B" }} />
          <a
            href="#inquiry-form"
            className="font-sans text-[13px] text-ink-muted hover:text-ink transition-colors duration-200"
          >
            Submit export inquiry below
          </a>
        </motion.div>
      </div>
    </section>
  );
}
