import React, { useState } from "react";
import { MANUFACTURING_STEPS } from "../data";
import { TreePine, Scissors, Layers, Flame, Sparkles, Boxes, Play, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "TreePine": return <TreePine size={16} />;
      case "Scissors": return <Scissors size={16} />;
      case "Layers": return <Layers size={16} />;
      case "FlameKindling": return <Flame size={16} />;
      case "Sparkles": return <Sparkles size={16} />;
      case "Boxes": return <Boxes size={16} />;
      default: return <TreePine size={16} />;
    }
  };

  return (
    <section className="py-16 bg-warm-beige border-b border-warm-border" id="manufacturing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-[10px] tracking-[0.3em] text-warm-primary uppercase font-bold block mb-1">
            INDUSTRIAL TRANSPARENCY
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-warm-dark tracking-tight">
            The Biopapro <span style={{ fontFamily: "'Georgia', serif" }} className="text-warm-primary italic font-normal">Virtual Manufacturative</span> Tour.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-warm-muted mt-2 leading-relaxed">
            Trace the mechanical processing path of premium northern white timber from sustainable harvest zones into satin-polished, food-safe consumer utensils. Complete physical tracking at every node.
          </p>
        </div>

        {/* Dynamic Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Vertical Step Selector Array */}
          <div className="lg:col-span-5 space-y-2">
            {MANUFACTURING_STEPS.map((step) => {
              const isActive = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`w-full flex items-center gap-4 p-4 rounded-none text-left border transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    isActive 
                      ? "bg-warm-dark text-white border-warm-dark shadow-sm" 
                      : "bg-warm-cream/50 border-warm-border text-warm-dark/70 hover:bg-warm-pale"
                  }`}
                  id={`mfg-step-btn-${step.step}`}
                >
                  <span className="font-mono text-xs font-bold bg-white/10 text-white/80 px-2.5 py-1 rounded-none">
                    0{step.step}
                  </span>
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest opacity-65">
                      {step.phase}
                    </span>
                    <span className="block font-sans font-bold text-xs sm:text-sm -mt-0.5">
                      {step.title}
                    </span>
                  </div>
                  {isActive && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-30 text-white">
                      {getStepIcon(step.icon)}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Informative Spec Screen */}
          <div className="lg:col-span-7 bg-warm-cream border border-warm-border rounded-none p-6 sm:p-8 flex flex-col justify-between text-warm-dark">
            <AnimatePresence mode="wait">
              {MANUFACTURING_STEPS.map((step) => {
                if (step.step !== activeStep) return null;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Step Stage and Category icon header */}
                      <div className="flex justify-between items-center border-b border-warm-border pb-3">
                        <span className="font-mono text-[10px] uppercase font-bold text-warm-primary tracking-wider">
                          Manufacturing Phase 0{step.step} / {step.phase}
                        </span>
                        <span className="p-2 bg-warm-primary/10 rounded-none text-warm-primary">
                          {getStepIcon(step.icon)}
                        </span>
                      </div>

                      {/* Detailed explanatory copywriting */}
                      <h3 style={{ fontFamily: "'Georgia', serif" }} className="text-xl italic font-normal text-warm-dark mt-4">
                        {step.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed mt-2.5">
                        {step.description}
                      </p>

                      {/* Calibrated Machinery values */}
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-warm-pale p-3 rounded-none border border-warm-border text-[11px] font-mono text-warm-dark">
                          <span className="font-bold text-warm-primary block uppercase mb-0.5">Calibrated Machinery</span>
                          High-Core Precision Rotary Die Lines
                        </div>
                        <div className="bg-warm-pale p-3 rounded-none border border-warm-border text-[11px] font-mono text-warm-dark">
                          <span className="font-bold text-warm-primary block uppercase mb-0.5">Critical Tolerance Limits</span>
                          Strictly &lt; 0.05% margin
                        </div>
                      </div>
                    </div>

                    {/* Safe Operational parameters disclaimer */}
                    <div className="mt-8 pt-4 border-t border-warm-border text-[10px] font-mono text-warm-muted flex items-center justify-between">
                      <span>AUDIT CODE: LAB-ISO-9001</span>
                      <span className="flex items-center gap-1">
                        <Play size={10} className="fill-current text-warm-primary" /> Active telemetry log
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
