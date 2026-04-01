import { Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

import rocketIcon from "@/assets/rocket.png";
import writingIcon from "@/assets/writing.png";
import designIcon from "@/assets/design-tool.png";
import operationIcon from "@/assets/operation.png";
import playIcon from "@/assets/play.png";
import packageIcon from "@/assets/package.png";
import portfolioIcon from "@/assets/portfolio.png";

const iconMap: Record<string, string> = {
  rocket: rocketIcon,
  writing: writingIcon,
  "design-tool": designIcon,
  operation: operationIcon,
  play: playIcon,
  package: packageIcon,
  portfolio: portfolioIcon,
};

const CartView = () => {
  const { cart, removeFromCart, checkout, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 space-y-4">
        <ShoppingBag className="w-16 h-16 mx-auto text-slate-300" />
        <h3 className="text-xl font-semibold text-slate-700">Your cart is empty</h3>
        <p className="text-sm text-slate-500">Browse products and add items to your cart.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 mb-6">Your Cart</h3>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-5 rounded-2xl bg-[#f8f9fa] p-5">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <img src={iconMap[item.icon] || rocketIcon} alt={item.name} className="w-7 h-7 object-contain" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900">{item.name}</h4>
              <p className="text-sm font-medium text-slate-400 mt-0.5">${item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm font-semibold text-[#ff4b72] hover:text-[#e0315a] transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 mb-6 flex items-center justify-between px-2">
        <p className="text-sm font-medium text-slate-400">Total:</p>
        <p className="text-2xl font-bold text-slate-900">${totalPrice}</p>
      </div>

      <button
        onClick={checkout}
        className="w-full rounded-2xl bg-[#8A2BE2] py-4 text-sm font-bold text-white transition hover:bg-[#7a23c9]"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartView;
