"use client";

/**
 * S1 — Opening Section  (Full-screen cinematic revision)
 *
 * Architecture change: video is now the full-screen stage.
 * Content overlays the video — no more left/right split.
 * One story. One composition. One emotional experience.
 *
 * Content hierarchy (5-second test):
 *   1s  — BIOPAPRO (dominant, impossible to miss)
 *   2s  — "The Global Standard for Birchwood Tableware."
 *   3s  — 100M+ / 18+ Countries / 6,500kg / FSC® (stats bar)
 *   4s  — CTA: View Products / Request Export Quote
 *   5s  — Cert badges confirm trust
 */

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

const E = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: "100M+",   label: "Units Produced",    sub: "Annually"              },
  { value: "18+",     label: "Export Countries",  sub: "Active markets"        },
  { value: "6,500kg", label: "Plastic Replaced",  sub: "Every single day"      },
  { value: "FSC®",    label: "100% Certified",    sub: "Chain of custody"      },
] as const;

const TRUST_MARKS = ["FSC® 100%", "ISO 9001:2015", "FDA CFR 21", "BPI Compostable", "BSCI Audited"] as const;

function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);
  return (
    <video
      ref={ref}
      src="/videos/hero-background.mp4"
      autoPlay muted loop playsInline
      disablePictureInPicture preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    />
  );
}

