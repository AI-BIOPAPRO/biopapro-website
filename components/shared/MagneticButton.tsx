"use client";

/**
 * Wraps a single interactive child (a Link or button) and makes it track the
 * cursor within its own bounds, then spring back on leave — the "magnetic
 * button" feel used across Apple's marketing pages. This is the one
 * authored focal-motion moment on the homepage hero; everything else on
 * the site uses plain, quick feedback transitions instead of a repeated
 * version of this effect.
 */

import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

const SPRING = { stiffness: 300, damping: 20, mass: 0.6 };
// How far the button is allowed to drift toward the cursor, in pixels.
const STRENGTH = 0.35;

export default function MagneticButton({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * STRENGTH);
    y.set(relY * STRENGTH);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
