import { useState } from "react";
import { Brain, Lightbulb, Shield, Users, ChevronDown, Menu, X } from "lucide-react";
import LanguageToggle from "../components/language-toggle";

const NAV_LINKS_ZH = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "企業概覽" },
  { href: "/services", label: "核心業務" },
  { href: "/coaching", label: "心理教練" },
  { href: "/courses", label: "專業課程" },
  { href: "/contact", label: "聯繫我們" },
];

export default function Contact() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/"><img src="/images/logo-full.png" alt="WISE" className="h-10" /></a>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS_ZH.map(link => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-[#4D21D0] transition-colors">{link.label}</a>
              ))}
              <LanguageToggle isZh={true} />
            </div>
            <div className="flex items-center space-x-3">
              <a href="/contact" className="hidden md:block bg-[#4D21D0] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3B18B0] transition-colors">立即諮詢</a>
              <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
            </div>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {NAV_LINKS_ZH.map(link => (
              <a key={link.href} href={link.href} className="block text-sm font-medium text-gray-700 hover:text-[#4D21D0]">{link.label}</a>
            ))}
            <div className="pt-3 border-t border-gray-100"><LanguageToggle isZh={true} /></div>
          </div>
        )}
      </nav>

      <section className="relative pt-16 pb-20 bg-gradient-to-br from-[#4D21D0] to-[#6B3DD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 pt-12">聯繫我們</h1>
          <p className="text-white/70 text-lg">開啟您的蛻變之旅</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">立即開始</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">無論您是想了解我們的服務、查詢課程詳情，或是討論企業內訓方案，我们都會在第一時間回覆您。</p>
              <div className="space-y-6">
                {[["📧", "info@wiseconsultant.asia", "電郵"], ["📍", "香港中環", "地址"], ["📞", "+852 1234 5678", "電話"]].map(([icon, val, label], i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <span className="text-2xl">{icon}</span>
                    <div><div className="text-sm text-gray-500">{label}</div><div className="font-medium text-gray-900">{val}</div></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">感謝您的查詢！</h3>
                  <p className="text-gray-500">我們會在 24 小時內與您聯繫。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">姓名 *</label><input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4D21D0] focus:border-transparent outline-none transition" placeholder="張先生 / 李女士" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">電郵 *</label><input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4D21D0] focus:border-transparent outline-none transition" placeholder="your@email.com" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">公司 / 組織</label><input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4D21D0] focus:border-transparent outline-none transition" placeholder="公司名稱" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">查詢內容 *</label><textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#4D21D0] focus:border-transparent outline-none transition resize-none" placeholder="請描述您的需求..." /></div>
                  <button type="submit" className="w-full bg-[#4D21D0] text-white py-3.5 rounded-lg font-semibold hover:bg-[#3B18B0] transition-colors">發送查詢</button>
                </form>
              )}
            </div>
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
              {NAV_LINKS_ZH.map(link => (
                <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}