"use client";

/**
 * ProductScrollBackground — Phase 1 Foundation
 *
 * CURRENT STATUS: Not mounted. To activate, import this component in
 * app/products/ProductsClient.tsx and add <ProductScrollBackground />
 * as the first child of <main>.
 *
 * PHASE 1 (current): GSAP ScrollTrigger monitors each product family
 * section anchor. On entry, the corresponding product image fades in
 * at low opacity behind page content. On exit, it fades out.
 *
 * PHASE 2 (future): Full Apple-style product storytelling with
 * high-res renders, scrub-tied scroll animations, and 3D transforms.
 * See TASKS.md > Future Enhancements for full spec.
 */

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CDN = "https://biopapro.com/cdn/shop/products";

// Map each section anchor to its background product image
const SECTION_IMAGES: { anchor: string; src: string; alt: string }[] = [
  {
    anchor: "forks",
    src: `${CDN}/W7_1_713c7c76-f698-4bb9-9de4-1d75c61e9853.jpg`,
    alt: "Wooden Fork 160mm",
  },
  {
    anchor: "spoons",
    src: `${CDN}/W3_1_ac837677-7a66-4363-bb00-675eb726043d.jpg`,
    alt: "Wooden Spoon 160mm",
  },
  {
    anchor: "knives",
    src: `${CDN}/W1_1_beb99461-f1f0-41b4-bf81-20b902898748.jpg`,
    alt: "Wooden Knife 165mm",
  },
  {
    anchor: "sporks",
    src: `${CDN}/W9_1.png?v=1662714451`,
    alt: "Wooden Spork 140mm",
  },
  {
    anchor: "stirrers",
    src: `${CDN}/W20_f40b8f4a-3ebe-4145-b013-43d53ebb9a1b.png`,
    alt: "Wooden Stirrer 140mm",
  },
  {
    anchor: "skewers",
    src: `${CDN}/W26_1_b883d15b-dfbf-46ca-b101-9a413464dfd3.jpg`,
    alt: "Gun Skewer 15cm",
  },
  {
    anchor: "sets",
    src: `${CDN}/G52_1.jpg?v=1664961427`,
    alt: "Birchwood Cutlery Set",
  },
];

export default function ProductScrollBackground() {
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    // Clean up any existing triggers
    triggersRef.current.forEach((t) => t.kill());
    triggersRef.current = [];

    SECTION_IMAGES.forEach(({ anchor }) => {
      const el = document.getElementById(anchor);
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => setActiveAnchor(anchor),
        onEnterBack: () => setActiveAnchor(anchor),
        onLeave: () => setActiveAnchor(null),
        onLeaveBack: () => setActiveAnchor(null),
      });

      triggersRef.current.push(trigger);
    });

    return () => {
      triggersRef.current.forEach((t) => t.kill());
    };
  }, []);

  const activeImage = SECTION_IMAGES.find((s) => s.anchor === activeAnchor);

  return (
    // Fixed behind all page content — content must have position: relative + z-index: 1
    <div
      className="fixed inset-0 pointer-events-none select-none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      {activeImage && (
        <div
          className="absolute inset-0 flex items-center justify-end pr-[8vw]"
          style={{
            opacity: 0.05,
            transition: "opacity 0.8s ease",
          }}
        >
          <div
            className="relative"
            style={{
              width: "min(55vw, 700px)",
              height: "min(75vh, 800px)",
            }}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              unoptimized
              priority={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
