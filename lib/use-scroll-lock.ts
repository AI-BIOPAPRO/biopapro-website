"use client";

import { useEffect, type RefObject } from "react";

/**
 * Locks background scroll while a modal/drawer/mobile menu is open.
 *
 * The actual bug here was never Lenis or wheel-event handling — it's a
 * layout shift. Setting `overflow: hidden` removes the scrollbar, which
 * *widens* the viewport by the scrollbar's track width. On a long page full
 * of flex-wrap content (tag pills, nav links, category filters), that
 * width change reflows everything above the fold, and Chrome's scroll
 * anchoring then "corrects" scrollTop to compensate — producing a large,
 * spurious jump the instant the drawer/menu opens, with zero wheel input
 * involved. `scrollbar-gutter: stable` doesn't reliably fix this here
 * because `body` already has `overflow-x: hidden`, which per spec forces
 * its computed `overflow-y` to `auto` — making body (not html) the real
 * scrolling box and complicating which element's gutter would need
 * reserving. The robust, framework-agnostic fix (same one Radix/MUI/
 * Bootstrap use) is simpler: measure the scrollbar's actual width and add
 * it back as `padding-right` while locked, so removing the scrollbar never
 * changes the available content width in the first place.
 *
 * Pass `allowedRef` pointing at the modal's own scrollable container (the
 * element with `overflow-y-auto`) so scrolling inside it keeps working.
 * Omit it (e.g. for a menu with no internal scroll) to block everything.
 */
export function useScrollLock(locked: boolean, allowedRef?: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!locked) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    window.__lenis?.stop();

    const blockIfOutside = (e: Event) => {
      const target = e.target as Node | null;
      if (allowedRef?.current && target && allowedRef.current.contains(target)) return;
      e.preventDefault();
      e.stopImmediatePropagation();
    };

    // Must be non-passive to be preventable; capture so we run before any
    // bubble-phase listener (Lenis) gets a chance to react to the event.
    document.addEventListener("wheel", blockIfOutside, { passive: false, capture: true });
    document.addEventListener("touchmove", blockIfOutside, { passive: false, capture: true });

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      window.__lenis?.start();
      document.removeEventListener("wheel", blockIfOutside, { capture: true });
      document.removeEventListener("touchmove", blockIfOutside, { capture: true });
    };
  }, [locked, allowedRef]);
}
