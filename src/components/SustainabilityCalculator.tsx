import React, { useState } from "react";
import { SUSTAINABLE_MATRIX_METRICS } from "../data";
import { Trees, Trash2, Droplet, Globe, Leaf } from "lucide-react";
import { motion } from "motion/react";

export default function SustainabilityCalculator() {
  const [weeklyVolume, setWeeklyVolume] = useState<number>(50000);

  // Math equations for dynamic ecological conversion calculation
  const annualQuantity = weeklyVolume * 52;
  const carbonSavedKg = (annualQuantity / 1000) * SUSTAINABLE_MATRIX_METRICS.carbonSavedKgPerThousand;
  const rawPlasticTonsPrevented = (annualQuantity * 3.5) / 1000000; // Assuming 3.5g average weight per plastic cutlery item
  const waterLitersPreserved = (annualQuantity / 1000) * SUSTAINABLE_MATRIX_METRICS.waterLitersPreservedPerThousand;
  const treesPlantedEquivalent = carbonSavedKg / 21.8; // 21.8kg carbon absorbed per year by a growing tree
  const oceanPlasticsAvoided = annualQuantity;

  return (
    <section className="py-16 bg-warm-beige border-b border-warm-border" id="calculator-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left instructions and range sliders */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-warm-primary uppercase font-bold block mb-1">
                ECOLOGICAL MATHEMATICS
              </span>
              <h2 className="font-sans font-black text-3xl text-warm-dark tracking-tight leading-tight">
                Calculate Your <span style={{ fontFamily: "'Georgia', serif" }} className="text-warm-primary italic font-normal">Decarbonization Value</span>.
              </h2>
              <p className="font-sans text-xs sm:text-sm text-warm-muted mt-2 leading-relaxed">
                Enter your hospitality branch, airline service, or franchise hub volume specifications. Our algorithms convert physical volumes into verifiable ESG accounting parameters instantly.
              </p>
            </div>

            {/* Input Slider Container */}
            <div className="bg-warm-pale p-6 border border-warm-border space-y-5 rounded-none">
              <div className="flex justify-between items-center">
                <label htmlFor="weekly-volume-slider" className="font-sans font-bold text-[10px] tracking-wider text-warm-dark uppercase">
                  Weekly Tableware Volume Used
                </label>
                <div className="font-mono text-xs font-bold text-warm-dark bg-warm-cream px-2.5 py-1 select-none border border-warm-border rounded-none shadow-sm">
                  {weeklyVolume.toLocaleString()} units
                </div>
              </div>

              <input
                id="weekly-volume-slider"
                type="range"
                min="5000"
                max="500000"
                step="5000"
                value={weeklyVolume}
                onChange={(e) => setWeeklyVolume(Number(e.target.value))}
                className="w-full h-1.5 bg-warm-border rounded-none appearance-none cursor-pointer accent-warm-dark"
              />

              <div className="flex justify-between text-[9px] font-mono text-warm-muted">
                <span>5,000 / wk</span>
                <span>250,000 / wk</span>
                <span>500,000 / wk</span>
              </div>

              {/* Presets Button Array */}
              <div className="pt-2 border-t border-warm-border/50">
                <span className="block font-sans text-[10px] font-bold text-warm-muted uppercase mb-1.5">
                  Corporate Enterprise Estimates
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: "Boutique Cafe Chain", val: 12000 },
                    { label: "Fast Casual Franchise", val: 65000 },
                    { label: "International Carrier", val: 250000 }
                  ].map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => setWeeklyVolume(preset.val)}
                      className="px-2.5 py-1 bg-warm-cream border border-warm-border text-warm-dark text-[10px] font-bold hover:border-warm-primary hover:bg-warm-pale transition-colors duration-200 rounded-none cursor-pointer"
                      id={`preset-btn-${idx}`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right outputs / carbon savings meters */}
          <div className="lg:col-span-7">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card A: Plastic Tonnes saved */}
              <div className="bg-warm-cream p-5 border border-warm-border space-y-3 rounded-none">
                <div className="flex justify-between items-start">
                  <span className="p-2 bg-warm-primary/10 text-warm-primary">
                    <Trash2 size={16} />
                  </span>
                  <span className="font-mono text-[9px] text-warm-muted uppercase font-bold">ANNUAL VALUE</span>
                </div>
                <div>
                  <span style={{ fontFamily: "'Georgia', serif" }} className="block text-3xl font-light italic text-warm-dark">
                    {rawPlasticTonsPrevented.toFixed(2)} t
                  </span>
                  <span className="block font-sans text-xs font-bold text-warm-dark">Petrochemical Plastic Avoided</span>
                  <span className="block font-sans text-[11px] text-warm-muted leading-relaxed mt-1">Replacing 3.5g virgin plastic forks and knives with organic wood grain.</span>
                </div>
              </div>

              {/* Card B: Carbon saved */}
              <div className="bg-warm-cream p-5 border border-warm-border space-y-3 rounded-none">
                <div className="flex justify-between items-start">
                  <span className="p-2 bg-warm-primary/10 text-warm-primary">
                    <Leaf size={16} />
                  </span>
                  <span className="font-mono text-[9px] text-warm-muted uppercase font-bold">ANNUAL VALUE</span>
                </div>
                <div>
                  <span style={{ fontFamily: "'Georgia', serif" }} className="block text-3xl font-light italic text-warm-primary">
                    {carbonSavedKg.toLocaleString(undefined, { maximumFractionDigits: 0 })} kg CO₂
                  </span>
                  <span className="block font-sans text-xs font-bold text-warm-dark">Net Biogenic Carbon Saved</span>
                  <span className="block font-sans text-[11px] text-warm-muted leading-relaxed mt-1">Direct greenhouse gas compensation relative to refinery outputs.</span>
                </div>
              </div>

              {/* Card C: Trees Equivalent */}
              <div className="bg-warm-cream p-5 border border-warm-border space-y-3 rounded-none">
                <div className="flex justify-between items-start">
                  <span className="p-2 bg-warm-primary/10 text-warm-primary">
                    <Trees size={16} />
                  </span>
                  <span className="font-mono text-[9px] text-warm-muted uppercase font-bold">ANNUAL EQUIVALENT</span>
                </div>
                <div>
                  <span style={{ fontFamily: "'Georgia', serif" }} className="block text-3xl font-light italic text-warm-dark">
                    {treesPlantedEquivalent.toLocaleString(undefined, { maximumFractionDigits: 0 })} Trees
                  </span>
                  <span className="block font-sans text-xs font-bold text-warm-dark">Forest Absorption equivalent</span>
                  <span className="block font-sans text-[11px] text-warm-muted leading-relaxed mt-1">The annual carbon intake capacity of growing woodland groves.</span>
                </div>
              </div>

              {/* Card D: Water / Ocean Protection */}
              <div className="bg-warm-cream p-5 border border-warm-border space-y-3 rounded-none">
                <div className="flex justify-between items-start">
                  <span className="p-2 bg-warm-primary/10 text-warm-primary">
                    <Droplet size={16} />
                  </span>
                  <span className="font-mono text-[9px] text-warm-muted uppercase font-bold">ANNUAL SAVINGS</span>
                </div>
                <div>
                  <span style={{ fontFamily: "'Georgia', serif" }} className="block text-3xl font-light italic text-warm-dark">
                    {waterLitersPreserved.toLocaleString(undefined, { maximumFractionDigits: 0 })} L
                  </span>
                  <span className="block text-xs font-bold text-warm-dark">Aquatic Water Table Savings</span>
                  <span className="block text-[11px] text-warm-muted leading-relaxed mt-1">High-pressure steam wood forming avoids toxic industrial wash pipelines.</span>
                </div>
              </div>

            </div>

            {/* Factual Disclaimer with warm organic texture */}
            <div className="mt-4 p-3 bg-warm-pale/60 border border-warm-border rounded-none text-[9.5px] font-mono text-warm-muted leading-normal">
              *Calculations are calibrated on validated life-cycle analysis (LCA) matrices under ASTM and ISO carbon monitoring models. Reference dataset: FSC 100% Siberian Birchwood carbon biogenic retention vectors.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
