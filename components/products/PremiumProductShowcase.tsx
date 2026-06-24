"use client";

/**
 * PremiumProductShowcase — Phase 1
 *
 * Scroll-driven product storytelling section.
 * As the user scrolls through 400vh of content, the sticky view
 * transitions through Spoon → Fork → Knife → Spork.
 *
 * Architecture:
 *   Outer div (400vh, relative) — creates scroll room
 *   └── Inner div (100vh, sticky top-0) — pins to viewport
 *       ├── ProductImageSlot — image panel (see R3F comment below)
 *       ├── ProductInfoPanel — animated text per product
 *       └── ProgressIndicator — vertical dot scrubber
 *
 * Phase 2 upgrade path:
 *   Replace <ProductImageSlot> content with a <Canvas> + R3F scene.
 *   The container dimensions and scroll logic stay identical.
 */

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Product data ──────────────────────────────────────────────────────────────
// Images: collection hero PNGs — transparent backgrounds, optimised for dark bg
const CDN = "https://biopapro.com/cdn/shop/collections";

const PRODUCTS = [
  {
    id:          "spoon",
    index:       "01",
    name:        "Spoon",
    fullName:    "Birchwood Spoon",
    tagline:     "The everyday essential.",
    description:
      "Precision-stamped from FSC-certified birchwood. Smooth sanded finish, food-safe UV sterilised before packing. The highest-volume SKU in the Biopapro range.",
    specs: [
      { label: "Sizes",    value: "130mm · 160mm · 175mm" },
      { label: "Pack",     value: "500 pcs / OPP bag"     },
      { label: "Material", value: "FSC® Birchwood"        },
    ],
    catalogAnchor: "#spoons",
    // ── PHASE 1: collection PNG with transparent background ──
    // FUTURE R3F MODEL REPLACEMENT: swap this src for a .glb model path
    image: `${CDN}/C5.png?v=1662374075`,
    alt:   "Biopapro Birchwood Spoon",
  },
  {
    id:          "fork",
    index:       "02",
    name:        "Fork",
    fullName:    "Birchwood Fork",
    tagline:     "Precision at every tine.",
    description:
      "Four-tine birchwood fork with chamfered handle. Available individually sleeved or bulk-packed. The anchor product for airline tray setup and food-service operators.",
    specs: [
      { label: "Sizes",    value: "140mm · 160mm · 190mm" },
      { label: "Pack",     value: "500 pcs / OPP bag"     },
      { label: "Material", value: "FSC® Birchwood"        },
    ],
    catalogAnchor: "#forks",
    image: `${CDN}/C4_4.png?v=1662374267`,
    alt:   "Biopapro Birchwood Fork",
  },
  {
    id:          "knife",
    index:       "03",
    name:        "Knife",
    fullName:    "Birchwood Knife",
    tagline:     "Refined. Durable. Biodegradable.",
    description:
      "Serrated-edge knife stamped from rigid birchwood. Handles all food-service applications without flexing. FDA CFR 21 and EU 10/2011 food-contact compliant.",
    specs: [
      { label: "Sizes",     value: "165mm · 190mm"          },
      { label: "Pack",      value: "500 pcs / OPP bag"      },
      { label: "Compliant", value: "FDA CFR 21 · EU 10/2011" },
    ],
    catalogAnchor: "#knives",
    image: `${CDN}/C3_3.png?v=1662374387`,
    alt:   "Biopapro Birchwood Knife",
  },
  {
    id:          "spork",
    index:       "04",
    name:        "Spork",
    fullName:    "Birchwood Spork",
    tagline:     "One piece. Complete service.",
    description:
      "Consolidates fork and spoon into a single utensil — the preferred choice for airlines and catering operators reducing tray setup complexity and packaging cost.",
    specs: [
      { label: "Sizes",        value: "130mm · 140mm · 160mm" },
      { label: "Pack",         value: "500 pcs / OPP bag"     },
      { label: "Preferred by", value: "Airlines · Catering"   },
    ],
    catalogAnchor: "#sporks",
    image: `${CDN}/C2_2.png?v=1663670170`,
    alt:   "Biopapro Birchwood Spork",
  },
] as const;

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const TOTAL    = PRODUCTS.length; // 4

// ── Sub-components ────────────────────────────────────────────────────────────

