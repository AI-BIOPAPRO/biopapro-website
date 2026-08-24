"use client";

/**
 * S2 — Documentary Strip Entry
 *
 * The narrative threshold: the page transitions from bright, welcoming,
 * and informational into the cinematic documentary experience.
 *
 * Mechanism:
 *   - Background interpolates from #F8FAF5 (bg) → #1A2E1A (dark) as
 *     the section scrolls through the viewport (Framer Motion useScroll).
 *   - Text and journey nodes appear once the dark shift begins.
 *   - A progress indicator at the bottom previews Act 01 of the strip.
 *
 * This section takes ~40vh. It is not pinned — it scrolls normally into
 * the documentary strip below.
 */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Fragment } from "react";

const ACTS = [
  { n: "01", label: "Forest",               sub: "Siberian Birch Source"        },
  { n: "02", label: "Material Selection",   sub: "Grade & Density"              },
  { n: "03", label: "Manufacturing",        sub: "18 Production Lines"          },
  { n: "04", label: "Product Engineering",  sub: "Precision Finish"             },
  { n: "05", label: "Global Distribution",  sub: "18+ Export Countries"         },
] as const;

const E = [0.16, 1, 0.3, 1] as const;

export default function StripEntry() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven background transition
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  // Text fades in as background darkens
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const textY       = useTransform(scrollYProgress, [0.3, 0.65], [24, 0]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-32 lg:py-40">

      {/* Light base — always visible */}
      <div className="absolute inset-0 bg-bg" aria-hidden="true" />

      {/* Dark overlay — animates in on scroll */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "#1A2E1A", opacity: bgOpacity }}
        aria-hidden="true"
      />

      {/* Subtle grain on dark surface */}
      <motion.div
        className="absolute inset-0 grain pointer-events-none"
        style={{ opacity: bgOpacity }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Act nodes — the five acts of the documentary */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="flex items-start mb-14 md:mb-18"
        >
          {ACTS.map((act, i) => (
            <Fragment key={act.n}>
              <div className="flex flex-col gap-1.5 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-light flex-shrink-0" />
                  <span className="font-mono text-[7px] text-green-light/55 tracking-[0.28em] uppercase">
                    {act.n}
                  </span>
                </div>
                <span className="font-mono text-[9px] text-dark-text/60 uppercase tracking-[0.12em] leading-snug hidden sm:block whitespace-nowrap">
                  {act.label}
                </span>
                <span className="font-mono text-[7.5px] text-dark-muted uppercase tracking-[0.1em] hidden md:block whitespace-nowrap">
                  {act.sub}
                </span>
              </div>

              {i < ACTS.length - 1 && (
                <div className="flex items-start pt-[3px] mx-3 md:mx-5 flex-1 min-w-[12px]">
                  <motion.div
                    className="w-full h-px"
                    style={{
                      backgroundColor: "rgba(168,198,134,0.25)",
                      scaleX: bgOpacity,
                      originX: 0,
                    }}
                  />
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>

        {/* Preview of first act */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="mt-10 flex items-center gap-3"
        >
          <span
            className="font-mono text-[8px] tracking-[0.28em] uppercase px-3 py-1.5"
            style={{
              background: "rgba(91,140,81,0.15)",
              color: "rgba(168,198,134,0.8)",
              border: "1px solid rgba(91,140,81,0.2)",
            }}
          >
            01 / 05
          </span>
          <span className="font-mono text-[8.5px] text-dark-muted tracking-[0.2em] uppercase">
            Forest — where it begins
          </span>
        </motion.div>

      </div>
    </section>
  );
}
