import React, { useState } from "react";
import { PRODUCT_CATALOG } from "../data";
import { Product } from "../types";
import { 
  Filter, ChevronRight, X, Layers, ShieldCheck, 
  Settings, CheckCircle, Boxes, Coins, Minimize2 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProductShowcaseProps {
  onAddToSampleCart: (product: Product) => void;
  sampleCartItems: Product[];
}

export default function ProductShowcase({ onAddToSampleCart, sampleCartItems }: ProductShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "cutlery" | "stirrers" | "sticks" | "skewers">("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: "all", label: "All Form Factors" },
    { id: "cutlery", label: "High-Core Cutlery" },
    { id: "stirrers", label: "Pristine Stirrers" },
    { id: "sticks", label: "Medical-Grade Sticks" },
    { id: "skewers", label: "Sharp BBQ Skewers" }
  ] as const;

  const filteredProducts = selectedCategory === "all" 
    ? PRODUCT_CATALOG 
    : PRODUCT_CATALOG.filter(p => p.category === selectedCategory);

  return (
    <section className="py-16 bg-warm-beige border-b border-warm-border" id="catalog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] text-warm-primary uppercase font-bold block mb-1">
              THE CALIBRATED CATALOG
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-warm-dark tracking-tight">
              An Architectural Catalog of <span style={{ fontFamily: "'Georgia', serif" }} className="text-warm-primary italic font-normal">Sustainable Hardware</span>.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-warm-muted max-w-xl leading-relaxed mt-2">
              Every curve, bevel, and tine is hydromechanically pressed and finished to standard tolerances, ensuring zero slivers and zero machine malfunctions.
            </p>
          </div>

          {/* Inline Filter Controls with Warm Organic elements */}
          <div className="flex flex-wrap gap-1 bg-warm-pale p-1 border border-warm-border">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id 
                    ? "bg-warm-dark text-white" 
                    : "text-warm-muted hover:text-warm-dark"
                }`}
                id={`filter-btn-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const alreadyInCart = sampleCartItems.some(i => i.id === product.id);
            return (
              <motion.div
                layout
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="bg-warm-cream border border-warm-border p-5 flex flex-col justify-between hover:shadow-sm hover:border-warm-primary transition-all duration-300 cursor-pointer group rounded-none"
                id={`product-card-${product.id}`}
              >
                <div>
                  {/* Photo container */}
                  <div className="w-full h-44 bg-warm-pale mb-4 overflow-hidden relative border border-warm-border">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <span className="absolute top-2 left-2 bg-warm-cream border border-warm-border text-warm-dark font-mono text-[9px] font-bold px-2 py-0.5 rounded-none uppercase">
                      {product.category}
                    </span>
                  </div>

                  <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-warm-primary font-bold block mb-0.5">
                    {product.material}
                  </span>
                  <h3 className="font-sans font-bold text-base text-warm-dark group-hover:text-warm-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-warm-muted mt-1.5 line-clamp-2">
                    {product.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-warm-border font-sans">
                  <div>
                    <span className="block font-mono text-[8px] text-warm-muted uppercase tracking-widest font-black">MIN ORDER MOQ</span>
                    <span className="block text-xs font-mono font-bold text-warm-dark">{product.b2bMOQ}</span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] uppercase font-black tracking-widest text-warm-dark group-hover:translate-x-1 transition-transform duration-300">
                    View Specs
                    <ChevronRight size={13} className="text-warm-primary" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Product spec modal drawer */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-55 overflow-hidden flex items-center justify-center p-4">
              
              {/* Blur backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-warm-dark/45 backdrop-blur-sm"
              />

              {/* Specification layout modal container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="relative bg-warm-beige border border-warm-border w-full max-w-4xl p-6 sm:p-8 md:p-10 shadow-xl overflow-y-auto max-h-[90vh] z-10 rounded-none text-warm-dark"
                id="product-spec-modal"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 text-warm-muted hover:text-warm-dark hover:bg-warm-pale transition-colors duration-300"
                  aria-label="Close Product Specifications Panel"
                >
                  <X size={18} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4">
                  
                  {/* Aspect Spec details */}
                  <div className="md:col-span-5 space-y-4">
                    <div className="w-full aspect-[4/3] bg-warm-pale overflow-hidden border border-warm-border rounded-none">
                      <img
                        src={selectedProduct.imageUrl}
                        alt={selectedProduct.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="bg-warm-pale p-4 border border-warm-border space-y-2 rounded-none">
                      <div className="flex justify-between text-xs font-mono border-b border-warm-border pb-1.5">
                        <span className="text-warm-muted uppercase tracking-wider text-[8.5px] font-bold">MATERIAL ORIGIN</span>
                        <span className="font-bold">{selectedProduct.material}</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono border-b border-warm-border pb-1.5">
                        <span className="text-warm-muted uppercase tracking-wider text-[8.5px] font-bold">DENSITY SUBCLASS</span>
                        <span className="font-bold">{selectedProduct.densityClass}</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono border-b border-warm-border pb-1.5">
                        <span className="text-warm-muted uppercase tracking-wider text-[8.5px] font-bold">MOISTURE RATING</span>
                        <span className="font-bold text-warm-primary">{selectedProduct.moistureContent}</span>
                      </div>
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-warm-muted uppercase tracking-wider text-[8.5px] font-bold">BOX PACKAGING</span>
                        <span className="font-bold truncate max-w-[180px]">{selectedProduct.packaging}</span>
                      </div>
                    </div>
                  </div>

                  {/* Core description & B2B settings */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-warm-primary font-bold">
                        MATERIAL SPECIFICATION SHEET
                      </span>
                      <h2 className="font-sans font-black text-2xl text-warm-dark mt-0.5 leading-tight">
                        {selectedProduct.name}
                      </h2>
                      <p className="font-sans text-xs text-warm-primary font-bold mb-3">
                        {selectedProduct.tagline}
                      </p>
                      
                      <p className="font-sans text-xs sm:text-sm text-warm-dark/85 leading-relaxed">
                        {selectedProduct.description}
                      </p>

                      {/* Technical specifications array */}
                      <div className="mt-5 space-y-2">
                        <h4 className="font-sans font-bold text-xs text-warm-dark flex items-center gap-1 uppercase tracking-wider">
                          <Settings size={12} className="text-warm-primary" />
                          Mechanical Rigidity Features
                        </h4>
                        <ul className="space-y-1.5 text-xs text-warm-dark/85">
                          {selectedProduct.features.map((feat, idx) => (
                            <li key={idx} className="flex gap-2 items-start">
                              <CheckCircle size={11} className="text-warm-primary mt-1 flex-shrink-0" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dimensions select preview */}
                      <div className="mt-5">
                        <span className="block font-sans font-bold text-xs text-warm-dark mb-1.5 uppercase tracking-wider">
                          Available Calibrated Lengths
                        </span>
                        <div className="flex gap-1.5">
                          {selectedProduct.sizes.map((s, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-warm-pale text-warm-dark border border-warm-border rounded-none text-[10px] font-mono font-bold"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action drawer footer */}
                    <div className="mt-8 pt-4 border-t border-warm-border flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                      <div>
                        <span className="block font-mono text-[8.5px] text-warm-muted uppercase font-bold tracking-wider">B2B WHolesale MCQ</span>
                        <span className="block text-sm font-mono font-bold text-warm-dark">{selectedProduct.b2bMOQ}</span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            onAddToSampleCart(selectedProduct);
                          }}
                          className={`px-5 py-3 rounded-none text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            sampleCartItems.some(i => i.id === selectedProduct.id)
                              ? "bg-warm-primary text-warm-dark"
                              : "bg-warm-dark text-white hover:bg-neutral-800"
                          }`}
                          id={`modal-sample-request-btn-${selectedProduct.id}`}
                        >
                          {sampleCartItems.some(i => i.id === selectedProduct.id)
                            ? "✓ Added to Sample Kit"
                            : "Add to Sample Kit Cart"}
                        </button>
                        <button
                          onClick={() => setSelectedProduct(null)}
                          className="px-4 py-3 border border-warm-border hover:bg-warm-pale text-warm-dark rounded-none text-xs font-bold uppercase tracking-wider transition-colors duration-300"
                        >
                          Close Specs
                        </button>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
