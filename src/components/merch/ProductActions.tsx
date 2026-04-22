"use client";

import { useState } from "react";
import { Product, ProductVariant } from "@/types";
import { useCart } from "@/context/CartContext";

export function ProductActions({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity);
    // Suggestion: Trigger a toast or sidebar open
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="space-y-8">
      {/* Variant Selection */}
      {product.variants.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Select Size</h3>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`min-w-[4rem] px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                  selectedVariant?.id === variant.id
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-primary/50"
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Quantity</h3>
        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-xl px-2 py-1">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="w-12 text-center font-bold text-slate-900">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-4">
        <button 
          onClick={handleAddToCart}
          className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all premium-shadow flex items-center justify-center space-x-3 group"
        >
          <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span>Add to Bag</span>
        </button>
      </div>
    </div>
  );
}
