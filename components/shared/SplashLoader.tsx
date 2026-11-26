"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const SPRING = { type: "spring", stiffness: 320, damping: 18 } as const;
const EI = [0.76, 0, 0.24, 1] as const;
const E  = [0.16, 1, 0.3, 1] as const;

export default function SplashLoader({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "gone">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"),  900);
    const t2 = setTimeout(() => setPhase("exit"), 1700);
    const t3 = setTimeout(() => { setPhase("gone"); onDone?.(); }, 2500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === "gone") return null;
  const exiting = phase === "exit";

  const logoSize = "clamp(160px, 22vw, 240px)";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={exiting ? { opacity: 0 } : { opacity: 1 }}
      transition={exiting ? { duration: 0.8, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }}
      style={{
        position:      "fixed",
        inset:         0,
        zIndex:        9999,
        background:    "#1A4731",
        display:       "flex",
        flexDirection: "column",
        alignItems:    "center",
        justifyContent:"center",
        overflow:      "hidden",
        pointerEvents: exiting ? "none" : "auto",
      }}
      role="status"
      aria-label="Loading Biopapro"
    >
      {/* Shockwave rings — expand outward from logo on impact */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ width: logoSize, height: logoSize, opacity: 0.65 - i * 0.15, scale: 1 }}
          animate={{ scale: 6 + i * 1.5, opacity: 0 }}
          transition={{
            delay:    0.08 + i * 0.12,
            duration: 1.1 + i * 0.15,
            ease:     [0.2, 0.5, 0.3, 1],
          }}
          style={{
            position:     "absolute",
            borderRadius: "50%",
            border:       `${1.5 - i * 0.3}px solid #E97316`,
            pointerEvents:"none",
          }}
        />
      ))}

      {/* Logo — spring stamps in */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={exiting
          ? { scale: 0.85, opacity: 0 }
          : { scale: 1,    opacity: 1 }
        }
        transition={exiting
          ? { duration: 0.45, ease: EI }
          : SPRING
        }
        style={{
          position: "relative",
          width:    logoSize,
          height:   logoSize,
        }}
      >
        <Image
          src="/biopapro-logo.png"
          alt="Biopapro"
          fill
          priority
          sizes={logoSize}
          style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      </motion.div>

      {/* Tagline — slides up after logo lands */}
      <motion.span
        initial={{ opacity: 0, y: 14 }}
        animate={exiting ? { opacity: 0, y: -6 } : { opacity: 0.55, y: 0 }}
        transition={{
          delay:    exiting ? 0 : 0.42,
          duration: 0.5,
          ease:     E,
        }}
        style={{
          marginTop:     "24px",
          fontFamily:    "var(--font-jetbrains, 'JetBrains Mono', monospace)",
          fontSize:      "clamp(9px, 1vw, 12px)",
          letterSpacing: "0.38em",
          textTransform: "uppercase" as const,
          color:         "#F5F0E6",
        }}
      >
        India&apos;s Eco Cutlery
      </motion.span>

      {/* Subtle bottom sweep bar */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={exiting ? { opacity: 0 } : { scaleX: 1, opacity: 1 }}
        transition={{ delay: exiting ? 0 : 0.6, duration: 0.6, ease: E }}
        style={{
          position:       "absolute",
          bottom:         0,
          left:           0,
          right:          0,
          height:         "2px",
          background:     "#E97316",
          transformOrigin:"left",
        }}
      />
    </motion.div>
  );
}
