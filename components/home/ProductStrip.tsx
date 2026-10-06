"use client";

/**
 * S2 — Product Strip
 *
 * Replaces the single rotating product card that used to float inside the
 * hero. Instead: a continuous, self-sliding strip of real catalog SKUs
 * sitting directly below the hero — reads as "look how many we make," not
 * "here's one product," and frees the hero from carrying that job itself.
 *
 * Pure CSS marquee (translateX keyframe on a flex row, list duplicated once
 * for a seamless loop) drives the base sliding motion — cheap, GPU-composited,
 * no JS in that part. Layered on top: a lightweight requestAnimationFrame
 * loop gives each card a live depth-of-field "spotlight" — cards sharpen and
 * grow slightly as they cross the center of the strip, and soften/shrink
 * toward the edges, echoing the shallow depth-of-field already established
 * in the hero video rather than reading as a flat, generic logo marquee.
 * This needs live getBoundingClientRect() measurement (not just a CSS
 * per-card animation-delay trick) because it has to stay correct regardless
 * of card width, gap, or marquee speed if any of those change later.
 *
 * Pauses on hover/focus so a visitor can actually read a name before it
 * slides past, and both the slide and the spotlight effect freeze entirely
 * under prefers-reduced-motion.
 *
 * Each card deep-links straight to that product's own spec drawer on
 * /products (?product=<slug>#catalog) instead of a generic catalog
 * landing or a request-quote form — clicking a specific SKU here shows
 * you that exact SKU's specs, not a detour.
 */

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getProductById } from "@/lib/products-data";

// Same highlighted SKUs used as "representative" products elsewhere —
// one from most categories so the strip reads as the full range, not a
// repeat of any single family.
const STRIP_IDS = [
  "fork-160",
  "spoon-160",
  "knife-165",
  "spork-140",
  "stirrer-140",
  "skewer-10cm",
  "set-fork-knife-tissue",
  "straw-8mm",
] as const;

function StripCard({
  id,
  focusRef,
}: {
  id: (typeof STRIP_IDS)[number];
  focusRef: (el: HTMLDivElement | null) => void;
}) {
  const product = getProductById(id);
  if (!product) return null;

  return (
    <Link
      href={`/products?product=${encodeURIComponent(product.slug)}#catalog`}
      className="group flex-shrink-0 flex flex-col items-center gap-3 px-6"
      aria-label={`View specs for ${product.name}`}
    >
      {/* This wrapper reads the live spotlight values through CSS custom
          properties (set by the rAF loop below) rather than a direct
          style.transform — that's what lets the :hover rule in the
          <style> block cleanly override it with its own scale/blur/z-index
          on mouseover instead of the two fighting over the same inline
          style every animation frame. */}
      <div ref={focusRef} className="product-strip-focus" style={{ willChange: "transform, filter, opacity" }}>
        <div
          className="relative overflow-hidden"
          style={{
            width: 140,
            height: 140,
            borderRadius: "20px",
            background: "linear-gradient(155deg, #F2EBDD 0%, #E7DCC7 100%)",
            border: "1px solid #DDD3C5",
            boxShadow: "0 10px 24px rgba(44,36,27,0.1)",
          }}
        >
          <Image
            src={product.primaryImage}
            alt={product.name}
            fill
            className="object-cover"
            sizes="140px"
          />
          {/* Category pill */}
          <span
            className="absolute top-2.5 left-2.5 font-mono text-[9px] uppercase tracking-[0.12em] px-2 py-1"
            style={{ background: "rgba(29,22,16,0.68)", color: "#E5C99A", backdropFilter: "blur(3px)" }}
          >
            {product.category}
          </span>
          {/* Hover reveal — reinforces that the card is clickable, not just decorative */}
          <div
            className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 py-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
            style={{ background: "linear-gradient(to top, rgba(74,122,61,0.92) 0%, transparent 100%)" }}
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              View Specs
            </span>
            <ArrowUpRight size={10} strokeWidth={2.5} className="text-white" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="font-sans text-[12px] font-semibold text-ink whitespace-nowrap transition-colors duration-200 group-hover:text-[#4A7A3D]">
          {product.name}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted mt-0.5">
          {product.length} &middot; {product.material}
        </p>
      </div>
    </Link>
  );
}

