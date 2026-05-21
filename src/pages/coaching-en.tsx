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

export default function CoachingEn() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 pt-12">Psychological Coaching</h1>
          <p className="text-white/70 text-lg">Neuroscience and psychology-supported coaching services</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Coaching Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Through scientific methods and neuroscience principles, we help individuals and organizations break through bottlenecks and achieve lasting positive change.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "One-on-One Leadership Coaching", desc: "For high-potential talent and current leaders, providing personalized leadership development coaching services, combining neuroscience and psychology methodologies to support your continuous growth and breakthrough in your leadership journey." },
              { icon: Users, title: "Team Coaching Workshops", desc: "Through interactive team coaching workshops, enhance trust, communication, and collaboration effectiveness among team members, building a healthy and high-performance team culture and psychological safety." },
              { icon: Shield, title: "Change & Transformation Coaching", desc: "During periods of organizational change and transformation, provide additional psychological support and coaching companionship to help leaders and teams effectively manage uncertainty and pressure while maintaining optimal performance." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#4D21D0]/30 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4D21D0] to-[#6B3DD4] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Who Needs Psychological Coaching?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Current & Emerging Leaders", desc: "Managers at all levels who want to enhance leadership capabilities, build high-performance teams, and achieve career advancement" },
              { title: "High-Potential Talent", desc: "Rising stars preparing to take on greater responsibilities and expand their influence" },
              { title: "Organizations Undergoing Change", desc: "Companies and teams experiencing mergers, acquisitions, business transformation, or strategic adjustments" },
              { title: "Those Seeking Personal Growth", desc: "Anyone who wants to break through self-limitations and achieve higher goals" },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#4D21D0]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield size={20} className="text-[#4D21D0]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
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