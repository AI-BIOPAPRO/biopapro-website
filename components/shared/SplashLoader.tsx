"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const E  = [0.16, 1, 0.3, 1] as const;
const EI = [0.76, 0, 0.24, 1] as const;

const SWEEP = `@keyframes iris-sweep{from{transform:translateX(-115%)}to{transform:translateX(400%)}}`;

export default function SplashLoader({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "gone">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"),  900);
    const t2 = setTimeout(() => setPhase("exit"), 1500);
    const t3 = setTimeout(() => { setPhase("gone"); onDone?.(); }, 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === "gone") return null;

  const exiting = phase === "exit";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={exiting ? { duration: 0.75, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }}
      style={{
        position:      "fixed",
        inset:         0,
        zIndex:        9999,
        background:    "#1A4731",
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        justifyContent:"center",
        gap:           "20px",
        overflow:      "hidden",
        pointerEvents: exiting ? "none" : "auto",
      }}
      role="status"
      aria-label="Loading Biopapro"
    >
      <style>{SWEEP}</style>

      {/* Logo — the hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 8 }}
        animate={exiting
          ? { opacity: 0, scale: 0.95, y: -6 }
          : { opacity: 1, scale: 1,    y: 0  }
        }
        transition={exiting
          ? { duration: 0.5, ease: EI }
          : { duration: 0.7, ease: E  }
        }
        style={{
          position: "relative",
          width:    "clamp(140px, 20vw, 220px)",
          height:   "clamp(140px, 20vw, 220px)",
        }}
      >
        <Image
          src="/biopapro-logo.png"
          alt="Biopapro"
          fill
          priority
          sizes="clamp(140px, 20vw, 220px)"
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      </motion.div>

      {/* Tagline */}
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={exiting
          ? { opacity: 0 }
          : { opacity: 0.5, y: 0 }
        }
        transition={{ delay: exiting ? 0 : 0.55, duration: 0.45 }}
        style={{
          fontFamily:    "var(--font-jetbrains, 'JetBrains Mono', monospace)",
          fontSize:      "clamp(9px, 1vw, 12px)",
          letterSpacing: "0.36em",
          textTransform: "uppercase" as const,
          color:         "#F5F0E6",
        }}
      >
        India&apos;s Eco Cutlery
      </motion.span>

      {/* Orange progress sweep */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={exiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ delay: exiting ? 0 : 0.5, duration: 0.3 }}
        style={{
          position:   "fixed",
          bottom:     0,
          left:       0,
          right:      0,
          height:     "2.5px",
          background: "rgba(245,240,230,0.1)",
          overflow:   "hidden",
        }}
      >
        <div style={{
          height:     "100%",
          width:      "40%",
          background: "#E97316",
          animation:  "iris-sweep 1.6s cubic-bezier(.37,0,.63,1) infinite",
        }} />
      </motion.div>
    </motion.div>
  );
}
