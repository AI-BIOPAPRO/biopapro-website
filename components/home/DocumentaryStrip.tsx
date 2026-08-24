"use client";

/**
 * S3 — The Documentary Strip
 *
 * The signature interaction of the Biopapro website.
 * Vertical scroll drives a horizontal journey through 5 acts.
 *
 * Architecture:
 *   outer section    height: 500vh     creates scroll space
 *   sticky inner     position:sticky   stays in viewport during pin
 *   strip div        width: 500vw      translates -400vw as you scroll
 *
 * GSAP:
 *   gsap.to(strip, { x: -totalWidth })
 *   scrollTrigger: { scrub: 1.2 }   →  cinematic 1.2s lag
 *
 * Lenis sync:
 *   Handled globally in SmoothScrollProvider (lenis.on('scroll', ScrollTrigger.update)).
 *
 * Mobile fallback (< 1024px):
 *   Horizontal pin disabled. Acts render as full-height vertical sections.
 *   Same content, no horizontal GSAP. Clean and accessible.
 *
 * Acts:
 *   01  Forest                  MEDIA_NEEDED: forest photography
 *   02  Material Selection      MEDIA_NEEDED: macro birchwood photography
 *   03  Manufacturing           MEDIA_NEEDED: factory floor photography
 *   04  Product Engineering     USES: real Biopapro CDN product photos
 *   05  Global Distribution     BUILT: SVG world map (no photo needed)
 */

