import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-lg border-b border-base-200">
      <div className="container mx-auto max-w-[1500px] px-4 py-4 navbar">
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost text-3xl font-bold tracking-tight bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent hover:bg-transparent px-0">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-sm font-medium">
            <li><a href="#products" className="hover:text-base-content hover:bg-transparent">Products</a></li>
            <li><a href="#features" className="hover:text-base-content hover:bg-transparent">Features</a></li>
            <li><a href="#pricing" className="hover:text-base-content hover:bg-transparent">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-base-content hover:bg-transparent">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-base-content hover:bg-transparent">FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          <div className="relative flex items-center justify-center mt-1 mr-1">
            <ShoppingCart className="w-5 h-5 text-base-content" />
            {cart.length > 0 && (
              <span className="badge badge-primary badge-sm absolute -top-2 -right-3 font-bold border-none">
                {cart.length}
              </span>
            )}
          </div>
          <a href="#login" className="btn btn-ghost btn-sm font-medium text-base-content hover:bg-base-200/50">Login</a>
          <a href="#get-started" className="btn btn-sm rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] border-none text-white hover:opacity-90 transition-all shadow-md px-5">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
