"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariant } from "@/types";

interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  variantId?: string;
  variantName?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("tsi_cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("tsi_cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, variant?: ProductVariant, quantity = 1) => {
    setItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) => item.productId === product.id && item.variantId === variant?.id
      );

      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          image: product.images[0],
          price: variant?.price || product.price,
          quantity,
          variantId: variant?.id,
          variantName: variant?.name,
        },
      ];
    });
  };

  const removeItem = (productId: string, variantId?: string) => {
    setItems((prev) => prev.filter((item) => !(item.productId === productId && item.variantId === variantId)));
  };

  const updateQuantity = (productId: string, quantity: number, variantId?: string) => {
    if (quantity <= 0) {
      removeItem(productId, variantId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.variantId === variantId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
