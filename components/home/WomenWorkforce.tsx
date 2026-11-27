"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_FACTS } from "@/lib/company-facts";

const E = [0.16, 1, 0.3, 1] as const;

const STORY = [
  { kw: "Precision",   body: "Every piece inspected to export-grade standards." },
  { kw: "Consistency", body: "Same quality on every batch, every shift, every day." },
  { kw: "Pride",       body: "Women-owned livelihoods built on sustainable work." },
] as const;

export default function WomenWorkforce() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 38, damping: 18 });
  const sy = useSpring(mouseY, { stiffness: 38, damping: 18 });

  const imgX  = useTransform(sx, [-1, 1], [-8,  8]);
  const imgY  = useTransform(sy, [-1, 1], [-5,  5]);
  const midX  = useTransform(sx, [-1, 1], [-14, 14]);
  const midY  = useTransform(sy, [-1, 1], [-8,  8]);
  const fgX   = useTransform(sx, [-1, 1], [-26, 26]);
  const fgY   = useTransform(sy, [-1, 1], [-16, 16]);
  const cardRY = useTransform(sx, [-1, 1], [-7, 7]);
  const cardRX = useTransform(sy, [-1, 1], [4, -4]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(((e.clientX - r.left) / r.width  - 0.5) * 2);
    mouseY.set(((e.clientY - r.top)  / r.height - 0.5) * 2);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden select-none"
      style={{ minHeight: "680px" }}
      aria-label="Biopapro women workforce"
    >
      {/* ── Background: factory worker image with subtle parallax ── */}
      <motion.div
        className="absolute inset-0"
        style={{ x: imgX, y: imgY, scale: 1.07 }}
      >
        <Image
          src="https://biopapro.com/cdn/shop/files/F4.png"
          alt="Biopapro female worker at the production line, Mumbai factory"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* ── Dark green gradient overlay — left heavy for text, right lets image breathe ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(26,71,49,0.93) 0%, rgba(26,71,49,0.80) 45%, rgba(26,71,49,0.55) 70%, rgba(26,71,49,0.70) 100%)",
        }}
      />

      {/* ── Faint 70% watermark ── */}
      <motion.div
        className="absolute pointer-events-none overflow-hidden"
        style={{
          left:  "clamp(1rem, 4vw, 5rem)",
          top:   "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          x: midX,
          y: midY,
        }}
      >
        <motion.span
          initial={{ opacity: 0, rotateX: -60, y: 80, scale: 0.8 }}
          animate={inView ? { opacity: 1, rotateX: 0, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.08, duration: 1.1, ease: E }}
          style={{
            display:        "block",
            fontFamily:     "'Outfit', sans-serif",
            fontWeight:     900,
            fontSize:       "clamp(9rem, 26vw, 22rem)",
            lineHeight:     0.85,
            letterSpacing:  "-0.04em",
            color:          "rgba(255,255,255,0.04)",
            perspective:    "900px",
            transformStyle: "preserve-3d",
            userSelect:     "none",
          }}
        >
          70%
        </motion.span>
      </motion.div>

      {/* ── Foreground: main content ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 gap-14">

          {/* LEFT — big stat */}
          <motion.div
            className="flex-shrink-0"
            style={{ x: fgX, y: fgY }}
          >
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: E }}
              className="flex items-center gap-2 mb-10"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>07</span>
              <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.6)" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "rgba(255,255,255,0.6)" }}>Our People</span>
            </motion.div>

            {/* 70% — big white number */}
            <motion.div
              initial={{ opacity: 0, rotateX: -45, y: 50, scale: 0.85 }}
              animate={inView ? { opacity: 1, rotateX: 0, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.15, duration: 1, ease: E }}
              style={{ perspective: "900px", transformStyle: "preserve-3d" }}
            >
              <div
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(5rem, 13vw, 12rem)",
                  lineHeight:    0.86,
                  letterSpacing: "-0.03em",
                  color:         "#FFFFFF",
                  textShadow:    "0 4px 40px rgba(0,0,0,0.5)",
                }}
              >
                {COMPANY_FACTS.womenPercent}%
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7, ease: E }}
            >
              <div
                style={{
                  fontFamily:    "'Outfit', sans-serif",
                  fontWeight:    900,
                  fontSize:      "clamp(1.2rem, 3vw, 2.5rem)",
                  lineHeight:    1,
                  letterSpacing: "-0.02em",
                  color:         "#E97316",
                  marginTop:     "0.3rem",
                  marginBottom:  "0.4rem",
                }}
              >
                WOMEN-LED
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.5)" }}>
                Factory workforce
              </p>
            </motion.div>

            <div className="w-14 h-px my-8" style={{ background: "rgba(233,115,22,0.5)" }} />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.6, ease: E }}
            >
              <Link
                href="/manufacturing#people"
                className="group inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300"
                style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 20px rgba(233,115,22,0.45)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#C4580A";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(233,115,22,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#E97316";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(233,115,22,0.45)";
                }}
              >
                Meet the Team
                <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — story cards (glass morphism on the dark image) */}
          <motion.div
            className="flex flex-col gap-4 flex-1"
            style={{
              x:             midX,
              y:             midY,
              rotateY:       cardRY,
              rotateX:       cardRX,
              perspective:   "800px",
              transformStyle:"preserve-3d",
            }}
          >
            {STORY.map((s, i) => (
              <motion.div
                key={s.kw}
                initial={{ opacity: 0, rotateY: 55, x: 60, scale: 0.9 }}
                animate={inView ? { opacity: 1, rotateY: 0, x: 0, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.75, ease: E }}
                className="p-6"
                style={{
                  background:           "rgba(26,71,49,0.45)",
                  backdropFilter:       "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border:               "1px solid rgba(255,255,255,0.10)",
                  borderLeft:           "2px solid #E97316",
                  transformStyle:       "preserve-3d",
                }}
              >
                <span className="font-sans font-bold text-sm block mb-1.5" style={{ color: "#E97316" }}>
                  {s.kw}
                </span>
                <span className="font-sans text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
                  {s.body}
                </span>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="font-mono text-[10px] uppercase tracking-[0.18em] mt-2"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Biopapro factory · Mumbai, India · est. 2018
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