export default function OpeningSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100svh" }}>

      {/* ══════════════════════════════════
          LAYER 0 — Video (full bleed)
          ══════════════════════════════ */}
      <HeroVideo />

      {/* ══════════════════════════════════
          LAYER 1 — Gradient overlays
          Left: dark enough for text
          Right: lighter, video breathes
          Bottom: stats readability
          ══════════════════════════════ */}

      {/* Primary atmospheric overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(108deg, rgba(12,22,10,0.92) 0%, rgba(12,22,10,0.82) 46%, rgba(12,22,10,0.4) 68%, rgba(12,22,10,0.1) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom stats scrim */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{ height: "38%", background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 55%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* Top scrim — label area */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{ height: "22%", background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* ══════════════════════════════════
          LAYER 2 — All content
          ══════════════════════════════ */}
      <div className="relative z-20 flex flex-col min-h-[100svh]
                      px-6 md:px-12 lg:px-16 xl:px-20
                      pt-[88px] md:pt-[100px]">

        {/* ── TOP ROW: Manufacturer label + cert trust marks ── */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: E }}
          className="flex items-center flex-wrap gap-4 mb-auto pb-6"
        >
          {/* Manufacturer badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5"
            style={{
              background: "rgba(74,122,61,0.22)",
              border: "1px solid rgba(74,122,61,0.45)",
              backdropFilter: "blur(8px)",
            }}
          >
            <CheckCircle2 size={10} color="rgba(160,220,140,0.9)" />
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-semibold"
              style={{ color: "rgba(180,230,160,0.95)" }}>
              Global FSC-Certified Manufacturer
            </span>
          </div>

          {/* Cert marks — desktop */}
          <div className="hidden md:flex items-center gap-1">
            {TRUST_MARKS.map((cert, i) => (
              <span key={cert}>
                <span className="font-mono text-[8.5px] tracking-[0.16em] uppercase"
                  style={{ color: "rgba(200,230,185,0.65)" }}>
                  {cert}
                </span>
                {i < TRUST_MARKS.length - 1 && (
                  <span className="mx-2 font-mono text-[8px]"
                    style={{ color: "rgba(180,210,160,0.3)" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── CENTRE: The primary brand statement ── */}
        <div className="flex flex-col justify-center flex-1 max-w-[600px] lg:max-w-[620px]
                        py-8 md:py-12">

          {/* Context label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-mono uppercase tracking-[0.32em] mb-5 md:mb-6"
            style={{
              fontSize: "clamp(0.62rem, 0.8vw, 0.72rem)",
              color: "rgba(160,210,140,0.52)",
            }}
          >
            Global Manufacturer &nbsp;·&nbsp; Est. 2018
          </motion.p>

          {/* ── BIOPAPRO — refined brand anchor, not dominant ── */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7, ease: E }}
            className="flex items-center gap-4 mb-7 md:mb-8"
          >
            <span
              className="font-mono font-semibold uppercase tracking-[0.42em]"
              style={{
                fontSize: "clamp(0.82rem, 1.1vw, 1.05rem)",
                color: "rgba(195,228,175,0.72)",
                letterSpacing: "0.42em",
              }}
            >
              BIOPAPRO
            </span>
            <span
              className="flex-shrink-0 h-px w-8"
              style={{ background: "rgba(160,210,140,0.3)" }}
            />
            <span
              className="font-mono uppercase tracking-[0.22em]"
              style={{
                fontSize: "clamp(0.62rem, 0.8vw, 0.72rem)",
                color: "rgba(170,210,150,0.45)",
              }}
            >
              Sustainable by Nature
            </span>
          </motion.div>

          {/* ── Headline — primary focus ── */}
          <div className="mb-7 md:mb-9">
            <h1
              className="font-display font-light leading-[0.93] tracking-[-0.015em]"
              style={{ fontSize: "clamp(2.8rem, 5.5vw, 5.8rem)" }}
            >
              {[
                { text: "The Global Standard",  accent: false, delay: 0.42  },
                { text: "for Birchwood",         accent: false, delay: 0.55 },
                { text: "Tableware.",             accent: true,  delay: 0.68 },
              ].map((line) => (
                <motion.span
                  key={line.text}
                  initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
                  transition={{ delay: line.delay, duration: 0.88, ease: E }}
                  className="block"
                  style={{ color: line.accent ? "#7AAE6B" : "rgba(242,248,236,0.96)" }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* ── Subtitle ── */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.78, ease: E }}
            className="font-sans font-light leading-relaxed mb-10"
            style={{
              fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
              color: "rgba(230,240,220,0.82)",
              maxWidth: "520px",
            }}
          >
            Precision-manufactured FSC-certified birchwood cutlery
            for airlines, food service, and global distributors.
            Replacing 6,500&thinsp;kg of plastic every day — across
            18+ countries.
          </motion.p>

          {/* ── CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.72, ease: E }}
            className="flex flex-col sm:flex-row items-start gap-3"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300"
              style={{ background: "#4A7A3D", color: "#FFFFFF" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#2D5228"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#4A7A3D"; }}
            >
              View Product Range
              <ArrowRight size={13} strokeWidth={2.5}
                className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "rgba(240,248,235,0.95)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.16)";
                el.style.borderColor = "rgba(160,220,140,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.08)";
                el.style.borderColor = "rgba(255,255,255,0.22)";
              }}
            >
              Request Export Quote
              <ArrowUpRight size={13} strokeWidth={2}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* ── BOTTOM: Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: E }}
          className="border-t pb-8 md:pb-10 pt-6"
          style={{ borderColor: "rgba(255,255,255,0.14)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.22 + i * 0.08, duration: 0.55, ease: E }}
                className="pr-6 md:border-r last:border-r-0 md:[&:nth-child(2)]:border-r"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div
                  className="font-display font-light leading-none mb-2"
                  style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)",
                    color: "#FFFFFF",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] mb-0.5"
                  style={{ color: "rgba(180,230,160,0.9)" }}
                >
                  {stat.label}
                </div>
                <div
                  className="font-mono text-[9px] uppercase tracking-[0.12em]"
                  style={{ color: "rgba(200,220,185,0.55)" }}
                >
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>{/* /Content */}

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 right-8 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.15)" }}>
          <div className="w-full h-1/2 bg-green-light animate-scroll-line" />
        </div>
        <span className="font-mono text-[8px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(180,220,160,0.5)", writingMode: "vertical-rl" }}>
          Scroll
        </span>
      </motion.div>

    </section>
  );
}
