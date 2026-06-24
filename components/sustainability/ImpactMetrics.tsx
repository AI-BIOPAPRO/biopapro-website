"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { IMPACT_METRICS } from "@/lib/sustainability-data";

const EASE = [0.16, 1, 0.3, 1] as const;

function AnimatedNumber({ target, suffix, triggered }: { target: number; suffix: string; triggered: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target]);

  return <span>{display.toLocaleString()}{suffix}</span>;
}

export default function ImpactMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section className="relative overflow-hidden paper" style={{ background: "#F6F1E8" }} aria-labelledby="impact-heading">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20">

        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-7"
          >
            <SectionLabel index="02" label="Environmental Impact" />
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <motion.h2
              id="impact-heading"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
              className="font-display font-light text-ink leading-[0.95]"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
            >
              The numbers
              <br />
              <span style={{ color: "#4A7A3D" }}>that matter.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
              className="font-sans font-light text-ink-light leading-relaxed flex items-center"
              style={{ fontSize: "clamp(1rem, 1.1vw, 1.05rem)" }}
            >
              Biopapro's environmental impact is not projected — it is the direct
              result of 100M+ units shipped monthly that replace an equivalent volume
              of single-use plastic cutlery in global food-service supply chains.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "#DDD3C5", border: "1px solid #DDD3C5" }}>
          {IMPACT_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: EASE, delay: 0.12 + i * 0.08 }}
              className="flex flex-col px-7 py-10"
              style={{ background: "#F6F1E8" }}
            >
              <span className="font-mono font-bold leading-none mb-3" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#4A7A3D" }}>
                <AnimatedNumber target={m.value} suffix={m.suffix} triggered={inView} />
              </span>
              <span className="font-sans font-semibold text-ink mb-1.5" style={{ fontSize: "15px" }}>
                {m.label}
              </span>
              <span className="font-sans text-[13px] text-ink-muted leading-snug">
                {m.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
