"use client";

import { useState } from "react";
import SplashLoader from "@/components/shared/SplashLoader";

export default function SplashProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  return (
    <>
      {!done && <SplashLoader onDone={() => setDone(true)} />}
      {children}
    </>
  );
}
