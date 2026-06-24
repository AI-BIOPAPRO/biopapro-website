import React from "react";
import { Trees, Laptop, BookOpen, Layers } from "lucide-react";

interface NavbarProps {
  viewMode: "site" | "strategy";
  setViewMode: (mode: "site" | "strategy") => void;
  sampleCartCount: number;
  onOpenSampleCart: () => void;
}

export default function Navbar({ 
  viewMode, 
  setViewMode, 
  sampleCartCount, 
  onOpenSampleCart 
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-warm-beige/85 backdrop-blur-md border-b border-warm-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo with Warm Organic elegance */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-warm-dark flex items-center justify-center text-warm-primary shadow-sm">
            <Trees size={16} />
          </div>
          <div className="flex flex-col">
            <span className="block font-sans font-black text-base tracking-tight text-warm-dark">
              BIOPAPRO
            </span>
            <span className="block font-mono text-[8.5px] tracking-[0.25em] text-warm-primary/90 -mt-1 font-bold uppercase">
              Engineering Nature
            </span>
          </div>
        </div>

        {/* View Switcher Controls */}
        <div className="flex bg-warm-pale p-1 rounded-xl border border-warm-border gap-1">
          <button
            onClick={() => setViewMode("site")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
              viewMode === "site"
                ? "bg-warm-dark text-white shadow-sm"
                : "text-warm-muted hover:text-warm-dark"
            }`}
            id="nav-preview-mode-btn"
          >
            <Laptop size={13} />
            <span className="hidden sm:inline">Interactive Site Preview</span>
            <span className="sm:hidden">Preview</span>
          </button>
          <button
            onClick={() => setViewMode("strategy")}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
              viewMode === "strategy"
                ? "bg-warm-dark text-white shadow-sm"
                : "text-warm-muted hover:text-warm-dark"
            }`}
            id="nav-strategy-mode-btn"
          >
            <BookOpen size={13} />
            <span className="hidden sm:inline">Strategic Brand Dossier</span>
            <span className="sm:hidden">Strategy</span>
          </button>
        </div>

        {/* Action Button / Sample count with Warm Organic styling */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSampleCart}
            className="relative flex items-center gap-2 px-4 py-2 border border-warm-dark/80 hover:bg-warm-dark hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-wider text-warm-dark rounded-none"
            id="nav-sample-cart-btn"
          >
            <Layers size={13} className="text-warm-primary" />
            <span className="hidden md:inline">Sample Cart</span>
            {sampleCartCount > 0 ? (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-warm-primary text-[10px] font-bold text-warm-dark font-mono animate-pulse">
                {sampleCartCount}
              </span>
            ) : (
              <span className="text-[10px] bg-warm-pale px-1.5 py-0.5 rounded text-warm-muted font-mono">0</span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
