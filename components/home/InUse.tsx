"use client";

/**
 * In Use — real food, real hands, real table.
 *
 * Almost every other image on the site is a product floating alone on a
 * studio background — clean, but static. This section exists to break
 * that pattern: two real photos of the cutlery actually being used,
 * so the page has at least one moment that feels alive rather than
 * catalogued.
 */

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import SectionLabel from "@/components/shared/SectionLabel";

const EASE = [0.16, 1, 0.3, 1] as const;

const PHOTOS = [
  {
    src: "/lifestyle/salad-bowl.jpg",
    alt: "Biopapro birchwood fork and spoon served with a fresh salad bowl",
    caption: "Everyday service",
  },
  {
    src: "/lifestyle/cake-slice.jpg",
    alt: "Biopapro birchwood fork and spoon plated with a slice of layered cake",
    caption: "Dessert & catering",
  },
] as const;

export default function InUse() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section style={{ background: "#F6F1E8" }} className="paper">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-7"
        >
          <SectionLabel index="—" label="In Use" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          className="font-display font-light text-ink leading-[0.95] mb-12 md:mb-14 max-w-xl"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}
        >
          Not just a fork.
          <br />
          <span style={{ color: "#4A7A3D" }}>A table set.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE, delay: 0.18 + i * 0.12 }}
              className="group relative overflow-hidden"
              style={{ aspectRatio: "4 / 5", border: "1px solid #DDD3C5" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-5 py-4"
                style={{ background: "linear-gradient(to top, rgba(29,22,16,0.72) 0%, transparent 100%)" }}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white">
                  {photo.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
