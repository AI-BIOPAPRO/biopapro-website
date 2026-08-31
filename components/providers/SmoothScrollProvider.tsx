"use client";

/**
 * SmoothScrollProvider — wraps the entire app with Lenis smooth scroll.
 *
 * Integration notes:
 * - Uses GSAP ticker to drive Lenis (replaces raw requestAnimationFrame).
 *   This is required for GSAP ScrollTrigger scrub animations to stay in sync
 *   with Lenis's virtual scroll position.
 * - gsap.ticker.lagSmoothing(0) prevents GSAP from throttling during
 *   background tabs, which would desync the scroll.
 */

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "@/lib/gsap-config";
import { ScrollTrigger } from "@/lib/gsap-config";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Respect the OS "reduce motion" setting — skip smooth scroll and let the
    // browser scroll natively. ScrollTrigger still works against native scroll.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker to drive the Lenis raf loop
    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
