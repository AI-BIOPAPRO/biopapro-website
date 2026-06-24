import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import BrandStrategyDoc from "./components/BrandStrategyDoc";
import InteractiveHero from "./components/InteractiveHero";
import ProductShowcase from "./components/ProductShowcase";
import SustainabilityCalculator from "./components/SustainabilityCalculator";
import ProcurementAdvisor from "./components/ProcurementAdvisor";
import ManufacturingProcess from "./components/ManufacturingProcess";
import CertificationVault from "./components/CertificationVault";
import B2BContactForm from "./components/B2BContactForm";
import { Product } from "./types";
import { BookOpen, Laptop, Trees, ArrowRight, Layers, FileSpreadsheet, Anchor } from "lucide-react";

export default function App() {
  const [viewMode, setViewMode] = useState<"site" | "strategy">("site");
  const [sampleCart, setSampleCart] = useState<Product[]>([]);

  // Smooth scroll helper for quick anchors
  const scrollToIdHandler = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddProductToSampleCart = (product: Product) => {
    // Prevent duplicate entries in sample kit
    setSampleCart((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
    // Anchor down to checkout form automatically to facilitate prompt checkout conversion
    setTimeout(() => {
      scrollToIdHandler("contact-section");
    }, 400);
  };

  const handleRemoveProductFromSampleCart = (product: Product) => {
    setSampleCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  const handleClearSampleCart = () => {
    setSampleCart([]);
  };

  // Inject beautiful Google typography fonts in raw HTML head
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-warm-beige text-warm-dark font-sans selection:bg-warm-primary/35">
      
      {/* Top sticky Navigation center */}
      <Navbar 
        viewMode={viewMode}
        setViewMode={setViewMode}
        sampleCartCount={sampleCart.length}
        onOpenSampleCart={() => scrollToIdHandler("contact-section")}
      />

      {/* Floating Strategy / Site quick links indicator */}
      <div className="bg-warm-dark text-white py-3 px-4 text-center text-xs border-b border-warm-border relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p className="font-sans leading-none">
            🌲 <strong className="font-bold">Biopapro B2B Redesign</strong> — Evaluated on Siberian birch density matrices, extreme heat tolerances, and FDA guidelines.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode(viewMode === "site" ? "strategy" : "site")}
              className="font-mono text-[10px] uppercase font-bold tracking-wider text-warm-primary hover:underline flex items-center gap-1 cursor-pointer"
            >
              {viewMode === "site" ? (
                <>
                  Read Strategic Dossier Book <ArrowRight size={10} />
                </>
              ) : (
                <>
                  Back to Interactive Site Mockup <ArrowRight size={10} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* RENDER MODE A: FRONTEND CUSTOMER INTERACTIVE WEBSITE PREVIEW */}
      {viewMode === "site" ? (
        <main className="animate-fade-in text-warm-dark">
          
          <InteractiveHero 
            onStartCalculator={() => scrollToIdHandler("calculator-section")}
            onStartConsultation={() => scrollToIdHandler("advisor-section")}
          />

          {/* Inline Navigation Rail for quick index validation */}
          <div className="bg-warm-beige/90 backdrop-blur-md border-b border-warm-border py-3.5 sticky top-18 z-40 hidden md:block">
            <div className="max-w-7xl mx-auto px-8 flex items-center justify-between text-xs font-mono font-medium text-warm-muted">
              <span className="text-warm-dark font-bold uppercase tracking-widest text-[9.5px]">SECTION ANCHORS</span>
              <div className="flex gap-7">
                {[
                  { label: "1. Wood Artifacts Catalog", id: "catalog-section" },
                  { label: "2. Carbon Formulas", id: "calculator-section" },
                  { label: "3. Gemini Custom Advisor", id: "advisor-section" },
                  { label: "4. Factory Tour", id: "manufacturing-section" },
                  { label: "5. Certificates Ledger", id: "certifications-section" },
                  { label: "6. Specimen Box Request", id: "contact-section" }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToIdHandler(item.id)}
                    className="hover:text-warm-dark hover:border-b hover:border-warm-primary pb-0.5 transition-colors duration-200 pointer-events-auto cursor-pointer"
                    id={`anchor-btn-${idx}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <ProductShowcase 
            onAddToSampleCart={handleAddProductToSampleCart}
            sampleCartItems={sampleCart}
          />

          <SustainabilityCalculator />

          <ProcurementAdvisor />

          <ManufacturingProcess />

          <CertificationVault />

          <B2BContactForm 
            sampleCartItems={sampleCart}
            onRemoveFromCart={handleRemoveProductFromSampleCart}
            onClearCart={handleClearSampleCart}
          />

        </main>
      ) : (
        /* RENDER MODE B: IMMERSIVE STRATEGIC DOSSIER MANUAL */
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 animate-ease-in select-text">
          <div className="mb-10 text-center max-w-2xl mx-auto space-y-2">
            <h1 className="font-sans font-black text-3xl sm:text-4xl text-warm-primary tracking-tight">
              Biopapro Site Redesign Manual
            </h1>
            <p className="font-sans text-sm text-warm-dark/75 leading-relaxed">
              Below lies the comprehensive interactive blueprint, including complete information architectures, Next.js tech stacks, micro-interaction parameters, and psychological SEO schemas.
            </p>
          </div>

          <BrandStrategyDoc />
        </main>
      )}

      {/* Premium Footing credit */}
      <footer className="bg-warm-dark text-[#FAF9F5]/70 py-12 px-6 border-t border-warm-border/10 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-sans">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-warm-primary text-warm-dark flex items-center justify-center font-bold font-mono">B</div>
              <span className="font-black tracking-wider text-white">BIOPAPRO GLOBAL</span>
            </div>
            <p className="max-w-sm text-[#FAF9F5]/60 leading-relaxed">
              The worldwide vanguard in premium biodegradable white timber processing for airlines, large catering carriers, and standard machinery wrapping lanes. Fully audited, fsc forest steward compliant.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <span className="block font-sans font-bold text-warm-primary uppercase tracking-wider text-[10px]">RELEVANT SITES</span>
            <ul className="space-y-1.5 text-[#FAF9F5]/60">
              <li><a href="https://biopapro.com" target="_blank" className="hover:underline">Official Biopapro Live Index</a></li>
              <li><span className="hover:underline opacity-50 cursor-not-allowed">FSC Certification Database Lookup</span></li>
              <li><span className="hover:underline opacity-50 cursor-not-allowed text-xs">SGS Food-Grade Testing (Geneva Reports)</span></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5">
            <span className="block font-sans font-bold text-warm-primary uppercase tracking-wider text-[10px]">CORPORATE COMPLIANCE</span>
            <p className="text-[#FAF9F5]/60 leading-relaxed">
              Biopapro processes 100% Siberian white birch wood under custom hydrothermal steam setups. Double tumbled for absolute splinter containment. Moisture thresholds certified under 8% to comply with automatic catalog dispensers.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-warm-border/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF9F5]/40 font-mono">
          <p>© 2026 Biopapro Sustainable Materials Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <span>FSC C11204</span>
            <span>FDA CFR 21 APPROVED</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
