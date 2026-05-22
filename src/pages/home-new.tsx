import { useState } from "react";
import { Link } from "react-router-dom";
import { LanguageToggle } from "../App";
import { Brain, Users, Heart } from "lucide-react";

const courses = [
  {
    id: "ai-leadership",
    title: "AI 領導力與策略思維",
    titleEn: "AI Leadership & Strategic Thinking",
    desc: "人機協作與決策實戰工作坊",
    descEn: "Human-AI Collaboration & Decision Making Workshop",
    color: "from-purple-600 to-blue-600",
    image: "/images/ai-tech.jpg",
    hasPage: true,
  },
  {
    id: "neuroscience",
    title: "神經科學與情緒管理課程",
    titleEn: "Neuroscience & Emotional Management",
    desc: "了解大腦運作，掌握情緒密碼",
    descEn: "Understand brain functions, master emotional intelligence",
    color: "from-emerald-600 to-teal-600",
    image: "/images/psychology.jpg",
    hasPage: false,
  },
  {
    id: "psychic",
    title: "覺察與讀心術溝通課程",
    titleEn: "Awareness & Mind Reading Communication",
    desc: "洞察人心，提升溝通效能",
    descEn: "Read people, enhance communication effectiveness",
    color: "from-orange-500 to-red-500",
    image: "/images/counseling.jpg",
    hasPage: false,
  },
];

export default function HomeNew() {
  const [isZh, setIsZh] = useState(true);
  const t = (zh: string, en: string) => (isZh ? zh : en);

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="WISE" className="h-12 w-auto" />
              <span className="text-xl font-bold text-gray-900">WISE</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-purple-600">
                {t("首頁", "Home")}
              </Link>
              <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                {t("關於我們", "About")}
              </Link>
              <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                {t("核心業務", "Services")}
              </Link>
              <Link to="/courses" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                {t("專業課程", "Courses")}
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">
                {t("聯絡我們", "Contact")}
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <LanguageToggle isZh={isZh} onToggle={setIsZh} />
              <Link
                to="/contact"
                className="hidden sm:inline-flex px-5 py-2.5 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition-colors"
              >
                {t("立即諮詢", "Consult Now")}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/40 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              {t("專業神經科學顧問公司", "Professional Neuroscience Consultancy")}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t(
                "神經科學領導力",
                "Neuroscience-Based Leadership"
              )}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {t("赋能組織與個人", "Empowering Organizations & Individuals")}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {t(
                "運用神經科學與心理學原理，幫助領導者提升決策品質、團隊效能，創造持久正向改變。",
                "Using neuroscience and psychology principles to help leaders improve decision quality, team effectiveness, and create lasting positive change."
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/30 transition-all"
              >
                {t("探索課程", "Explore Courses")}
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                {t("免費諮詢", "Free Consultation")}
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract Decorations */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "500+", label: t("服務個案", "Clients Served") },
              { num: "95%", label: t("客戶滿意度", "Client Satisfaction") },
              { num: "12+", label: t("年行業經驗", "Years Experience") },
              { num: "50+", label: t("企業合作夥伴", "Corporate Partners") },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {stat.num}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t("我們的專業領域", "Our Expertise")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                "融合神經科學、心理學與管理學，為組織和個人提供全方位的諮詢服務。",
                "Integrating neuroscience, psychology, and management to provide comprehensive consulting for organizations and individuals."
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: t("神經科學顧問", "Neuroscience Consulting"),
                desc: t("運用大腦科學優化決策與領導力", "Optimize decisions and leadership using brain science"),
              },
              {
                icon: Users,
                title: t("企業培訓", "Corporate Training"),
                desc: t("打造高效能和諧的團隊文化", "Build high-performance team culture"),
              },
              {
                icon: Heart,
                title: t("個人教練", "Personal Coaching"),
                desc: t("助您突破瓶頸，實現目標", "Break through barriers and achieve goals"),
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t("專業課程", "Professional Courses")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t(
                "由淺入深的系統化課程，助您全面提升領導力與心理智能",
                "Systematic courses from beginner to advanced, helping you comprehensively improve leadership and psychological intelligence"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold text-center px-4">
                      {isZh ? course.title : course.titleEn}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {isZh ? course.desc : course.descEn}
                  </p>
                  {course.hasPage ? (
                    <Link
                      to={`/${course.id}`}
                      className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:gap-3 transition-all`}
                    >
                      {t("了解更多", "Learn More")}
                      <span>→</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-gray-400">
                      {t("即將推出", "Coming Soon")}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {t("准备好提升您的領導力了嗎？", "Ready to Elevate Your Leadership?")}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {t(
              "立即預約免費咨詢，開啟您的蛻變之旅",
              "Book a free consultation now and start your transformation journey"
            )}
          </p>
          <Link
            to="/contact"
            className="inline-flex px-10 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            {t("立即開始", "Get Started")}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="WISE" className="h-8 w-auto opacity-70" />
              <span className="text-lg font-semibold text-white">WISE Consultant Asia</span>
            </div>
            <div className="text-sm">
              © 2024 WISE Consultant Asia. {t("版權所有", "All rights reserved")}.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}