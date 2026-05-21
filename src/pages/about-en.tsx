import { useState } from "react";
import { Brain, Lightbulb, Shield, Users, ChevronDown, Menu, X } from "lucide-react";
import LanguageToggle from "../components/language-toggle";

const NAV_LINKS_EN = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "About" },
  { href: "/en/services", label: "Services" },
  { href: "/en/coaching", label: "Coaching" },
  { href: "/en/courses", label: "Courses" },
  { href: "/en/contact", label: "Contact" },
];

export default function AboutEn() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/en"><img src="/images/logo-full.png" alt="WISE" className="h-10" /></a>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS_EN.map(link => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-[#4D21D0] transition-colors">{link.label}</a>
              ))}
              <LanguageToggle isZh={false} />
            </div>
            <div className="flex items-center space-x-3">
              <a href="/en/contact" className="hidden md:block bg-[#4D21D0] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3B18B0] transition-colors">Book Now</a>
              <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {NAV_LINKS_EN.map(link => (
              <a key={link.href} href={link.href} className="block text-sm font-medium text-gray-700 hover:text-[#4D21D0]">{link.label}</a>
            ))}
            <div className="pt-3 border-t border-gray-100"><LanguageToggle isZh={false} /></div>
          </div>
        )}
      </nav>

      <section className="relative pt-16 pb-20 bg-gradient-to-br from-[#4D21D0] to-[#6B3DD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 pt-12">About Us</h1>
          <p className="text-white/70 text-lg">Neuroscience × Psychology × Business Intelligence</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About WISE</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                WISE Consultant Asia operates at the intersection of neuroscience and psychology, dedicated to providing science-based professional consulting services for organizations and individuals. We believe true change comes from deep understanding of the human brain and behavior.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our consulting team comprises neuroscience PhDs, psychology experts, and business management consultants, combining academic depth with practical experience to help organizations thrive in complex business environments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[["98%", "Client Satisfaction"], ["500+", "Companies Served"], ["15+", "Years Experience"], ["30+", "Expert Consultants"]].map(([v, l], i) => (
                <div key={i} className="bg-gradient-to-br from-[#4D21D0]/10 to-[#69ADB6]/10 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#4D21D0] mb-2">{v}</div>
                  <div className="text-sm text-gray-500 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Scientific Rigor", desc: "All methodologies are based on neuroscience research and evidence-based practices, ensuring the effectiveness and durability of interventions" },
              { icon: Users, title: "People-Centered", desc: "Deeply understanding the unique needs of each organization and individual, providing customized solutions" },
              { icon: Lightbulb, title: "Innovation & Practicality", desc: "Balancing academic depth with commercial applicability, providing tools and methods that can be implemented" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#4D21D0]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#4D21D0]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img src="/images/logo-icon.png" alt="WISE" className="h-10" />
              <span className="text-sm text-gray-400">© 2024 WISE Consultant Asia. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-6">
              {NAV_LINKS_EN.map(link => (
                <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}