import {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";

/* ─────────────────────────────────────────────────────────────────────────────
   ACT DATA
   ───────────────────────────────────────────────────────────────────────────── */

const ACTS = [
  {
    n: "01",
    title: "Forest",
    subtitle: "Where it begins.",
    body: "FSC-certified birch forests across Northern Eurasia. Selected trees, sustainable harvest cycles, never clear-cut. Winter harvest only — when humidity is at its lowest.",
    stat: { value: "340", unit: "trees planted equivalent per day" },
    palette: { bg: "#0F2210", text: "rgba(220,232,210,0.90)", muted: "rgba(168,198,134,0.55)" },
    /**
     * MEDIA_NEEDED — Act 1: Forest Photography
     * Shot: Wide-angle Siberian birch forest, winter morning
     * Birch bark columns, snow-dusted branches, pale blue-white sky
     * Colour grade: cold, blue-white, high contrast
     * Minimum: 2400×1600px WebP
     * Path: /public/images/strip/act-01-forest.webp
     */
    image: null,
    imagePlaceholder: "Siberian Birch Forest\nWinter · FSC Certified\nAct 01 Photography",
  },
  {
    n: "02",
    title: "Material Selection",
    subtitle: "Selected. Not extracted.",
    body: "Each log density-graded before cutting. HGB-750 to UHB-820 classification. Moisture content locked under 8% from day one. This is what precision at origin looks like.",
    stat: { value: "<8%", unit: "moisture threshold — precision standard" },
    palette: { bg: "#1A1A0A", text: "rgba(235,225,200,0.90)", muted: "rgba(200,175,120,0.55)" },
    /**
     * MEDIA_NEEDED — Act 2: Macro Birchwood Photography
     * Shot: Extreme close-up of birch log cross-section
     * Ring patterns and grain filling the frame
     * Contrast: cold bark exterior → warm amber wood interior
     * Colour grade: warm amber, shallow depth of field
     * Minimum: 2400×1600px WebP
     * Path: /public/images/strip/act-02-material.webp
     */
    image: null,
    imagePlaceholder: "Birchwood Cross-Section\nMacro Photography\nAct 02 Material Selection",
  },
  {
    n: "03",
    title: "Manufacturing Excellence",
    subtitle: "100,000,000 units.\nOne production floor.",
    body: "Hydraulic die-stamping. 150°C baking & sterilisation. Micro-abrasive double polish. 4K optical sorting. 18 production lines running 24/7.",
    stat: { value: "0.05mm", unit: "dimensional tolerance — tighter than most metals" },
    palette: { bg: "#0F2018", text: "rgba(220,240,225,0.90)", muted: "rgba(140,200,160,0.55)" },
    /**
     * MEDIA_NEEDED — Act 3: Factory Floor Photography
     * Shot: Long production hall — rows of hydraulic presses + polishing drums
     * Warm industrial practicals, slight motion blur on machinery
     * Wide angle lens showing scale, depth visible
     * Colour grade: warm tungsten, deep shadow
     * Also needed: Production line video loop (30s, 1920×1080)
     * Path: /public/images/strip/act-03-manufacturing.webp
     *        /public/videos/production-line-loop.mp4
     */
    image: null,
    imagePlaceholder: "Factory Floor Photography\n18 Production Lines\nAct 03 Manufacturing",
  },
  {
    n: "04",
    title: "Product Engineering",
    subtitle: "The finished result.",
    body: "Fork. Spoon. Knife. Coffee Stirrer. Ice Cream Stick. BBQ Skewer. Every specification. Every volume. Every certification.",
    stat: { value: "6", unit: "product categories · all FSC certified" },
    palette: { bg: "#F8FAF5", text: "rgba(31,42,31,0.90)", muted: "rgba(74,92,74,0.65)" },
    /**
     * Using real Biopapro product photography for this act.
     * MEDIA_NEEDED: Studio upgrade — products on white/sage surface, 5500K
     */
    image: "https://biopapro.com/cdn/shop/collections/C4_4.png?v=1662374267",
    imagePlaceholder: null,
    imageAlt: "FSC-certified birchwood wooden fork — Biopapro product engineering",
    cta: { label: "View Full Range", href: "/products" },
    certifications: ["FSC®", "ISO 9001", "FDA CFR 21", "BPI"],
  },
  {
    n: "05",
    title: "Global Distribution",
    subtitle: "18+ countries.\nEvery day.",
    body: "Airlines. Food service. Distributors. From our production floor to your operation in any volume, any specification, via sea, air, and road.",
    stat: { value: "18+", unit: "active export countries" },
    palette: { bg: "#1A2E1A", text: "rgba(220,232,210,0.90)", muted: "rgba(168,198,134,0.55)" },
    image: null,
    imagePlaceholder: null, // SVG world map built in-component
    cta: { label: "Start an Export Partnership", href: "/contact" },
    countries: [
      "United States", "United Kingdom", "Germany", "France", "Netherlands",
      "UAE", "Saudi Arabia", "Japan", "South Korea", "Australia",
      "Canada", "Spain", "Italy", "Singapore", "India",
      "Brazil", "South Africa", "New Zealand",
    ],
  },
] as const;

/* World map dots — approximate lat/lng → pixel positions for a 960×480 map */
const MAP_DOTS = [
  { cx: 200, cy: 160, label: "United States"  },
  { cx: 247, cy: 115, label: "United Kingdom"  },
  { cx: 275, cy: 115, label: "Germany"         },
  { cx: 268, cy: 122, label: "France"          },
  { cx: 282, cy: 112, label: "Netherlands"     },
  { cx: 330, cy: 160, label: "UAE"             },
  { cx: 320, cy: 155, label: "Saudi Arabia"    },
  { cx: 620, cy: 162, label: "Japan"           },
  { cx: 612, cy: 170, label: "South Korea"     },
  { cx: 680, cy: 320, label: "Australia"       },
  { cx: 190, cy: 110, label: "Canada"          },
  { cx: 250, cy: 130, label: "Spain"           },
  { cx: 270, cy: 128, label: "Italy"           },
  { cx: 618, cy: 210, label: "Singapore"       },
  { cx: 500, cy: 190, label: "India"           },
  { cx: 260, cy: 290, label: "Brazil"          },
  { cx: 310, cy: 310, label: "South Africa"    },
  { cx: 730, cy: 350, label: "New Zealand"     },
] as const;

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

export default function DocumentaryStrip() {
  const sectionRef  = useRef<HTMLElement>(null);
  const stickyRef   = useRef<HTMLDivElement>(null);
  const stripRef    = useRef<HTMLDivElement>(null);
  const actRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const tweenRef    = useRef<gsap.core.Tween | null>(null);

  const [progress,   setProgress  ] = useState(0);   // 0–1 strip progress
  const [activeAct,  setActiveAct ] = useState(0);   // 0–4 current act index
  const [isDesktop,  setIsDesktop ] = useState(false);
  const [dotsActive, setDotsActive] = useState(false);

  /* Detect desktop on mount + resize */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── GSAP horizontal scroll (desktop only) ── */
  useLayoutEffect(() => {
    if (!isDesktop) return;

    const strip   = stripRef.current;
    const section = sectionRef.current;
    if (!strip || !section) return;

    const ctx = gsap.context(() => {
      const totalWidth = () => strip.scrollWidth - window.innerWidth;

      const tween = gsap.to(strip, {
        x: () => -totalWidth(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth()}`,
          scrub: 3,
          invalidateOnRefresh: true,
          onUpdate(self) {
            setProgress(self.progress);
            // Which act is active? (5 acts over 0–1 range)
            setActiveAct(Math.min(4, Math.floor(self.progress * 5)));
            // Trigger map dots animation at Act 5
            if (self.progress > 0.82) setDotsActive(true);
          },
        },
      });

      tweenRef.current = tween;

      // Per-act text entrance — triggered when each act enters the h-viewport
      actRefs.current.forEach((actEl) => {
        if (!actEl) return;
        const content = actEl.querySelectorAll<HTMLElement>(".act-content");
        ScrollTrigger.create({
          trigger: actEl,
          containerAnimation: tween,
          start: "left 60%",
          once: true,
          onEnter() {
            gsap.fromTo(
              content,
              { opacity: 0, y: 28, filter: "blur(6px)" },
              {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                stagger: 0.1,
                duration: 0.75,
                ease: "power3.out",
              }
            );
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop]);

  const setActRef = useCallback((el: HTMLDivElement | null, i: number) => {
    actRefs.current[i] = el;
  }, []);

  /* ── MOBILE: simple in-view fade for each act ── */
  useLayoutEffect(() => {
    if (isDesktop) return;
    const ctx = gsap.context(() => {
      actRefs.current.forEach((actEl) => {
        if (!actEl) return;
        const content = actEl.querySelectorAll<HTMLElement>(".act-content");
        ScrollTrigger.create({
          trigger: actEl,
          start: "top 80%",
          once: true,
          onEnter() {
            gsap.fromTo(content, { opacity: 0, y: 22 }, {
              opacity: 1, y: 0, stagger: 0.09, duration: 0.7, ease: "power3.out",
            });
          },
        });
      });
    });
    return () => ctx.revert();
  }, [isDesktop]);

  /* ─── Render ─── */
  return (
    <>
      {/* ══ DESKTOP: pinned horizontal strip ══ */}
      {isDesktop && (
        <section ref={sectionRef} style={{ height: "500vh" }} className="relative z-[55]">
          {/* Sticky viewport frame */}
          <div
            ref={stickyRef}
            className="sticky top-0 h-screen overflow-hidden"
          >
            {/* The 500vw strip */}
            <div
              ref={stripRef}
              className="flex h-full will-change-transform"
              style={{ width: `${ACTS.length * 100}vw` }}
            >
              {ACTS.map((act, i) => (
                <ActPanel
                  key={act.n}
                  act={act}
                  index={i}
                  ref={(el) => setActRef(el, i)}
                  dotsActive={dotsActive}
                />
              ))}
            </div>

            {/* ── Progress bar — fixed at bottom of sticky viewport ── */}
            <div className="absolute bottom-0 left-0 right-0 z-30">
              {/* Act indicators */}
              <div className="flex items-center px-8 md:px-16 py-3 gap-6"
                style={{ background: "rgba(10,20,10,0.6)", backdropFilter: "blur(12px)" }}
              >
                {ACTS.map((act, i) => (
                  <div key={act.n} className="flex items-center gap-2 flex-shrink-0">
                    <div
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-400"
                      style={{ backgroundColor: i <= activeAct ? "#5B8C51" : "rgba(91,140,81,0.25)" }}
                    />
                    <span
                      className="font-mono text-[8px] tracking-[0.2em] uppercase transition-colors duration-400"
                      style={{ color: i === activeAct ? "rgba(168,198,134,0.9)" : "rgba(168,198,134,0.3)" }}
                    >
                      {act.n} {act.title}
                    </span>
                  </div>
                ))}

                <div className="flex-1" />

                {/* Numeric progress */}
                <span className="font-mono text-[9px] text-green-light/40 tracking-widest">
                  {String(activeAct + 1).padStart(2, "0")} / {String(ACTS.length).padStart(2, "0")}
                </span>
              </div>

              {/* Green fill bar */}
              <div className="h-[2px] bg-dark-border">
                <div
                  className="h-full bg-green transition-none"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ══ MOBILE: vertical acts ══ */}
      {!isDesktop && (
        <section className="bg-dark">
          {ACTS.map((act, i) => (
            <ActPanel
              key={act.n}
              act={act}
              index={i}
              ref={(el) => setActRef(el, i)}
              dotsActive={i === 4}
              mobile
            />
          ))}
        </section>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   ACT PANEL
   Individual full-screen act — used in both desktop (horizontal) and mobile (vertical)
   ───────────────────────────────────────────────────────────────────────────── */

import React from "react";

interface ActPanelProps {
  act: typeof ACTS[number];
  index: number;
  dotsActive: boolean;
  mobile?: boolean;
}

const ActPanel = React.forwardRef<HTMLDivElement, ActPanelProps>(
  function ActPanel({ act, index, dotsActive, mobile = false }, ref) {
    const isLight = act.n === "04";

    return (
      <div
        ref={ref}
        className="relative flex-shrink-0 overflow-hidden"
        style={{
          width: mobile ? "100%" : "100vw",
          height: mobile ? "100vh" : "100%",
          minHeight: mobile ? "100svh" : undefined,
          backgroundColor: act.palette.bg,
        }}
      >
        {/* ── Background: photography or gradient placeholder ── */}
        {act.image ? (
          <>
            <Image
              src={act.image}
              alt={`${act.title} — Biopapro birchwood tableware`}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={index === 3}
            />
            {/* Gradient overlay for text legibility on photo acts */}
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(248,250,245,0) 40%, transparent 100%)" }}
            />
          </>
        ) : act.n === "05" ? (
          /* Act 5: SVG world map background */
          <WorldMapBackground dotsActive={dotsActive} />
        ) : (
          /* Styled gradient placeholder for acts 1–3 */
          <PlaceholderBackground act={act} />
        )}

        {/* ── Content overlay ── */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 lg:px-20 pb-16"
          style={{ maxWidth: mobile ? "100%" : "560px" }}
        >

          <div className="act-content" style={{ opacity: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <span
                className="font-mono text-[9px] tracking-[0.3em] uppercase px-3 py-1.5"
                style={{
                  background: isLight ? "rgba(91,140,81,0.12)" : "rgba(91,140,81,0.18)",
                  color: isLight ? "#3F6B42" : "rgba(168,198,134,0.85)",
                  border: `1px solid ${isLight ? "rgba(91,140,81,0.25)" : "rgba(91,140,81,0.22)"}`,
                }}
              >
                {act.n} / 05
              </span>
              <span
                className="font-mono text-[8.5px] tracking-[0.2em] uppercase"
                style={{ color: act.palette.muted }}
              >
                {act.title}
              </span>
            </div>
          </div>

          <div className="act-content" style={{ opacity: 0 }}>
            <h2
              className="font-display font-light leading-[0.9] tracking-[-0.02em] mb-5 whitespace-pre-line"
              style={{
                fontSize: "clamp(2.6rem, 4.5vw, 4.8rem)",
                color: isLight ? "#1F2A1F" : "rgba(248,250,245,0.95)",
              }}
            >
              {act.subtitle}
            </h2>
          </div>

          <div className="act-content" style={{ opacity: 0 }}>
            <p
              className="font-sans font-light text-base md:text-[1.05rem] leading-relaxed mb-8 max-w-[440px]"
              style={{ color: act.palette.muted }}
            >
              {act.body}
            </p>
          </div>

          {/* Key stat */}
          <div className="act-content" style={{ opacity: 0 }}>
            <div
              className="flex items-start gap-4 pt-6 mb-7"
              style={{ borderTop: `1px solid ${isLight ? "rgba(31,42,31,0.12)" : "rgba(168,198,134,0.18)"}` }}
            >
              <span
                className="font-display font-light"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  lineHeight: 1,
                  color: isLight ? "#3F6B42" : "rgba(168,198,134,0.9)",
                }}
              >
                {act.stat.value}
              </span>
              <span
                className="font-mono text-[8px] tracking-[0.12em] uppercase leading-relaxed mt-1.5 max-w-[200px]"
                style={{ color: act.palette.muted }}
              >
                {act.stat.unit}
              </span>
            </div>
          </div>

          {/* Certifications — Act 4 only */}
          {"certifications" in act && act.certifications && (
            <div className="act-content flex items-center gap-3 flex-wrap mb-7" style={{ opacity: 0 }}>
              {act.certifications.map((cert) => (
                <span
                  key={cert}
                  className="font-mono text-[8px] tracking-[0.18em] uppercase px-2.5 py-1"
                  style={{
                    background: "rgba(91,140,81,0.10)",
                    color: "#3F6B42",
                    border: "1px solid rgba(91,140,81,0.2)",
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
          )}

          {/* Countries — Act 5 only */}
          {"countries" in act && act.countries && (
            <div className="act-content mb-7 max-w-[400px]" style={{ opacity: 0 }}>
              <p
                className="font-mono text-[8px] tracking-[0.12em] uppercase leading-[2.2]"
                style={{ color: "rgba(168,198,134,0.55)" }}
              >
                {act.countries.slice(0, 12).join("  ·  ")} · +{act.countries.length - 12} more
              </p>
            </div>
          )}

          {/* CTA */}
          {"cta" in act && act.cta && (
            <div className="act-content" style={{ opacity: 0 }}>
              <Link
                href={act.cta.href}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-green text-white text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-green-deep transition-colors duration-300"
              >
                {act.cta.label}
                <ArrowUpRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          )}

        </div>

        {/* Act number — large decorative background numeral */}
        <div
          className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 font-display font-light select-none pointer-events-none"
          style={{
            fontSize: "clamp(14rem, 22vw, 22rem)",
            lineHeight: 1,
            color: isLight ? "rgba(91,140,81,0.04)" : "rgba(168,198,134,0.04)",
          }}
          aria-hidden="true"
        >
          {act.n}
        </div>

      </div>
    );
  }
);

/* ─────────────────────────────────────────────────────────────────────────────
   PLACEHOLDER BACKGROUND — Acts 1, 2, 3
   Replaced with real photography when available.
   ───────────────────────────────────────────────────────────────────────────── */

function PlaceholderBackground({ act }: { act: typeof ACTS[number] }) {
  const gradients: Record<string, string> = {
    "01": "linear-gradient(145deg, #0F2210 0%, #1A3A1A 50%, #0A1808 100%)",
    "02": "linear-gradient(145deg, #1A1A0A 0%, #2E2A12 50%, #0F0E06 100%)",
    "03": "linear-gradient(145deg, #0F2018 0%, #1A3028 50%, #081510 100%)",
  };

  return (
    <>
      <div
        className="absolute inset-0"
        style={{ background: gradients[act.n] || gradients["01"] }}
      />

      {/* Subtle organic noise */}
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden="true" />

      {/* Placeholder marker — visible only in development context */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="text-center max-w-xs"
          style={{ border: "1px dashed rgba(91,140,81,0.12)", padding: "2rem" }}
        >
          <p
            className="font-mono text-[8px] tracking-[0.28em] uppercase leading-relaxed whitespace-pre-line"
            style={{ color: "rgba(91,140,81,0.25)" }}
          >
            {"imagePlaceholder" in act && act.imagePlaceholder
              ? act.imagePlaceholder
              : `Act ${act.n} Photography`}
          </p>
          <p
            className="font-mono text-[7px] tracking-[0.2em] uppercase mt-3"
            style={{ color: "rgba(91,140,81,0.15)" }}
          >
            See MEDIA_NEEDED comment in code
          </p>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   WORLD MAP BACKGROUND — Act 5
   SVG-based simplified world map with animated country dots.
   No photography needed — built entirely in code.
   ───────────────────────────────────────────────────────────────────────────── */

function WorldMapBackground({ dotsActive }: { dotsActive: boolean }) {
  return (
    <div className="absolute inset-0" style={{ backgroundColor: "#1A2E1A" }}>
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden="true" />

      {/* Radial glow from centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 45%, rgba(91,140,81,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      {/* SVG world map — simplified outlines */}
      <svg
        viewBox="0 0 960 480"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.12 }}
        aria-hidden="true"
      >
        {/* Simplified continent outlines — stylised, not geographic precision */}
        {/* North America */}
        <path d="M150 100 L230 90 L250 140 L230 200 L190 220 L150 200 Z" fill="none" stroke="rgba(168,198,134,0.4)" strokeWidth="0.8" />
        {/* Europe */}
        <path d="M240 90 L310 80 L320 130 L290 150 L250 140 Z" fill="none" stroke="rgba(168,198,134,0.4)" strokeWidth="0.8" />
        {/* Africa */}
        <path d="M270 150 L320 140 L330 280 L290 300 L260 260 Z" fill="none" stroke="rgba(168,198,134,0.4)" strokeWidth="0.8" />
        {/* Asia */}
        <path d="M320 80 L620 90 L640 200 L500 220 L320 180 Z" fill="none" stroke="rgba(168,198,134,0.4)" strokeWidth="0.8" />
        {/* Australia */}
        <path d="M620 290 L720 280 L730 360 L660 370 Z" fill="none" stroke="rgba(168,198,134,0.4)" strokeWidth="0.8" />
        {/* South America */}
        <path d="M200 220 L270 200 L280 340 L220 360 L180 300 Z" fill="none" stroke="rgba(168,198,134,0.4)" strokeWidth="0.8" />
        {/* Equator line */}
        <line x1="0" y1="240" x2="960" y2="240" stroke="rgba(168,198,134,0.08)" strokeWidth="0.5" strokeDasharray="4 8" />
      </svg>

      {/* Country dots */}
      <svg
        viewBox="0 0 960 480"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        {MAP_DOTS.map((dot, i) => (
          <g key={dot.label}>
            {/* Pulse ring — active when strip reaches Act 5 */}
            <AnimatePresence>
              {dotsActive && (
                <motion.circle
                  cx={dot.cx}
                  cy={dot.cy}
                  r="6"
                  fill="none"
                  stroke="#5B8C51"
                  strokeWidth="1"
                  initial={{ scale: 0, opacity: 0.6 }}
                  animate={{ scale: [0, 2.5], opacity: [0.5, 0] }}
                  transition={{
                    delay: i * 0.08,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeOut",
                  }}
                  style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
                />
              )}
            </AnimatePresence>
            {/* Core dot */}
            <motion.circle
              cx={dot.cx}
              cy={dot.cy}
              r="2.5"
              fill="#5B8C51"
              initial={{ opacity: 0, scale: 0 }}
              animate={dotsActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "backOut" }}
              style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
            />
          </g>
        ))}
      </svg>

    </div>
  );
}
