import { useState } from "react";
import { Brain, Zap, Users, Shield, Lightbulb, Target, ChevronDown, Menu, X } from "lucide-react";
import LanguageToggle from "../components/language-toggle";

const NAV_LINKS = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "企業概覽" },
  { href: "/services", label: "核心業務" },
  { href: "/coaching", label: "心理教練" },
  { href: "/courses", label: "專業課程" },
  { href: "/contact", label: "聯繫我們" },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/images/logo-full.png" alt="WISE" className="h-10" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-[#4D21D0] transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <LanguageToggle isZh={true} />
              <button className="bg-[#4D21D0] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3B18B0] transition-colors">
                立即諮詢
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="block text-sm font-medium text-gray-700 hover:text-[#4D21D0]">
                {link.label}
              </a>
            ))}
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
            <span className="text-sm font-medium">神經科學 × 心理學 × 商業智慧</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            CARING · EMPOWERING<br />CONNECTING PEOPLE
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            以神經科學與心理學為基礎，幫助組織與個人創造持久正向改變，引領新時代領導力與人才發展
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/services" className="bg-white text-[#4D21D0] px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              探索服務
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              立即諮詢
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
              { icon: Brain, title: "CARING", subtitle: "關懷每位客戶", desc: "以人為本，深入理解組織與個人需求， 提供溫暖且專業的服務體驗" },
              { icon: Zap, title: "EMPOWERING", subtitle: "賦能團隊成長", desc: "透過科學方法論與實用工具，激發組織潛能， 成就卓越表現" },
              { icon: Users, title: "CONNECTING", subtitle: "連結無限可能", desc: "建立信任關係，促進跨部門協作， 創造持續正向的改變" },
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">核心業務範疇</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">整合神經科學、心理學與商業策略，助力組織蛻變</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Users, title: "新時代領導力", desc: "運用神經科學原理與心理學方法，培養適應未來挑戰的卓越領導者，建立高效能的團隊文化與個人領袖魅力。" },
              { icon: Zap, title: "AI 賦能與人才發展", desc: "結合最新 AI 科技與人才發展理論，為組織打造前瞻性的人才策略，提升團隊競爭力與創新能力。" },
              { icon: Shield, title: "心理安全與健康", desc: "基於 Amy Edmondson 的心理安全理論框架，創建信任、開放且健康的組織工作環境，提升團隊協作效能。" },
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
              { value: "98%", label: "客戶滿意度" },
              { value: "500+", label: "服務企業" },
              { value: "15+", label: "年行業經驗" },
              { value: "30+", label: "專業顧問" },
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
                <span className="text-sm font-medium text-[#4D21D0]">神經科學方法論</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                科學化方法，創造持久改變
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                我們融合神經科學、心理學與商業策略，透过科學化的評估與干預方法，幫助組織與個人突破瓶頸，實現可持續的成長與蛻變。
              </p>
              <div className="space-y-4">
                {[
                  { icon: Target, text: "以神經科學為基礎的領導力發展" },
                  { icon: Lightbulb, text: "循證實踐的心理學應用" },
                  { icon: Shield, text: "創建心理安全的工作環境" },
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
              <img src="/images/neuroscience.png" alt="Neuroscience" className="relative rounded-2xl shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#69ADB6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">准备好开启您的蜕变之旅？</h2>
          <p className="text-white/80 text-lg mb-10">立即聯絡我們，探索 WISE 如何幫助您的組織創造持久正向的改變</p>
          <a href="/contact" className="inline-block bg-white text-[#4D21D0] px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            免費初步諮詢
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
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}