import { Check } from "lucide-react";
import type { Product } from "@/data/products";
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

const tagColors: Record<string, string> = {
  popular: "bg-primary/10 text-primary",
  new: "bg-tag-new/10 text-tag-new",
  best: "bg-tag-best/10 text-tag-best",
};

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { cart, addToCart } = useCart();
  const inCart = cart.some((p) => p.id === product.id);

  return (
    <div className="card bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-4 rounded-3xl border border-slate-200">
      <div className="flex items-center justify-between">
        <img src={iconMap[product.icon] || rocketIcon} alt={product.name} className="w-10 h-10" />
        <span className={`badge border-none font-semibold py-3 ${tagColors[product.tagType] || tagColors.popular}`}>
          {product.tag}
        </span>
      </div>
      <h3 className="text-2xl font-bold card-title text-base-content">{product.name}</h3>
      <p className="text-sm text-base-content/70 flex-1">{product.description}</p>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-3xl font-extrabold text-base-content">${product.price}</span>
        <span className="text-sm text-base-content/60">/{product.period === 'monthly' ? 'Mo' : product.period === 'one-time' ? 'One-Time' : product.period}</span>
      </div>
      <ul className="space-y-2 mt-4">
        {product.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-base-content/80">
            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <div className="card-actions mt-auto pt-4">
        <button
          onClick={() => addToCart(product)}
          className={`btn w-full rounded-full text-base font-semibold border-none ${
            inCart
              ? "btn-disabled bg-base-200 text-base-content/50"
              : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90 shadow-md"
          }`}
        >
          {inCart ? "Added to Cart!" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
