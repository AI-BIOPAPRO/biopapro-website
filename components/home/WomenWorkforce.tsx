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

const PARTICLES = [
  { left: "7%",  delay: 0,    dur: 7,  size: 3, op: 0.35 },
  { left: "17%", delay: 1.4,  dur: 9,  size: 2, op: 0.25 },
  { left: "29%", delay: 0.5,  dur: 6,  size: 4, op: 0.2  },
  { left: "43%", delay: 2.2,  dur: 11, size: 2, op: 0.3  },
  { left: "58%", delay: 0.9,  dur: 8,  size: 3, op: 0.22 },
  { left: "71%", delay: 1.7,  dur: 7,  size: 4, op: 0.28 },
  { left: "83%", delay: 0.3,  dur: 10, size: 2, op: 0.3  },
  { left: "91%", delay: 3.1,  dur: 7,  size: 3, op: 0.18 },
] as const;

export default function WomenWorkforce() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  /* ── Mouse tracking ─────────────────────────────── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 38, damping: 18 });
  const sy = useSpring(mouseY, { stiffness: 38, damping: 18 });

  /* Three parallax layers at different depths */
  const bgX  = useTransform(sx, [-1, 1], [-5,  5]);
  const bgY  = useTransform(sy, [-1, 1], [-3,  3]);
  const midX = useTransform(sx, [-1, 1], [-14, 14]);
  const midY = useTransform(sy, [-1, 1], [-8,  8]);
  const fgX  = useTransform(sx, [-1, 1], [-26, 26]);
  const fgY  = useTransform(sy, [-1, 1], [-16, 16]);

  /* Cards get a 3D tilt from mouse */
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
    <>
    {/* Full-width factory worker image — sits flush above the stats, no gap */}
    <div className="relative overflow-hidden w-full" style={{ height: "clamp(340px,50vw,640px)" }}>
      <Image
        src="https://biopapro.com/cdn/shop/files/F4.png"
        alt="Biopapro female worker at the production line, Mumbai factory"
        fill
        className="object-cover object-left-top"
        sizes="100vw"
      />
      {/* Subtle vignette only at the very bottom edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{ background: "linear-gradient(to bottom, transparent, #F5F0E6)" }}
      />
    </div>

    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden select-none"
      style={{ background: "#F5F0E6", minHeight: "600px" }}
      aria-label="Biopapro women workforce"
    >

      {/* ── Floating mango particles (drifting up) ─── */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ left: p.left, bottom: "0px", width: p.size, height: p.size, background: "#E97316" }}
          animate={{ y: [-10, -520], opacity: [p.op, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
        />
      ))}

      {/* ── LAYER 1 — deepest: perspective floor grid ─ */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ x: bgX, y: bgY }}
      >
        <div
          style={{
            position:           "absolute",
            bottom:             0,
            left:               "-25%",
            right:              "-25%",
            height:             "52%",
            backgroundImage:    "linear-gradient(rgba(233,115,22,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(233,115,22,0.1) 1px, transparent 1px)",
            backgroundSize:     "72px 72px",
            transform:          "perspective(480px) rotateX(60deg)",
            transformOrigin:    "50% 100%",
            maskImage:          "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
            WebkitMaskImage:    "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
          }}
        />
      </motion.div>

      {/* ── LAYER 2 — mid: giant watermark "70%" ─────── */}
      <motion.div
        className="absolute pointer-events-none overflow-hidden"
        style={{
          x:      midX,
          y:      midY,
          left:   "clamp(1rem, 4vw, 5rem)",
          top:    "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
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
            color:          "rgba(26,71,49,0.06)",
            /* Extruded 3D text-shadow stack */
            textShadow:     [
              "1px 1px 0 rgba(196,88,10,0.06)",
              "2px 2px 0 rgba(196,88,10,0.055)",
              "3px 3px 0 rgba(196,88,10,0.05)",
              "4px 4px 0 rgba(196,88,10,0.04)",
              "5px 5px 0 rgba(196,88,10,0.03)",
              "6px 6px 0 rgba(196,88,10,0.02)",
              "7px 7px 8px rgba(0,0,0,0.3)",
            ].join(", "),
            perspective:     "900px",
            transformStyle:  "preserve-3d",
            userSelect:      "none",
          }}
        >
          70%
        </motion.span>
      </motion.div>

      {/* ── LAYER 3 — foreground: main content ───────── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-20 md:pt-10 md:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 gap-14">

          {/* LEFT — stat, deepest parallax layer */}
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
              <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.4)" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#7A6B54" }}>Our People</span>
            </motion.div>

            {/* 70% — 3D billboard entrance + extruded shadow */}
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
                  color:         "#1A4731",
                  textShadow:    [
                    "1px 1px 0 rgba(26,71,49,0.15)",
                    "2px 2px 0 rgba(26,71,49,0.12)",
                    "3px 3px 0 rgba(26,71,49,0.08)",
                    "4px 4px 8px rgba(0,0,0,0.08)",
                  ].join(", "),
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
              <p className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "#7A6B54" }}>
                Factory workforce
              </p>
            </motion.div>

            <div className="w-14 h-px my-8" style={{ background: "rgba(233,115,22,0.35)" }} />

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.6, ease: E }}
            >
              <Link
                href="/manufacturing#people"
                className="group inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300"
                style={{ background: "#E97316", color: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 20px rgba(233,115,22,0.35)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#C4580A";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(233,115,22,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#E97316";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(233,115,22,0.35)";
                }}
              >
                Meet the Team
                <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT — story cards, mid parallax + 3D mouse tilt */}
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
                  background:     "#EDE5D4",
                  borderLeft:     "2px solid rgba(233,115,22,0.5)",
                  border:         "1px solid rgba(26,71,49,0.1)",
                  borderLeftWidth: "2px",
                  borderLeftColor: "#E97316",
                  transformStyle: "preserve-3d",
                }}
              >
                <span className="font-sans font-bold text-sm block mb-1.5" style={{ color: "#E97316" }}>
                  {s.kw}
                </span>
                <span className="font-sans text-sm leading-relaxed" style={{ color: "#7A6B54" }}>
                  {s.body}
                </span>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="font-mono text-[10px] uppercase tracking-[0.18em] mt-2"
              style={{ color: "#7A6B54" }}
            >
              Biopapro factory · Mumbai, India · est. 2018
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
    </>
  );
}
