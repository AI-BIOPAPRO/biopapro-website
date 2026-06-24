import React, { useState } from "react";
import { MessageSquareCode, Sparkles, Send, Brain, Building2, Utensils, Boxes, CheckCircle2 } from "lucide-react";

export default function ProcurementAdvisor() {
  const [businessName, setBusinessName] = useState("");
  const [weeklyVolume, setWeeklyVolume] = useState("50000");
  const [mealType, setMealType] = useState("Premium Coffee Shop & Patisserie");
  const [productInterest, setProductInterest] = useState("Classic 140mm Coffee Stirrers & Individual Paper Wraps");
  const [customLogo, setCustomLogo] = useState(false);
  
  const [report, setReport] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorCode, setErrorCode] = useState<string | null>(null);

  const handleFetchReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setReport(null);
    setErrorCode(null);

    try {
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          businessName,
          volume: weeklyVolume,
          mealType,
          productInterest,
          customLogo
        })
      });

      const data = await response.json();
      if (response.ok && data.report) {
        setReport(data.report);
      } else {
        setErrorCode(data.error || "A secure server connection failed. Please try again.");
      }
    } catch (err: any) {
      setErrorCode("Could not communicate with the Biopapro AI core. Please verify your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const menuStyles = [
    "Premium Coffee Shop & Patisserie",
    "Airline Catering & Long-Haul Meal Services",
    "Fast-Casual Organic Bowl Franchise",
    "Wholesale Eco Food Packaging Distributor",
    "High-Volume Ice Cream/Dairy Manufacturing Line"
  ];

  const productTypes = [
    "Classic 140mm Coffee Stirrers & Individual Paper Wraps",
    "Premium Heavy-Duty Cutlery Packets (Fork + Spoon + Knife + Napkin)",
    "Calibrated Industrial Ice Cream Paddles",
    "Super-Rigid Anti-Charring BBQ bamboo/birchwood skewers",
    "Fully-Custom Logo Embossed Wooden Utensils"
  ];

  return (
    <section className="py-16 bg-warm-beige border-b border-warm-border" id="advisor-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="p-2.5 bg-warm-primary/10 text-warm-primary inline-flex mb-3">
            <Brain size={20} className="animate-pulse" />
          </span>
          <span className="block font-mono text-[10px] tracking-[0.3em] text-warm-primary uppercase font-bold">
            INTELLIGENT MATERIALS EXPERT
          </span>
          <h2 className="font-sans font-black text-3xl text-warm-dark tracking-tight mt-1 leading-tight">
            Automated Custom Spec & <span style={{ fontFamily: "'Georgia', serif" }} className="text-warm-primary italic font-normal">Procurement Advisor</span>.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-warm-muted mt-2 max-w-xl mx-auto leading-relaxed">
            Our server-side digital advisor evaluates thermal, moisture, density, and container transit packing metrics matching your direct parameters to output high-accuracy pricing templates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:max-w-6xl mx-auto">
          
          {/* Interaction Form Card */}
          <div className="lg:col-span-5 bg-warm-cream border border-warm-border p-6 sm:p-8 rounded-none">
            <h3 className="font-sans font-bold text-xs text-warm-dark uppercase tracking-widest mb-6 pb-2 border-b border-warm-border font-mono">
              Corporate Configurations
            </h3>
            
            <form onSubmit={handleFetchReport} className="space-y-5">
              
              {/* Business Name */}
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-warm-dark uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 size={13} className="text-warm-primary" />
                  Company / Organization Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Horizon Air Service"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-warm-pale border border-warm-border rounded-none text-xs text-warm-dark focus:outline-none focus:border-warm-primary"
                  required
                />
              </div>

              {/* Service profile / Culinary style */}
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-warm-dark uppercase tracking-wider flex items-center gap-1.5">
                  <Utensils size={13} className="text-warm-primary" />
                  Primary Culinary / Service Domain
                </label>
                <select
                  value={mealType}
                  onChange={(e) => setMealType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-warm-pale border border-warm-border rounded-none text-xs text-warm-dark focus:outline-none focus:border-warm-primary font-sans"
                >
                  {menuStyles.map((style, idx) => (
                    <option key={idx} value={style}>{style}</option>
                  ))}
                </select>
              </div>

              {/* Product specifications of Interest */}
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-warm-dark uppercase tracking-wider flex items-center gap-1.5">
                  <Boxes size={13} className="text-warm-primary" />
                  Target Material Shape
                </label>
                <select
                  value={productInterest}
                  onChange={(e) => setProductInterest(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-warm-pale border border-warm-border rounded-none text-xs text-warm-dark focus:outline-none focus:border-warm-primary font-sans"
                >
                  {productTypes.map((pt, idx) => (
                    <option key={idx} value={pt}>{pt}</option>
                  ))}
                </select>
              </div>

              {/* Weekly Logistics Volume */}
              <div className="space-y-1">
                <label className="block text-[10px] font-bold text-warm-dark uppercase tracking-wider">
                  Target Shipping Volume / week
                </label>
                <input
                  type="number"
                  value={weeklyVolume}
                  onChange={(e) => setWeeklyVolume(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-warm-pale border border-warm-border rounded-none text-xs text-warm-dark focus:outline-none focus:border-warm-primary"
                  min="5000"
                  required
                />
              </div>

              {/* Custom branding toggle */}
              <div className="flex items-center gap-3 p-3 bg-warm-pale border border-warm-border rounded-none">
                <input
                  type="checkbox"
                  id="custom-branding-check"
                  checked={customLogo}
                  onChange={(e) => setCustomLogo(e.target.checked)}
                  className="w-4 h-4 text-warm-dark bg-warm-cream border-warm-border rounded-none focus:ring-0 cursor-pointer accent-warm-dark"
                />
                <label htmlFor="custom-branding-check" className="text-xs font-bold text-warm-dark cursor-pointer">
                  Request laser branding / logo embossing
                </label>
              </div>

              {/* Submit triggers */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-warm-dark text-white font-bold rounded-none text-xs uppercase tracking-widest hover:bg-neutral-800 disabled:opacity-50 cursor-pointer transition-colors duration-200"
                id="advisor-calc-submit-btn"
              >
                {loading ? (
                  <span className="flex items-center gap-2 justify-center">
                    <span className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" />
                    Analyzing Bio-material standards...
                  </span>
                ) : (
                  <>
                    <Send size={13} className="text-warm-primary" />
                    Run Automated Feasibility Report
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Intelligent spec output panel */}
          <div className="lg:col-span-7 bg-warm-cream border border-warm-border rounded-none overflow-hidden min-h-[464px] flex flex-col justify-between text-warm-dark">
            {loading ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-4">
                <div className="relative">
                  <div className="w-14 h-14 border-4 border-warm-primary/10 border-t-warm-primary rounded-full animate-spin" />
                  <Sparkles size={16} className="text-warm-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce" />
                </div>
                <div className="text-center space-y-1 max-w-sm">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.2em] font-bold text-warm-primary">
                    Calculating biogenic matrices
                  </span>
                  <p className="text-xs text-warm-muted">
                    Sourcing regional white forest harvests under FSC, estimating sea-carrier cubic occupancy, and setting wood fiber yield constraints.
                  </p>
                </div>
              </div>
            ) : report ? (
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Generated Document Header */}
                <div className="flex items-center justify-between border-b border-warm-border pb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-warm-primary" size={16} />
                    <div>
                      <span className="block font-mono text-[9px] uppercase tracking-[0.25em] text-warm-primary font-bold">
                        FEASIBILITY REPORT APPROVED
                      </span>
                      <span className="block font-sans text-[11px] text-warm-muted font-semibold">
                        System Reference ID / SEC-8204
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setReport(null)}
                    className="text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 text-warm-dark hover:text-white border border-warm-dark rounded-none hover:bg-warm-dark transition-all duration-300 font-sans cursor-pointer"
                  >
                    Reset Form
                  </button>
                </div>

                {/* Rendered report text structured elegantly */}
                <div className="prose prose-sm max-w-none text-warm-dark font-sans leading-relaxed text-xs overflow-y-auto max-h-[400px] border border-warm-border p-4 rounded-none bg-warm-pale space-y-4">
                  {report.split("\n\n").map((para, paraIdx) => {
                    // Render headers
                    if (para.startsWith("#")) {
                      const cleanHeader = para.replace(/#/g, "").trim();
                      return (
                        <h4 key={paraIdx} className="font-sans font-black text-xs text-warm-primary uppercase tracking-[0.1em] pt-2 border-b border-warm-border/60 pb-1 font-mono">
                          {cleanHeader}
                        </h4>
                      );
                    }
                    // Render lists
                    if (para.startsWith("-") || para.startsWith("*")) {
                      return (
                        <ul key={paraIdx} className="list-disc pl-5 space-y-1">
                          {para.split("\n").map((line, lineIdx) => (
                            <li key={lineIdx} className="text-[11px]">
                              {line.replace(/^-\s*|^\*\s*/, "")}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={paraIdx} className="text-[11px]">
                        {para}
                      </p>
                    );
                  })}
                </div>

                <div className="p-3.5 bg-warm-primary/10 text-warm-dark border border-warm-primary/15 rounded-none text-[10.5px] font-sans flex items-center gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-warm-primary animate-ping flex-shrink-0" />
                  <span>Our physical spec-engineering team is notified. This dynamic configuration has been archived against your business profile.</span>
                </div>

              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-3">
                <MessageSquareCode size={36} className="text-warm-primary opacity-30 animate-pulse" />
                <span className="block font-mono text-[9px] uppercase tracking-widest font-bold text-warm-primary">
                  Awaiting B2B Configuration parameters
                </span>
                <p className="text-xs text-warm-muted max-w-xs leading-normal">
                  Configure your weekly volume scale and product selection on the left to trigger the automated feasibility analyzer.
                </p>

                {errorCode && (
                  <div className="mt-4 p-3 bg-red-600/5 text-red-800 border border-red-600/15 rounded-none text-[11px] font-sans max-w-sm">
                    <strong>API Notice:</strong> {errorCode}
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
