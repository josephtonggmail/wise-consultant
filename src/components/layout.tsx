import { ReactNode } from "react";
import LanguageToggle from "./language-toggle";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
  isZh?: boolean;
}

const NAV_LINKS_ZH = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "企業概覽" },
  { href: "/services", label: "核心業務" },
  { href: "/coaching", label: "心理教練" },
  { href: "/courses", label: "專業課程" },
  { href: "/contact", label: "聯繫我們" },
];

const NAV_LINKS_EN = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "About" },
  { href: "/en/services", label: "Services" },
  { href: "/en/coaching", label: "Coaching" },
  { href: "/en/courses", label: "Courses" },
  { href: "/en/contact", label: "Contact" },
];

export default function Layout({ children, isZh = true }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = isZh ? NAV_LINKS_ZH : NAV_LINKS_EN;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo + Lang Toggle */}
            <div className="flex items-center space-x-3">
              <Link to={isZh ? "/" : "/en"}>
                <img src="/images/logo-full.png" alt="WISE" className="h-10" />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-[#4D21D0] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Lang Toggle - Top Right */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <LanguageToggle isZh={isZh} />
              </div>
              <button className="hidden md:block bg-[#4D21D0] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3B18B0] transition-colors">
                {isZh ? "立即諮詢" : "Book Now"}
              </button>
              <button
                className="md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-sm font-medium text-gray-700 hover:text-[#4D21D0]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <LanguageToggle isZh={isZh} />
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img src="/images/logo-icon.png" alt="WISE" className="h-8 brightness-0 invert" />
              <span className="text-sm text-gray-400">© 2024 WISE Consultant Asia. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}