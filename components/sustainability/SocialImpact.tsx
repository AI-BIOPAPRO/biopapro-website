"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { SOCIAL_FACTS } from "@/lib/sustainability-data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SocialImpact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#F6F1E8" }} className="paper" aria-labelledby="social-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-7"
            >
              <SectionLabel index="05" label="Social Impact" />
            </motion.div>

            <motion.h2
              id="social-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
            >
              Sustainability starts
              <br />
              <span style={{ color: "#4A7A3D" }}>with people.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed mb-10"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)" }}
            >
              Environmental sustainability and social responsibility are not
              separate agendas at Biopapro. A workforce that is 70%+ women,
              independently audited for social compliance, and built on long-term
              employment — this is what the supply chain looks like behind the product.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIAL_FACTS.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.22 + i * 0.07 }}
                  className="p-5"
                  style={{ background: "#FBF8F2", border: "1px solid #DDD3C5" }}
                >
                  <span className="block font-mono font-bold mb-1.5" style={{ fontSize: "clamp(1.25rem, 2vw, 1.6rem)", color: "#4A7A3D" }}>
                    {fact.stat}
                  </span>
                  <span className="block font-sans font-semibold text-ink mb-2" style={{ fontSize: "13px" }}>
                    {fact.label}
                  </span>
                  <p className="font-sans text-[13px] text-ink-muted leading-relaxed">
                    {fact.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — workforce image */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4", background: "#1D1610" }}
            >
              <video
                autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.9 }}
              >
                <source src="/videos/Manufacturing page women working.mp4" type="video/mp4" />
              </video>
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: "linear-gradient(to top, rgba(29,22,16,0.85) 0%, transparent 100%)" }}
              >
                <p className="font-display font-light text-[1.5rem] leading-tight" style={{ color: "#F6F1E8" }}>
                  "We build careers,
                  <br />
                  not just products."
                </p>
                <p className="font-sans text-[13px] mt-2" style={{ color: "rgba(230,210,185,0.6)" }}>
                  Mumbai facility, established 2019
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
