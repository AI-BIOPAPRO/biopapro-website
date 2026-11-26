"use client";
import { createContext, useContext } from "react";

export const SplashContext = createContext<{ done: boolean }>({ done: false });
export function useSplash() { return useContext(SplashContext); }