export default function ProductStrip() {
  // Rendered twice back-to-back; the keyframe slides the whole track left
  // by exactly one copy's width (-50%), so the moment the first copy has
  // scrolled fully out of view, the second copy is sitting exactly where
  // the first one started — the loop point is invisible.
  const track = [...STRIP_IDS, ...STRIP_IDS];

  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return; // leave every card at its default, sharp, unscaled state

    let rafId: number;

    const tick = () => {
      const section = sectionRef.current;
      if (!section) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const sectionRect = section.getBoundingClientRect();
      const centerX = sectionRect.left + sectionRect.width / 2;
      // Half the strip's own width — the distance over which a card goes
      // from fully in-focus (at center) to fully soft (at the edge fades).
      const falloff = sectionRect.width / 2.4;

      for (const el of cardRefs.current) {
        if (!el) continue;
        const cardRect = el.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const distance = Math.min(Math.abs(cardCenterX - centerX) / falloff, 1);
        // Eased falloff (not linear) so cards hold near-full focus longer
        // through the middle of the strip and only soften noticeably near
        // the edges, instead of visibly shrinking the moment they're off-center.
        const eased = distance * distance;

        const scale = 1.12 - eased * 0.22; // 1.12 at center -> 0.9 at the edge
        const blur = eased * 3.5; // 0px at center -> 3.5px at the edge
        const opacity = 1 - eased * 0.5; // 1 at center -> 0.5 at the edge

        // Set as CSS custom properties, not a direct style.transform/filter —
        // the .product-strip-focus rule below reads these through var(), which
        // keeps this on the stylesheet cascade instead of an inline style. That
        // means the plain CSS :hover rule for the magnify-on-hover effect can
        // cleanly override transform/filter/opacity itself without this rAF
        // loop fighting it and winning every ~16ms (an inline style always
        // beats a stylesheet rule, hover or not, which was the actual problem
        // with the first version of this effect).
        el.style.setProperty("--spotlight-scale", scale.toFixed(3));
        el.style.setProperty("--spotlight-blur", `${blur.toFixed(2)}px`);
        el.style.setProperty("--spotlight-opacity", opacity.toFixed(3));
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-9 pb-10 md:pt-11 md:pb-12"
      style={{ background: "#FBF8F2", borderBottom: "1px solid #EDE5D8" }}
      aria-label="Product range preview"
    >
      {/* Small context label — the strip otherwise floats with no framing */}
      <div className="flex items-center justify-center gap-3 mb-6 px-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em]" style={{ color: "#4A7A3D" }}>
          30+ SKUs
        </span>
        <span className="block w-5 h-px" style={{ background: "#DDD3C5" }} />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
          The Full Range
        </span>
      </div>

      {/* Edge fades so cards don't look like they're cut off mid-frame */}
      <div
        className="absolute inset-y-0 left-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #FBF8F2 0%, transparent 100%)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 md:w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #FBF8F2 0%, transparent 100%)" }}
      />

      <div className="product-strip-track flex items-start w-max">
        {track.map((id, i) => (
          <StripCard
            key={`${id}-${i}`}
            id={id}
            focusRef={(el) => { cardRefs.current[i] = el; }}
          />
        ))}
      </div>

      <style>{`
        .product-strip-track {
          animation: product-strip-scroll 32s linear infinite;
        }
        .product-strip-track:hover,
        .product-strip-track:focus-within {
          animation-play-state: paused;
        }
        @keyframes product-strip-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .product-strip-track {
            animation: none;
          }
        }

        /* Base state — driven live by the rAF loop's custom properties */
        .product-strip-focus {
          transform: scale(var(--spotlight-scale, 1));
          filter: blur(var(--spotlight-blur, 0px));
          opacity: var(--spotlight-opacity, 1);
        }
        /* Magnify-on-hover, dock-icon style. A plain CSS rule (not an
           inline style) so it genuinely overrides the custom-property-driven
           transform/filter/opacity above via the cascade, instead of fighting
           the rAF loop over the same property every frame. transition only
           applies here, not on the base rule — the base state is already
           continuously animated every frame by JS, and adding a transition
           there would fight that smoothness rather than add to it. */
        .product-strip-focus:hover {
          transform: scale(1.32) translateY(-10px);
          filter: blur(0px);
          opacity: 1;
          transition: transform 0.28s cubic-bezier(0.16,1,0.3,1), filter 0.28s ease;
          z-index: 20;
          position: relative;
        }
      `}</style>
    </section>
  );
}
