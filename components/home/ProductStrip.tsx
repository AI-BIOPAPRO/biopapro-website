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
 * for a seamless loop) — no JS animation loop, no library. Pauses on
 * hover/focus so a visitor can actually read a name before it slides past,
 * and respects prefers-reduced-motion by freezing the animation entirely.
 *
 * Each card deep-links straight to that product's own spec drawer on
 * /products (?product=<slug>#catalog) instead of a generic catalog
 * landing or a request-quote form — clicking a specific SKU here shows
 * you that exact SKU's specs, not a detour.
 */

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

function StripCard({ id }: { id: (typeof STRIP_IDS)[number] }) {
  const product = getProductById(id);
  if (!product) return null;

  return (
    <Link
      href={`/products?product=${encodeURIComponent(product.slug)}#catalog`}
      className="group flex-shrink-0 flex flex-col items-center gap-3 px-6"
      aria-label={`View specs for ${product.name}`}
    >
      <div
        className="relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1.5"
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
          className="object-cover transition-transform duration-500 group-hover:scale-110"
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

  return (
    <section
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
          <StripCard key={`${id}-${i}`} id={id} />
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
      `}</style>
    </section>
  );
}
