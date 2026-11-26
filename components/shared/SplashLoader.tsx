"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const E = [0.16, 1, 0.3, 1] as const;

const SWEEP_CSS = `@keyframes bp-sweep{from{transform:translateX(-115%)}to{transform:translateX(400%)}}`;

export default function SplashLoader({ onDone }: { onDone?: () => void }) {
  const [phase, setPhase] = useState<"intro" | "exit" | "gone">("intro");

  useEffect(() => {
    // Hold 1 300 ms → start exit → done at 2 700 ms
    const t1 = setTimeout(() => setPhase("exit"), 1300);
    const t2 = setTimeout(() => { setPhase("gone"); onDone?.(); }, 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  if (phase === "gone") return null;

  const exiting = phase === "exit";

  return (
    // Full-screen cream overlay — fades away during exit
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: exiting ? 0.25 : 0 }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#F5F0E6",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
        pointerEvents: exiting ? "none" : "auto",
      }}
      role="status"
      aria-label="Loading Biopapro"
    >
      <style>{SWEEP_CSS}</style>

      {/* Logo + name: enters centered, then flies to ghost-watermark position on exit */}
      <motion.div
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}
        initial={{ opacity: 0, scale: 0.82, y: 24 }}
        animate={
          exiting
            ? { opacity: 0, scale: 0.22, x: "-30vw", y: "-18vh" }
            : { opacity: 1, scale: 1,    x: 0,       y: 0        }
        }
        transition={
          exiting
            ? { duration: 1.05, ease: E }
            : { duration: 0.65, ease: E }
        }
      >
        {/* BioPapro logo PNG */}
        <div style={{
          position: "relative",
          width:  "clamp(100px, 20vw, 220px)",
          height: "clamp(100px, 20vw, 220px)",
        }}>
          <Image
            src="/biopapro-logo.png"
            alt="Biopapro"
            fill
            priority
            sizes="clamp(100px, 20vw, 220px)"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* BIOPAPRO wordmark */}
        <span style={{
          fontFamily:    "'Outfit', sans-serif",
          fontWeight:    900,
          fontSize:      "clamp(2.2rem, 8vw, 6.5rem)",
          color:         "#1A4731",
          letterSpacing: "-0.045em",
          lineHeight:    1,
        }}>
          BIOPAPRO
        </span>

        {/* Tagline */}
        <span style={{
          fontFamily:    "var(--font-jetbrains, 'JetBrains Mono', monospace)",
          fontSize:      "clamp(8px, 1vw, 11px)",
          letterSpacing: "0.32em",
          textTransform: "uppercase" as const,
          color:         "#7A6B54",
          marginTop:     "-6px",
        }}>
          India&apos;s Eco Cutlery
        </span>
      </motion.div>

      {/* Bottom progress sweep — hidden once exiting */}
      {!exiting && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          height: "2px", background: "rgba(26,71,49,0.07)", overflow: "hidden",
        }}>
          <div style={{
            height: "100%", width: "35%",
            background: "linear-gradient(to right, rgba(27,59,47,.18) 0%, #1B3B2F 50%, #8D5432 100%)",
            animation: "bp-sweep 1.5s cubic-bezier(.37,0,.63,1) infinite",
          }} />
        </div>
      )}
    </motion.div>
  );
}
