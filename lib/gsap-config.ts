/**
 * GSAP configuration — client-only.
 * Import this file only inside "use client" components.
 * Registers ScrollTrigger once; safe to import multiple times (gsap deduplicates).
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
