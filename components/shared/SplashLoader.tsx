"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const E  = [0.16, 1, 0.3, 1] as const;
const EI = [0.76, 0, 0.24, 1] as const; // ease-in-out for the iris collapse

const LETTERS = "BIOPAPRO".split("");

const SWEEP = `@keyframes iris-sweep{from{transform:translateX(-115%)}to{transform:translateX(400%)}}`;

export default function SplashLoader({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "gone">("enter");

  useEffect(() => {
    // enter: 0–900ms (letters clip-reveal up)
    // hold:  900–1500ms
    // exit:  1500ms → iris collapses 1100ms → done 2600ms
    const t1 = setTimeout(() => setPhase("hold"),  900);
    const t2 = setTimeout(() => setPhase("exit"), 1500);
    const t3 = setTimeout(() => { setPhase("gone"); onDone?.(); }, 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === "gone") return null;

  const exiting = phase === "exit";

  return (
    /*
     * The overlay is clipped by a circle. On exit the circle
     * shrinks to 0% at the logo center — the page is revealed
     * from the outer edges inward, like a camera iris closing.
     */
    <motion.div
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={exiting ? { duration: 0.75, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }}
      style={{
        position:  "fixed",
        inset:     0,
        zIndex:    9999,
        background:"#1A4731",
        display:   "flex",
        flexDirection: "column",
        alignItems:    "center",
        justifyContent:"center",
        gap:       "24px",
        overflow:  "hidden",
        pointerEvents: exiting ? "none" : "auto",
      }}
      role="status"
      aria-label="Loading Biopapro"
    >
      <style>{SWEEP}</style>

      {/* Logo — scales in, then contracts toward center on exit */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={exiting
          ? { opacity: 0, scale: 0.3 }
          : { opacity: 1, scale: 1   }
        }
        transition={exiting
          ? { duration: 0.6, ease: EI }
          : { duration: 0.6, ease: E  }
        }
        style={{
          position: "relative",
          width:    "clamp(72px, 10vw, 120px)",
          height:   "clamp(72px, 10vw, 120px)",
        }}
      >
        <Image
          src="/biopapro-logo.png"
          alt=""
          fill
          priority
          sizes="clamp(72px, 10vw, 120px)"
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      </motion.div>

      {/* BIOPAPRO — each letter clips up from overflow:hidden, fades on exit */}
      <motion.div
        style={{ display: "flex", alignItems: "flex-end" }}
        animate={exiting ? { opacity: 0, scale: 0.85 } : { opacity: 1, scale: 1 }}
        transition={exiting
          ? { duration: 0.5, ease: EI }
          : { duration: 0 }
        }
      >
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            style={{ display: "inline-block", overflow: "hidden", lineHeight: 0.88 }}
          >
            <motion.span
              style={{
                display:       "block",
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(3rem, 10vw, 9.5rem)",
                color:         "#F5F0E6",
                letterSpacing: "-0.03em",
                lineHeight:    0.88,
              }}
              initial={{ y: "108%" }}
              animate={{ y: "0%" }}
              transition={{
                delay:    0.07 + i * 0.065,
                duration: 0.72,
                ease:     E,
              }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={exiting
          ? { opacity: 0 }
          : { opacity: 0.4, y: 0 }
        }
        transition={{ delay: exiting ? 0 : 0.72, duration: 0.45 }}
        style={{
          fontFamily:    "var(--font-jetbrains, 'JetBrains Mono', monospace)",
          fontSize:      "clamp(8px, 0.9vw, 11px)",
          letterSpacing: "0.36em",
          textTransform: "uppercase" as const,
          color:         "#F5F0E6",
        }}
      >
        India&apos;s Eco Cutlery
      </motion.span>

      {/* Orange progress line — sweeps during hold, disappears on exit */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={exiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ delay: exiting ? 0 : 0.5, duration: 0.3 }}
        style={{
          position: "fixed",
          bottom:   0,
          left:     0,
          right:    0,
          height:   "2.5px",
          background: "rgba(245,240,230,0.1)",
          overflow: "hidden",
        }}
      >
        <div style={{
          height:   "100%",
          width:    "40%",
          background: "#E97316",
          animation: "iris-sweep 1.6s cubic-bezier(.37,0,.63,1) infinite",
        }} />
      </motion.div>
    </motion.div>
  );
}
