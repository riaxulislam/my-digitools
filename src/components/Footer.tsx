import { Instagram, Facebook, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#060F27] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight">DigiTools</h3>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Links</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="h-10 w-10 rounded-full bg-white text-[#060F27] flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white text-[#060F27] flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white text-[#060F27] flex items-center justify-center">
                <X className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
