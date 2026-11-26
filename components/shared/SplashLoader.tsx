"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const E = [0.16, 1, 0.3, 1] as const;
const LETTERS = "BIOPAPRO".split("");

export default function SplashLoader({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "gone">("enter");

  useEffect(() => {
    // enter: 0–900ms (letters reveal)
    // hold:  900–1700ms
    // exit:  1700ms → slide up 950ms → done at 2650ms
    const t1 = setTimeout(() => setPhase("hold"), 900);
    const t2 = setTimeout(() => setPhase("exit"), 1700);
    const t3 = setTimeout(() => { setPhase("gone"); onDone?.(); }, 2650);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === "gone") return null;

  const exiting = phase === "exit";

  return (
    // The whole panel slides UP like a stage curtain on exit
    <motion.div
      animate={exiting ? { y: "-100%" } : { y: "0%" }}
      transition={exiting
        ? { duration: 0.95, ease: [0.76, 0, 0.24, 1] }
        : { duration: 0 }
      }
      style={{
        position:   "fixed",
        inset:      0,
        zIndex:     9999,
        background: "#1A4731",
        display:    "flex",
        flexDirection: "column",
        alignItems:    "center",
        justifyContent: "center",
        gap:        "28px",
        overflow:   "hidden",
        pointerEvents: exiting ? "none" : "auto",
      }}
      role="status"
      aria-label="Loading Biopapro"
    >
      {/* Logo — fades + scales in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: E }}
        style={{
          position: "relative",
          width:    "clamp(72px, 11vw, 130px)",
          height:   "clamp(72px, 11vw, 130px)",
        }}
      >
        <Image
          src="/biopapro-logo.png"
          alt=""
          fill
          priority
          sizes="clamp(72px, 11vw, 130px)"
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      </motion.div>

      {/* BIOPAPRO — each letter reveals upward from a clip boundary */}
      <div style={{ display: "flex", alignItems: "flex-end" }}>
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
                fontSize:      "clamp(3.2rem, 11vw, 10rem)",
                color:         "#F5F0E6",
                letterSpacing: "-0.03em",
                lineHeight:    0.88,
              }}
              initial={{ y: "108%" }}
              animate={{ y: "0%" }}
              transition={{
                delay:    0.08 + i * 0.06,
                duration: 0.7,
                ease:     E,
              }}
            >
              {letter}
            </motion.span>
          </span>
        ))}
      </div>

      {/* Tagline */}
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 0.45, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        style={{
          fontFamily:    "var(--font-jetbrains, 'JetBrains Mono', monospace)",
          fontSize:      "clamp(8px, 0.95vw, 11px)",
          letterSpacing: "0.34em",
          textTransform: "uppercase" as const,
          color:         "#F5F0E6",
        }}
      >
        India&apos;s Eco Cutlery
      </motion.span>

      {/* Orange accent bar — sweeps in from left, then out before curtain rises */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={exiting ? { scaleX: 0, opacity: 0 } : { scaleX: 1 }}
        transition={exiting
          ? { duration: 0.3, ease: "easeIn" }
          : { delay: 0.55, duration: 0.9, ease: E }
        }
        style={{
          position:        "absolute",
          bottom:          0,
          left:            0,
          right:           0,
          height:          "3px",
          background:      "#E97316",
          transformOrigin: "left",
        }}
      />
    </motion.div>
  );
}
