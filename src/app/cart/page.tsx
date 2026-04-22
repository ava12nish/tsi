"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-40 pb-24 text-center">
        <div className="container mx-auto px-4">
          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-300">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4 italic">Your bag is empty</h1>
          <p className="text-slate-500 mb-10 max-w-md mx-auto">Looks like you haven't added any TSI merch to your collection yet.</p>
          <Link 
            href="/merch" 
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all premium-shadow"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-12 italic">Your <span className="text-primary italic">Collection</span>.</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-8 space-y-6">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variantId}`} className="bg-white p-6 rounded-[2rem] premium-shadow border border-slate-100 flex items-center space-x-6">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900 text-lg sm:text-xl italic">{item.name}</h3>
                      <button 
                        onClick={() => removeItem(item.productId, item.variantId)}
                        className="text-slate-300 hover:text-red-500 transition-colors p-1"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    {item.variantName && (
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Size: {item.variantName}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-slate-50 rounded-lg px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.productId, item.quantity - 1, item.variantId)}
                          className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold text-sm">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.productId, item.quantity + 1, item.variantId)}
                          className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-900"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-4">
              <div className="bg-slate-900 rounded-[3rem] p-8 md:p-10 text-white premium-shadow sticky top-32">
                <h2 className="text-2xl font-serif font-bold italic mb-8">Summary</h2>
                <div className="space-y-4 mb-8 text-sm italic">
                  <div className="flex justify-between">
                    <span className="text-white/60">Subtotal ({totalItems} items)</span>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Shipping</span>
                    <span className="font-bold">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Tax</span>
                    <span className="font-bold">Calculated at checkout</span>
                  </div>
                </div>
                <div className="pt-8 border-t border-white/10 mb-10">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="italic">Total</span>
                    <span className="text-primary italic">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-all premium-shadow flex items-center justify-center space-x-3">
                  <span>Checkout with Stripe</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <Link 
                  href="/merch" 
                  className="block text-center mt-6 text-white/40 text-sm font-medium hover:text-white transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
