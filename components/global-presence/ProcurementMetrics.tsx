"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";
import { PROCUREMENT_STATS } from "@/lib/global-presence-data";

const EASE = [0.16, 1, 0.3, 1] as const;

function parseStatValue(value: string): number {
  return parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
}

function AnimatedStat({
  stat,
  triggered,
  index,
}: {
  stat: (typeof PROCUREMENT_STATS)[number];
  triggered: boolean;
  index: number;
}) {
  const target = parseStatValue(stat.value);
  const [count, setCount] = useState(0);
  const hasComma = stat.value.includes(",");

  useEffect(() => {
    if (!triggered) return;
    const delay = index * 100;
    const timer = setTimeout(() => {
      const start = Date.now();
      const duration = 1800;
      const raf = requestAnimationFrame(function tick() {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      });
      return () => cancelAnimationFrame(raf);
    }, delay);
    return () => clearTimeout(timer);
  }, [triggered, target, index]);

  const displayValue = hasComma ? count.toLocaleString() : count.toString();

  return (
    <span>
      {displayValue}
      {stat.suffix}
    </span>
  );
}

export default function ProcurementMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      style={{ background: "#F6F1E8" }}
      className="paper"
      aria-labelledby="metrics-heading"
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
            <SectionLabel index="08" label="Procurement Metrics" />
          </motion.div>

          <motion.h2
            id="metrics-heading"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="font-display font-light text-ink leading-[0.95]"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
          >
            The numbers behind
            <br />
            <span style={{ color: "#C89A5B" }}>the supply chain.</span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-border">
          {PROCUREMENT_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.08 }}
              className="flex flex-col items-center justify-center text-center p-6 border-r border-b border-border last:border-r-0"
              style={{ borderColor: "#DDD3C5" }}
            >
              <span
                className="font-mono font-bold mb-2"
                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", color: "#C89A5B", lineHeight: 1 }}
              >
                <AnimatedStat stat={stat} triggered={inView} index={i} />
              </span>
              <span className="font-sans text-[12px] font-semibold text-ink mb-0.5">
                {stat.label}
              </span>
              <span className="font-sans text-[11px] text-ink-muted leading-tight text-center">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE, delay: 0.7 }}
          className="font-sans text-[12px] text-ink-muted mt-5 text-center"
        >
          Established 2019 · Mumbai, India · Exporting since founding
        </motion.p>
      </div>
    </section>
  );
}
