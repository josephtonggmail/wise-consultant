import { Link } from "react-router-dom";

export default function AiLeadershipCourse() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(77,33,208,0.9) 0%, rgba(20,5,80,0.92) 100%), url('/images/ai-leadership-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="text-center text-white px-6 max-w-4xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-6">
            專業工作坊系列
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            策略型 AI 領導力
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            人機協作與決策實戰工作坊
          </p>
          <p className="text-lg opacity-80">
            Strategic AI Leadership Workshop
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/courses"
              className="bg-white text-[#4D21D0] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              返回課程頁面
            </Link>
            <Link
              to="/en/ai-leadership"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#4D21D0] transition-all"
            >
              English Version
            </Link>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4D21D0] mb-8 text-center">
            課程簡介
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              這是一門專為中高層管理者而設的實戰工作坊。課程不聚焦於工具操作、文書生成或流程自動化，而是直擊管理者最需要的核心能力：如何在人機協作時代，運用策略性思維與人工智能，提升管理溝通質量、會議判斷力與決策水平。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              很多企業已開始使用 AI，但應用層次仍停留在文字校對、簡報製作與內容生成。真正具策略眼光的領導者已發現：當人工智能進入管理結構，它不只是提升效率，更能讓主管與員工由對立走向校準，讓跨部門討論更貼近公司策略，讓原本沒有人提出的決策風險提早浮現。<strong className="text-[#4D21D0]">這才是 AI 領導力最值得發展的方向。</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-6 bg-[#4D21D0]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">適合對象</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-xl">
              需要提升策略性管理思維的<strong>高層主管</strong>、<strong>中層管理者</strong>、<strong>人力資源負責人</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4D21D0] mb-8 text-center">
            你遇到這些問題嗎？
          </h2>
          <div className="grid gap-4">
            {[
              "AI 的應用仍停留在文書生成、簡報製作與數據分析等層面？",
              "開始應用在工作流自動化、但仍然只停留在效率提升層面？",
              "公司還在停留「AI會否取代員工」的迷思？",
              "還在討論員工對AI接受程度這種心態議題上？",
              "始終缺乏運用AI實踐策略性管理與決策，做到真正人機共融？"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-red-50 rounded-xl p-5 border-l-4 border-red-400">
                <span className="text-2xl">✗</span>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4D21D0] mb-8 text-center">
            課程收穫
          </h2>
          <div className="grid gap-6">
            {[
              { icon: "🎯", title: "策略夥伴升級", desc: "把 AI 由日常工具升級為管理者的策略夥伴，拓展人工智能在領導場景中的真正價值" },
              { icon: "🤝", title: "績效共識建立", desc: "用人工智能協助主管與員工討論績效問題，減少防衛與誤解，提升共識" },
              { icon: "💬", title: "溝通感染力", desc: "提升管理溝通感染力的方法，讓員工更容易聽明白、願意接受" },
              { icon: "⚡", title: "會議盲點掃描", desc: "用智能系統找出會議盲點與決策風險，減少資源錯配與無效投入" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md flex items-start gap-4">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-[#4D21D0] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4D21D0] mb-8 text-center">
            課程內容
          </h2>
          <div className="space-y-6">
            {[
              { num: "01", title: "人工智能績效溝通演練", desc: "如何借助人工智能化解員工防衛，讓主管與員工建立共識？" },
              { num: "02", title: "智能會議盲點掃描", desc: "如何用AI在會議中揭示遺漏，提升集體判斷質量？" },
              { num: "03", title: "AI 溝通感染力實驗", desc: "如何防止AI應用去人性化？" },
              { num: "04", title: "AI模型策略轉譯", desc: "如何用 AI 讓跨部門提案更貼近公司策略，建立真正的共同方向？" },
              { num: "05", title: "黑帽式智能決策預演", desc: "如何用 AI 預演失敗風險，避免時間、人力與資源被錯誤消耗？" }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-r from-[#4D21D0] to-[#2B0C7C] rounded-2xl p-6 text-white flex items-start gap-6">
                <span className="text-4xl font-bold text-white/30">{item.num}</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Summary */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#4D21D0] to-[#6B3DD4]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-8">課程總結</h2>
          <p className="text-xl leading-relaxed mb-8">
            如果你也想把 AI 的價值，不單單只停留在效率提升、流程自動化與內容生成，而真正推進到管理溝通、策略協作與高質量決策，<strong>這個工作坊就是為你而設。</strong>
          </p>
          <p className="text-lg opacity-90">
            這門課不只是教你使用人工智能，而是教你如何在人機協作時代，運用 AI 重塑管理方式、提升領導影響力，並讓每一次溝通與決策更貼近組織策略。<strong className="text-yellow-300">不要錯過。</strong>
          </p>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white/70">工作坊時長</h3>
              <p className="text-2xl font-bold">半天（約 4 小時）</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white/70">適合人數</h3>
              <p className="text-2xl font-bold">12 至 25 人</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white/70">授課語言</h3>
              <p className="text-2xl font-bold">粵語／普通話</p>
              <p className="text-sm text-white/60 mt-1">教材中英對照</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white/70">授課形式</h3>
              <p className="text-lg font-bold">高度互動實驗型工作坊</p>
              <p className="text-sm text-white/60 mt-1">角色扮演、小組討論、AI 即場操作演練</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4D21D0] mb-6">
            立即行動
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            准备好將您的領導力提升到下一個層次了嗎？
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#4D21D0] text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-[#3a19a8] transition-all shadow-lg hover:shadow-xl"
          >
            立即查詢課程詳情
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p className="text-gray-400">© 2026 WISE Consultant Asia. All rights reserved.</p>
      </footer>
    </div>
  );
}