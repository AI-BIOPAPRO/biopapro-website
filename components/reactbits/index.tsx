"use client";

import { motion, useInView } from "motion/react";
import { useRef, useMemo } from "react";
import type { ReactNode, CSSProperties } from "react";
import RealAurora from "./Aurora/Aurora";
export { default as CountUp } from "./CountUp/CountUp";

const E = [0.16, 1, 0.3, 1] as const;

/* ─────────────────────────────────────
   SplitText — word-by-word 3D entrance
   ───────────────────────────────────── */
export function SplitText({
  text,
  className,
  style,
  delay    = 0,
  stagger  = 0.075,
}: {
  text:       string;
  className?: string;
  style?:     CSSProperties;
  delay?:     number;
  stagger?:   number;
}) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const words  = useMemo(() => text.split(" "), [text]);

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", ...style }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 28, rotateX: -15 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ delay: delay + i * stagger, duration: 0.55, ease: E }}
          style={{ display: "inline-block", marginRight: "0.28em", transformOrigin: "top" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────
   BlurText — blur + fade per word
   ───────────────────────────────────── */
export function BlurText({
  text,
  className,
  style,
  delay   = 0,
  stagger = 0.06,
}: {
  text:       string;
  className?: string;
  style?:     CSSProperties;
  delay?:     number;
  stagger?:   number;
}) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const words  = useMemo(() => text.split(" "), [text]);

  return (
    <span ref={ref} style={{ display: "flex", flexWrap: "wrap" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={className}
          initial={{ opacity: 0, filter: "blur(10px)", y: 8 }}
          animate={inView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{ delay: delay + i * stagger, duration: 0.65, ease: E }}
          style={{ display: "inline-block", marginRight: "0.28em", ...style }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ─────────────────────────────────────
   ScrollFloat — float-up wrapper
   ───────────────────────────────────── */
export function ScrollFloat({
  children,
  delay     = 0,
  className,
  style,
  distance  = 32,
}: {
  children:   ReactNode;
  delay?:     number;
  className?: string;
  style?:     CSSProperties;
  distance?:  number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.65, ease: E }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────
   Aurora — real WebGL2 aurora (ReactBits)
   Wrapper keeps old {col1,col2,col3,opacity} interface.
   ───────────────────────────────────── */
export function Aurora({
  col1    = "#1A4731",
  col2    = "#E97316",
  col3    = "#E97316",
  opacity = 0.25,
}: {
  col1?:    string;
  col2?:    string;
  col3?:    string;
  opacity?: number;
}) {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <RealAurora
        colorStops={[col1, col2, col3]}
        opacity={opacity}
        amplitude={1.4}
        blend={0.65}
        height={0.5}
        glow={0.8}
        brightness={1.1}
        speed={0.6}
        layers={2}
        mouseInteraction={false}
        intro={false}
      />
    </div>
  );
}
