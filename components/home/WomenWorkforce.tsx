"use client";

/**
 * Our People — "The Hands Behind Every Shipment."
 *
 * Architecture: full-bleed image, gradient left-to-dark-right,
 * content anchored to the right side.
 *
 * Woman's face fully visible on the left — no overlay.
 * Content reads cleanly on the darkened right area.
 * One composition. Matches the hero section's visual language.
 */

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import SectionLabel from "@/components/shared/SectionLabel";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const E = [0.16, 1, 0.3, 1] as const;

const STORY_BLOCKS = [
  {
    keyword: "Precision",
    body: "Every product is inspected and prepared to export-grade standards.",
  },
  {
    keyword: "Consistency",
    body: "18 production lines operating daily for customers across global markets.",
  },
  {
    keyword: "Impact",
    body: "100M+ units produced annually with sustainability at the core.",
  },
] as const;

const STATS = [
  { value: "80%+",  label: "Women Workforce"        },
  { value: "100M+", label: "Units Produced Annually" },
  { value: "18+",   label: "Export Markets"          },
  { value: "2019",  label: "Established"             },
] as const;

export default function WomenWorkforce() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-labelledby="workforce-heading"
    >

      {/* ── Full-bleed photograph ── */}
      <Image
        src="/Worker Image.png"
        alt="Biopapro skilled woman operator at birchwood tableware production line"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* ── Gradient: transparent on left (woman visible) → dark on right (content readable) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left, rgba(5,14,5,0.97) 0%, rgba(5,14,5,0.94) 28%, rgba(5,14,5,0.7) 50%, rgba(5,14,5,0.18) 70%, rgba(5,14,5,0.0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top scrim */}
      <div
        className="absolute top-0 inset-x-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* ── Content — anchored right ── */}
      <div
        className="relative z-10 flex flex-col justify-between min-h-[100svh]
                   px-6 md:px-12 lg:px-16 xl:px-20 py-24 md:py-28"
      >
        {/* Content column — right-aligned on desktop */}
        <div className="flex flex-col flex-1 justify-center
                        lg:ml-auto lg:w-[50%] xl:w-[46%] lg:pl-8">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: E }}
            className="mb-8"
          >
            <SectionLabel index="—" label="Our People" inverted />
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="workforce-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.85, ease: E }}
            className="font-display font-light leading-[0.9] mb-8"
            style={{ fontSize: "clamp(2.6rem, 5vw, 5.4rem)", color: "#F4F8F0" }}
          >
            The Hands
            <br />Behind Every
            <br /><span style={{ color: "#7AAE6B" }}>Shipment.</span>
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.22, duration: 0.72, ease: E }}
            className="font-sans font-light leading-relaxed mb-10"
            style={{
              fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
              color: "rgba(220,238,210,0.78)",
            }}
          >
            Behind every FSC-certified spoon, fork, knife, and stirrer
            shipped across 18+ countries is a workforce built on precision,
            consistency, and craftsmanship.
            <br /><br />
            More than 80% of Biopapro&apos;s production team is made up of
            skilled women who manufacture, inspect, and prepare export-grade
            birchwood tableware every day. Their work powers over
            100&thinsp;million units annually while helping global
            food-service operators reduce dependence on single-use plastic.
          </motion.p>

          {/* Story blocks — editorial row */}
          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            {STORY_BLOCKS.map((block, i) => (
              <motion.div
                key={block.keyword}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.65, ease: E }}
                className="flex-1 border-t pt-4"
                style={{ borderColor: "rgba(74,122,61,0.4)" }}
              >
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.26em] font-bold mb-2"
                  style={{ color: "#7AAE6B" }}
                >
                  {block.keyword}
                </p>
                <p
                  className="font-sans font-light text-sm leading-relaxed"
                  style={{ color: "rgba(215,232,205,0.72)" }}
                >
                  {block.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.55 }}
          >
            <Link
              href="/manufacturing"
              className="group inline-flex items-center gap-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-5 py-2.5 transition-all duration-200"
              style={{ border: "1px solid rgba(150,210,125,0.45)", color: "rgba(150,210,125,0.9)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(150,210,125,0.1)";
                el.style.borderColor = "rgba(150,210,125,0.8)";
                el.style.color = "rgba(150,210,125,1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "transparent";
                el.style.borderColor = "rgba(150,210,125,0.45)";
                el.style.color = "rgba(150,210,125,0.9)";
              }}
            >
              See Full Manufacturing Operation
              <ArrowUpRight size={11} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </motion.div>

        </div>

        {/* ── Stats bar — bottom, full width ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.75, ease: E }}
          className="grid grid-cols-2 md:grid-cols-4 border-t pt-7 mt-10"
          style={{ borderColor: "rgba(255,255,255,0.12)" }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.62 + i * 0.08, duration: 0.5, ease: E }}
              className="pr-6 md:border-r last:border-r-0"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <p
                className="font-display font-light leading-none mb-1.5"
                style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)", color: "#FFFFFF" }}
              >
                {s.value}
              </p>
              <p
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: "rgba(160,215,135,0.82)" }}
              >
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}
