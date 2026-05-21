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

export default function Coaching() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 pt-12">心理教練</h1>
          <p className="text-white/70 text-lg">神經科學與心理學支援的教練服務</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我們的教練服務</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">透過科學化的方法與神經科學原理，我們幫助個人與組織突破瓶頸，實現持久的正向改變。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "一對一領導力教練", desc: "針對高潛力人才與現任領導者，提供個人化的領導力發展教練服務，結合神經科學與心理學方法論，支持您在領導力旅程中的持續成長與突破。" },
              { icon: Users, title: "團隊教練工作坊", desc: "透過互動式團隊教練工作坊，提升團隊成員間的信任、溝通與協作效能，建立健康且高效的團隊文化與心理安全感。" },
              { icon: Shield, title: "變革與轉型教練", desc: "在組織變革與轉型期間，提供額外的心理支持與教練陪伴，幫助領導者與團隊有效管理不確定性與壓力，保持最佳表現。" },
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">誰需要心理教練？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "現任與新晉領導者", desc: "希望提升領導能力、建立高效團隊、實現職業晉升的各級管理者" },
              { title: "高潛力人才", desc: "準備承擔更大責任、拓展影響力的明日之星" },
              { title: "面臨變革的組織", desc: "經歷合併、收購、業務轉型或策略調整的企業與團隊" },
              { title: "追求個人成長", desc: "希望突破自我限制、實現更高目標的任何人" },
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