/**
 * ProductImageSlot
 *
 * PHASE 1: Renders a high-quality PNG with transparent background on a
 *          warm glow pedestal inside the dark section.
 *
 * ── FUTURE R3F MODEL REPLACEMENT ─────────────────────────────────────────────
 * Replace the entire content of this component with:
 *
 *   <Canvas camera={{ position: [0, 0, 3.5], fov: 40 }} style={{ background: "transparent" }}>
 *     <Suspense fallback={null}>
 *       <Environment preset="warehouse" />
 *       <ProductModel
 *         modelPath={product.modelPath}   // e.g. "/models/spoon.glb"
 *         scrollProgress={segmentProgress}
 *       />
 *     </Suspense>
 *     <ambientLight intensity={0.6} />
 *     <directionalLight position={[2, 4, 3]} intensity={1.2} color="#FAF0DC" />
 *   </Canvas>
 *
 * The outer container dimensions, positioning, and z-index stay identical.
 * ─────────────────────────────────────────────────────────────────────────────
 */
function ProductImageSlot({
  product,
  isActive,
  segmentProgress,
}: {
  product: typeof PRODUCTS[number];
  isActive: boolean;
  segmentProgress: number;
}) {
  return (
    // Outer shell — keep these dimensions for R3F replacement
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        opacity:    isActive ? 1 : 0,
        transform:  isActive ? "scale(1)" : "scale(1.04)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
        pointerEvents: "none",
      }}
      aria-hidden={!isActive}
    >
      {/* Warm ambient glow behind product — remove when R3F lighting is in place */}
      <div
        className="absolute rounded-full"
        style={{
          width:      "60vmin",
          height:     "60vmin",
          background: "radial-gradient(circle, rgba(200,154,91,0.12) 0%, transparent 70%)",
          transform:  `scale(${1 + segmentProgress * 0.08})`,
          transition: "transform 0.3s ease",
        }}
      />

      {/* ── PHASE 1 IMAGE — swap this <div> for <Canvas> in Phase 2 ── */}
      <div
        className="relative"
        style={{
          width:     "min(55vmin, 480px)",
          height:    "min(70vmin, 600px)",
          transform: `translateY(${segmentProgress * -12}px)`,
          transition: "transform 0.3s ease",
        }}
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-contain drop-shadow-2xl"
          unoptimized
          priority={isActive}
          sizes="(max-width: 768px) 70vw, 45vw"
          style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.5))" }}
        />
      </div>
    </div>
  );
}

/**
 * ProductInfoPanel — animated text block per product
 * Uses Framer Motion AnimatePresence for slide+fade on product change.
 */
function ProductInfoPanel({ product }: { product: typeof PRODUCTS[number] }) {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.55, ease: EASE_OUT }}
      className="flex flex-col justify-center h-full"
    >
      {/* Index */}
      <p
        className="font-mono text-[11px] uppercase tracking-[0.28em] mb-4"
        style={{ color: "rgba(200,154,91,0.55)" }}
      >
        {product.index} / {String(TOTAL).padStart(2, "0")} &nbsp;·&nbsp; Birchwood Tableware
      </p>

      {/* Product name — large display */}
      <h2
        className="font-display font-light leading-none mb-5"
        style={{
          fontSize:   "clamp(3.5rem, 8vw, 7rem)",
          color:      "#F6F1E8",
          letterSpacing: "-0.01em",
        }}
      >
        {product.name}
      </h2>

      {/* Tagline */}
      <p
        className="font-display font-light italic mb-6"
        style={{ fontSize: "clamp(1rem, 1.6vw, 1.4rem)", color: "#C89A5B" }}
      >
        {product.tagline}
      </p>

      {/* Description */}
      <p
        className="font-sans font-light leading-relaxed mb-8 max-w-[400px]"
        style={{ fontSize: "clamp(0.875rem, 1.05vw, 1rem)", color: "rgba(230,210,185,0.65)" }}
      >
        {product.description}
      </p>

      {/* Specs */}
      <div className="flex flex-col gap-2 mb-8">
        {product.specs.map((spec) => (
          <div key={spec.label} className="flex items-baseline gap-3">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.16em] w-20 flex-shrink-0"
              style={{ color: "rgba(200,154,91,0.5)" }}
            >
              {spec.label}
            </span>
            <span
              className="font-mono text-[12px]"
              style={{ color: "rgba(230,210,185,0.75)" }}
            >
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={`/products${product.catalogAnchor}`}
        className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] group w-fit"
        style={{ color: "#C89A5B" }}
      >
        <span
          className="w-6 h-px transition-all duration-300 group-hover:w-10"
          style={{ background: "#C89A5B" }}
        />
        View in catalog
      </Link>
    </motion.div>
  );
}

/**
 * ProgressIndicator — vertical dot scrubber
 * One dot per product, filled when active.
 */
