import { useState } from "react";
import { Package, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import CartView from "./CartView";
import { useCart } from "@/context/CartContext";

const MainSection = () => {
  const { cart } = useCart();
  const [activeTab, setActiveTab] = useState<"products" | "cart">("products");

  return (
    <section id="products" className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Premium Digital Tools</h2>
        <p className="text-slate-500 mt-2 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="mx-auto flex justify-center gap-3 mb-10 rounded-full border border-slate-200 bg-white p-1 max-w-[260px]">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
            activeTab === "products"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-transparent text-slate-800"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("cart")}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all ${
            activeTab === "cart"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-transparent text-slate-800"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {activeTab === "products" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.slice(0, 6).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <CartView />
      )}
    </section>
  );
};

export default MainSection;
