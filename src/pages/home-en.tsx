import { useState } from "react";
import { Brain, Lightbulb, Shield, Users, ChevronDown, Menu, X, Mic, MessageCircle, UserCheck, TrendingUp, Cpu } from "lucide-react";
import LanguageToggle from "../components/language-toggle";

const NAV_LINKS_EN = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "About" },
  { href: "/en/services", label: "Services" },
  { href: "/en/coaching", label: "Coaching" },
  { href: "/en/courses", label: "Courses" },
  { href: "/en/contact", label: "Contact" },
];

export default function HomeEn() {
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

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(77,33,208,0.5) 0%, rgba(45,20,140,0.6) 50%, rgba(105,173,182,0.4) 100%), url('/images/hero-business.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <Brain size={18} />
            <span className="text-sm font-medium">Neuroscience × Psychology × Business Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            CARING · EMPOWERING<br />CONNECTING PEOPLE
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Grounded in neuroscience and psychology, we help organizations and individuals create lasting positive change, leading new-era leadership and talent development.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/en/services" className="bg-white text-[#4D21D0] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Explore Services
            </a>
            <a href="/en/contact" className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Book Consultation
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="text-white/60" />
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "CARING", subtitle: "Caring for Every Client", desc: "People-centered, deeply understanding organizational and individual needs, providing warm and professional service experience." },
              { icon: Users, title: "EMPOWERING", subtitle: "Empowering Team Growth", desc: "Through scientific methodologies and practical tools, we unlock organizational potential and drive exceptional performance." },
              { icon: Lightbulb, title: "CONNECTING", subtitle: "Connecting Unlimited Possibilities", desc: "Building trust relationships, promoting cross-departmental collaboration, creating lasting positive change." },
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#4D21D0]/20 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4D21D0] to-[#6B3DD4] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#4D21D0] mb-2">{item.title}</h3>
                <p className="text-sm font-medium text-[#69ADB6] mb-3">{item.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-[#4D21D0] to-[#6B3DD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Core Service Areas</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Integrating neuroscience, psychology, and business strategy to transform organizations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "New-Era Leadership", desc: "Applying neuroscience principles and psychological methods to develop exceptional leaders who thrive in future challenges, building high-performance team culture and personal leadership presence." },
              { icon: Cpu, title: "AI Empowerment & Talent Development", desc: "Combining cutting-edge AI technology with talent development theory to build forward-looking talent strategies for organizations, enhancing team competitiveness and innovation capability." },
              { icon: Shield, title: "Psychological Safety & Well-being", desc: "Based on Amy Edmondson's psychological safety framework, creating trusting, open, and healthy organizational work environments that enhance team collaboration effectiveness." },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-[#69ADB6] rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "500+", label: "Companies Served" },
              { value: "15+", label: "Years Experience" },
              { value: "30+", label: "Expert Consultants" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-bold text-[#4D21D0] mb-2">{item.value}</div>
                <div className="text-sm text-gray-500 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neuroscience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#4D21D0]/10 px-4 py-2 rounded-full mb-6">
                <Brain size={16} className="text-[#4D21D0]" />
                <span className="text-sm font-medium text-[#4D21D0]">Neuroscience Methodology</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Scientific Methods for Lasting Change
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We integrate neuroscience, psychology, and business strategy through scientific assessment and intervention methods, helping organizations and individuals break through bottlenecks and achieve sustainable growth and transformation.
              </p>
              <div className="space-y-4">
                {[
                  { icon: TrendingUp, text: "Neuroscience-based leadership development" },
                  { icon: Lightbulb, text: "Evidence-based psychological applications" },
                  { icon: Shield, text: "Creating psychologically safe work environments" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#69ADB6]/10 rounded-lg flex items-center justify-center">
                      <item.icon size={16} className="text-[#69ADB6]" />
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#4D21D0] to-[#69ADB6] rounded-2xl opacity-20"></div>
              <img src="/images/brain-science.jpg" alt="Neuroscience" className="relative rounded-2xl shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#69ADB6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Transformation Journey?</h2>
          <p className="text-white/80 text-lg mb-10">Contact us now to discover how WISE can help your organization create lasting positive change.</p>
          <a href="/en/contact" className="inline-block bg-white text-[#4D21D0] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Free Initial Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
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