function ProgressIndicator({
  activeIndex,
  onDotClick,
}: {
  activeIndex: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      {PRODUCTS.map((p, i) => (
        <button
          key={p.id}
          onClick={() => onDotClick(i)}
          aria-label={`Jump to ${p.name}`}
          className="relative flex items-center justify-center w-6 h-6 group"
        >
          <span
            className="block rounded-full transition-all duration-400"
            style={{
              width:      i === activeIndex ? 8 : 5,
              height:     i === activeIndex ? 8 : 5,
              background: i === activeIndex ? "#C89A5B" : "rgba(200,154,91,0.25)",
              border:     i === activeIndex ? "none" : "1px solid rgba(200,154,91,0.35)",
            }}
          />
        </button>
      ))}
      {/* Scroll nudge */}
      <div className="mt-3 flex flex-col items-center gap-1.5">
        <div
          className="w-px"
          style={{ height: 24, background: "rgba(200,154,91,0.2)" }}
        />
        <p
          className="font-mono text-[9px] uppercase tracking-[0.2em]"
          style={{ color: "rgba(200,154,91,0.3)", writingMode: "vertical-rl" }}
        >
          scroll
        </p>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function PremiumProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex,      setActiveIndex]      = useState(0);
  const [segmentProgress,  setSegmentProgress]  = useState(0);

  // ── GSAP ScrollTrigger — drives activeIndex and segmentProgress ──
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger:  containerRef.current,
        start:    "top top",
        end:      "bottom bottom",
        onUpdate: (self) => {
          const progress = self.progress;

          // Which product are we on (0–3)
          const rawIndex = progress * TOTAL;
          const idx      = Math.min(Math.floor(rawIndex), TOTAL - 1);
          setActiveIndex(idx);

          // Fine-grained progress within the current product segment (0–1)
          // Used for the subtle image parallax / entry animation
          const seg = rawIndex - idx;
          setSegmentProgress(seg);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Dot click: scroll to that product's position in the container
  function handleDotClick(index: number) {
    if (!containerRef.current) return;
    const containerTop    = containerRef.current.getBoundingClientRect().top + window.scrollY;
    const containerHeight = containerRef.current.offsetHeight;
    const target = containerTop + (index / TOTAL) * containerHeight;
    window.scrollTo({ top: target, behavior: "smooth" });
  }

  return (
    // ── Outer scroll room — 400vh for 4 products ──
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${TOTAL * 100}vh` }}
      aria-label="Product Showcase — scroll to explore"
    >
      {/* ── Sticky viewport — pins while outer scrolls ── */}
      <div
        className="sticky top-0 overflow-hidden grain"
        style={{ height: "100vh", background: "#1D1610" }}
      >
        {/* Ambient top gradient for depth */}
        <div
          className="absolute inset-x-0 top-0 h-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, rgba(29,22,16,0.8) 0%, transparent 100%)" }}
        />

        {/* ── PRODUCT IMAGE PANEL ── */}
        {/*
          All 4 images are always in the DOM (CSS opacity transition = zero JS overhead).
          Active image: opacity 1, scale 1.
          Inactive images: opacity 0, scale 1.04.
        */}
        <div className="absolute inset-0 z-0">
          {PRODUCTS.map((product, i) => (
            <ProductImageSlot
              key={product.id}
              product={product}
              isActive={i === activeIndex}
              segmentProgress={i === activeIndex ? segmentProgress : 0}
            />
          ))}
        </div>

        {/* ── CONTENT GRID ── */}
        <div className="relative z-20 h-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-8 items-center">

            {/* Left — product info (col 1–5 on desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-center h-full pt-20 pb-10">
              <AnimatePresence mode="wait">
                <ProductInfoPanel
                  key={activeIndex}
                  product={PRODUCTS[activeIndex]}
                />
              </AnimatePresence>
            </div>

            {/* Center/Right — image occupies remaining cols (implicit in absolute panel above) */}
            <div className="hidden lg:block lg:col-span-6" />

            {/* Far right — progress dots (col 12) */}
            <div className="hidden lg:flex lg:col-span-1 justify-center items-center h-full">
              <ProgressIndicator
                activeIndex={activeIndex}
                onDotClick={handleDotClick}
              />
            </div>
          </div>
        </div>

        {/* Mobile progress dots — bottom center */}
        <div className="lg:hidden absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-30">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleDotClick(i)}
              aria-label={`Jump to ${p.name}`}
              style={{
                width:      i === activeIndex ? 20 : 6,
                height:     6,
                borderRadius: 3,
                background: i === activeIndex ? "#C89A5B" : "rgba(200,154,91,0.25)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Section label — top left */}
        <div className="absolute top-24 left-6 md:left-12 lg:left-20 z-30">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.28em]"
            style={{ color: "rgba(200,154,91,0.35)" }}
          >
            Premium Collection
          </p>
        </div>

        {/* Bottom ambient gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10"
          style={{ background: "linear-gradient(to top, rgba(29,22,16,0.6) 0%, transparent 100%)" }}
        />
      </div>
    </div>
  );
}
