"use client";

/**
 * In Action — editorial lifestyle photography section
 * Large side-by-side real food photos with bold text overlay
 */

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ScrollFloat } from "@/components/reactbits";

const E = [0.16, 1, 0.3, 1] as const;

const PHOTOS = [
  {
    src:     "/lifestyle/salad-bowl.jpg",
    alt:     "Biopapro birchwood fork and spoon with a fresh salad bowl",
    label:   "EVERYDAY SERVICE",
    sub:     "Restaurants · Cafeterias · Hotels",
    accent:  "#E97316",
    wide:    true,
  },
  {
    src:     "/lifestyle/cake-slice.jpg",
    alt:     "Biopapro birchwood fork and spoon plated with layered cake",
    label:   "DESSERT & CATERING",
    sub:     "Events · Bakeries · Fine Dining",
    accent:  "#E97316",
    wide:    false,
  },
] as const;

export default function InUse() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ background: "#F5F0E6" }}
      aria-label="Biopapro cutlery in real use"
    >
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: E }}
          className="flex items-end justify-between gap-6 flex-wrap"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: "#E97316" }}>08</span>
              <span className="w-5 h-px" style={{ background: "rgba(233,115,22,0.3)" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em]" style={{ color: "#1A1208" }}>In Action</span>
            </div>
            <h2
              style={{
                fontFamily:    "'Outfit', sans-serif",
                fontWeight:    900,
                fontSize:      "clamp(2.4rem, 5vw, 5rem)",
                lineHeight:    0.92,
                letterSpacing: "-0.03em",
                color:         "#1A1208",
              }}
            >
              REAL FOOD.
              <br />
              <span style={{ color: "#E97316" }}>REAL TABLES.</span>
            </h2>
          </div>
          <p className="font-sans text-sm leading-relaxed max-w-[280px]" style={{ color: "#7A6B54" }}>
            From farm-to-table salads to wedding desserts — birchwood shows up beautifully.
          </p>
        </motion.div>
      </div>

      {/* Photo grid */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.label}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.7, ease: E }}
              className={`relative overflow-hidden group ${photo.wide ? "md:col-span-3" : "md:col-span-2"}`}
              style={{ borderRadius: "8px", minHeight: "420px" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={photo.wide ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(26,18,8,0.88) 0%, rgba(26,18,8,0.2) 50%, transparent 100%)",
                }}
              />

              {/* Text overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <span
                  className="inline-block font-mono text-[10px] font-bold uppercase tracking-[0.28em] px-2.5 py-1 mb-3"
                  style={{ background: photo.accent, color: "#FFFFFF", borderRadius: "2px" }}
                >
                  {photo.label}
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {photo.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
