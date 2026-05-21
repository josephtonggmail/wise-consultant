import { useState } from "react";
import { Brain, Lightbulb, Shield, Menu, X } from "lucide-react";
import LanguageToggle from "../components/language-toggle";

const NAV_LINKS = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "企業概覽" },
  { href: "/services", label: "核心業務" },
  { href: "/coaching", label: "心理教練" },
  { href: "/courses", label: "專業課程" },
  { href: "/contact", label: "聯繫我們" },
];

const COURSES = [
  {
    title: "策略型AI領導力工作坊",
    desc: "人機協作與決策實戰工作坊 — 專為中高層管理者而設的實戰工作坊，運用策略性思維與人工智能，提升管理溝通質量與決策水平",
    duration: "4 小時",
    img: "ai-leadership-hero.jpg",
    href: "/ai-leadership"
  },
];

export default function Courses() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/"><img src="/images/logo-full.png" alt="WISE" className="h-10" /></a>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(link => (
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
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="block text-sm font-medium text-gray-700 hover:text-[#4D21D0]">{link.label}</a>
            ))}
            <div className="pt-3 border-t border-gray-100"><LanguageToggle isZh={true} /></div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-[#4D21D0] to-[#6B3DD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 pt-12">專業課程</h1>
          <p className="text-white/70 text-lg">由淺入深、循序漸進的系統化學習旅程</p>
        </div>
      </section>

      {/* Features with Decorative Images */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "神經科學支持", desc: "所有課程內容均基於神經科學研究與循證實踐，確保學習效果的科學性與持久性", img: "brain-science.jpg" },
              { icon: Lightbulb, title: "實用工具方法", desc: "除了理論知識，更提供可直接應用於工作的工具、框架與方法，快速見效", img: "course-decorate-1.jpg" },
              { icon: Shield, title: "心理安全保障", desc: "營造安全、支持的學習環境，讓學員敢於嘗試、勇於突破、樂於分享", img: "course-decorate-2.jpg" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <img src={`/images/${item.img}`} alt={item.title} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="w-16 h-16 bg-[#4D21D0]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 -mt-56 relative z-10">
                  <item.icon className="w-8 h-8 text-[#4D21D0]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid - Single Course */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {COURSES.map((course, i) => (
            <a key={i} href={course.href} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#4D21D0]/30 hover:shadow-xl transition-all">
              <div className="h-72 relative overflow-hidden">
                <img src={`/images/${course.img}`} alt={course.title} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.backgroundImage = 'linear-gradient(135deg, #4D21D0 0%, #69ADB6 100%)'; (e.target as HTMLImageElement).style.backgroundSize = 'cover'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium text-white bg-[#4D21D0] px-3 py-1 rounded-full">{course.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{course.desc}</p>
                <div className="mt-3 text-sm font-medium text-[#69ADB6] group-hover:text-[#4D21D0] transition-colors">查看課程詳情 →</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4D21D0] to-[#69ADB6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">歡迎查詢課程詳情與企業內訓方案</h2>
          <p className="text-white/80 text-lg mb-8">我們提供定制化的企業內訓服務，根據您的組織需求量身設計課程內容</p>
          <a href="/contact" className="inline-block bg-white text-[#4D21D0] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">聯絡我們</a>
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
                <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}