"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function NavigationProgress() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const prev = useRef(pathname);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (pathname !== prev.current) {
      prev.current = pathname;
      clearTimeout(timer.current);
      setShow(true);
      timer.current = setTimeout(() => setShow(false), 700);
    }
    return () => clearTimeout(timer.current);
  }, [pathname]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="nav-bar"
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
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
