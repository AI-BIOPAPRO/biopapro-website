import type Lenis from "lenis";

declare global {
  interface Window {
    // Set by SmoothScrollProvider while mounted. Any modal/drawer/mobile menu
    // that locks body scroll should also call __lenis?.stop() / .start() —
    // Lenis intercepts wheel/touch events directly and ignores
    // document.body.style.overflow entirely.
    __lenis?: Lenis;
  }
}

export {};
