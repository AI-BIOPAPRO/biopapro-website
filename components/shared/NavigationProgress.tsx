"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export default function NavigationProgress() {
  const pathname  = usePathname();
  const [show, setShow]     = useState(false);
  const [done, setDone]     = useState(false);
  const prevPath  = useRef(pathname);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Start bar on internal link click — fires BEFORE the page changes
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href.startsWith("#")) return;
      if (href === pathname) return;
      clearTimeout(hideTimer.current);
      setDone(false);
      setShow(true);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  // Complete bar when pathname changes (navigation finished)
  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;
    setDone(true);
    hideTimer.current = setTimeout(() => {
      setShow(false);
      setDone(false);
    }, 450);
    return () => clearTimeout(hideTimer.current);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="nav-progress"
          initial={{ scaleX: 0 }}
          animate={done
            ? { scaleX: 1,   opacity: 0, transition: { scaleX: { duration: 0.2 }, opacity: { delay: 0.2, duration: 0.25 } } }
            : { scaleX: 0.75, opacity: 1, transition: { duration: 2.5, ease: "easeOut" } }
          }
          exit={{ opacity: 0 }}
          style={{
            position:        "fixed",
            top:             0,
            left:            0,
            right:           0,
            height:          "3px",
            background:      "#E97316",
            transformOrigin: "left",
            zIndex:          99999,
            pointerEvents:   "none",
          }}
        />
      )}
    </AnimatePresence>
  );
}
