import React, { createContext, useContext, useState, useCallback } from "react";
import type { Product } from "@/data/products";
import { toast } from "react-toastify";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  checkout: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      if (prev.find((p) => p.id === product.id)) {
        toast.info(`${product.name} is already in your cart`);
        return prev;
      }
      toast.success(`${product.name} added to cart!`);
      return [...prev, product];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => {
      const item = prev.find((p) => p.id === id);
      if (item) toast.error(`${item.name} removed from cart`);
      return prev.filter((p) => p.id !== id);
    });
  }, []);

  const checkout = useCallback(() => {
    if (cart.length === 0) {
      toast.info("Your cart is empty!");
      return;
    }
    toast.success("Checkout successful! 🎉 Thank you for your purchase.");
    setCart([]);
  }, [cart.length]);

  const totalPrice = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, checkout, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
