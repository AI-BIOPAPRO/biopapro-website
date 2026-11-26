"use client";

import { useState } from "react";
import SplashLoader from "@/components/shared/SplashLoader";
import { SplashContext } from "@/context/SplashContext";

export default function SplashProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  return (
    <SplashContext.Provider value={{ done }}>
      {!done && <SplashLoader onDone={() => setDone(true)} />}
      {children}
    </SplashContext.Provider>
  );
}
