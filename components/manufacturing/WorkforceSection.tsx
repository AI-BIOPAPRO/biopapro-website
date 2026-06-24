"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const WORKFORCE_POINTS = [
  {
    title: "Skilled Operators",
    body: "Every production line is staffed by operators trained across material inspection, finishing, QC, packaging, and export preparation. Deep process knowledge at every stage.",
  },
  {
    title: "70%+ Women Workforce",
    body: "More than 70% of Biopapro's 380+ employees are women. This is not a statistic — it is a structural commitment to workforce inclusion that has been consistent since founding.",
  },
  {
    title: "Long-Term Stability",
    body: "Consistent workforce means consistent quality. Operators who have worked through hundreds of production runs carry the process knowledge that prevents variation at scale.",
  },
  {
    title: "BSCI Audited",
    body: "Independent amfori BSCI social compliance audit verified. Labour rights, fair wages, workplace safety, and working hours are audited — not self-reported.",
  },
] as const;

export default function WorkforceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section style={{ background: "#FBF8F2" }} className="paper" aria-labelledby="workforce-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — image */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/5", background: "#1D1610" }}
            >
              <video
                autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: 0.9 }}
              >
                <source src="/videos/Manufacturing page women working.mp4" type="video/mp4" />
              </video>
              {/* Workforce stat overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-5"
                style={{ background: "linear-gradient(to top, rgba(29,22,16,0.88) 0%, transparent 100%)" }}
              >
                <p className="font-mono font-bold text-[2rem] leading-none" style={{ color: "#C89A5B" }}>70%+</p>
                <p className="font-sans text-[14px] mt-1" style={{ color: "rgba(246,241,232,0.8)" }}>Women in workforce</p>
              </div>
            </div>
          </motion.div>

          {/* Right — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE }}
              className="mb-7"
            >
              <SectionLabel index="05" label="Our Workforce" />
            </motion.div>

            <motion.h2
              id="workforce-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2rem, 3.2vw, 3rem)" }}
            >
              The people behind
              <br />
              <span style={{ color: "#C89A5B" }}>every shipment.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed mb-10"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)" }}
            >
              380+ employees work across material inspection, manufacturing, quality
              control, and export operations. The consistency of Biopapro's output
              is inseparable from the people who produce it — many of whom have been
              with the company since its founding in 2019.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WORKFORCE_POINTS.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.22 + i * 0.07 }}
                  className="p-5"
                  style={{ background: "#F6F1E8", border: "1px solid #DDD3C5" }}
                >
                  <h3 className="font-sans font-semibold text-ink mb-2" style={{ fontSize: "15px" }}>
                    {point.title}
                  </h3>
                  <p className="font-sans text-[14px] text-ink-light leading-relaxed">
                    {point.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
