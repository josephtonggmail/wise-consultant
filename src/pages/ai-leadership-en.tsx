import { Link } from "react-router-dom";

export default function AiLeadershipCourseEn() {
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
            Professional Workshop Series
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Strategic AI Leadership
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            Human-AI Collaboration and Decision-Making in Practice
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/en"
              className="bg-white text-[#4D21D0] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Back to Home
            </Link>
            <Link
              to="/ai-leadership"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#4D21D0] transition-all"
            >
              中文版
            </Link>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4D21D0] mb-8 text-center">
            Course Overview
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is a practical workshop designed specifically for senior and mid-level managers. Rather than focusing on tool operation, document generation, or process automation, this course targets the core competency managers need most: how to leverage strategic thinking and artificial intelligence in the era of human-machine collaboration to improve management communication quality, meeting judgment, and decision-making standards.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Many enterprises have started using AI, but the application level still停留在文字校對、簡報製作與內容生成。真正具策略眼光的領導者已發現：當人工智能進入管理結構，它不只是提升效率，更能讓主管與員工由對立走向校準，讓跨部門討論更貼近公司策略，讓原本沒有人提出的決策風險提早浮現。<strong className="text-[#4D21D0]">This is the most worthwhile direction for AI leadership development.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-6 bg-[#4D21D0]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Target Audience</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <p className="text-xl">
              Senior executives, mid-level managers, and HR leaders who need to enhance strategic management thinking
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#4D21D0] mb-8 text-center">
            Are You Facing These Challenges?
          </h2>
          <div className="grid gap-4">
            {[
              "Is your AI application still limited to document generation, presentation creation, and data analysis?",
              "Have you started applying it to workflow automation but still only at the efficiency improvement level?",
              "Is your company still stuck in the myth of 'Will AI replace employees'?",
              "Are you still debating employee acceptance of AI on emotional issues?",
              "Do you始终缺乏運用AI實踐策略性管理與決策，做到真正人機共融？"
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
            What You'll Gain
          </h2>
          <div className="grid gap-6">
            {[
              { icon: "🎯", title: "Upgrade to Strategic Partner", desc: "Elevate AI from a daily tool to a strategic partner for managers, expanding the true value of AI in leadership scenarios" },
              { icon: "🤝", title: "Build Performance Consensus", desc: "Use AI to assist in discussing performance issues between managers and employees, reducing defensiveness and misunderstandings" },
              { icon: "💬", title: "Communication Impact", desc: "Methods to enhance the persuasiveness of management communication, making it easier for employees to understand and be willing to accept" },
              { icon: "⚡", title: "Meeting Blind Spot Scanning", desc: "Use intelligent systems to identify meeting blind spots and decision risks, reducing resource misallocation and ineffective investment" }
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
            Course Content
          </h2>
          <div className="space-y-6">
            {[
              { num: "01", title: "AI Performance Communication Practice", desc: "How to use AI to resolve employee defensiveness and build consensus between managers and employees?" },
              { num: "02", title: "Smart Meeting Blind Spot Scanning", desc: "How to use AI to reveal omissions in meetings and improve collective judgment quality?" },
              { num: "03", title: "AI Communication Impact Experiment", desc: "How to prevent AI applications from dehumanizing communication?" },
              { num: "04", title: "AI Model Strategic Translation", desc: "How to use AI to make cross-departmental proposals closer to company strategy and build true common direction?" },
              { num: "05", title: "Black-Hat AI Decision Rehearsal", desc: "How to use AI to rehearse failure risks and avoid time, manpower, and resources being consumed by mistakes?" }
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
          <h2 className="text-3xl font-bold mb-8">Course Summary</h2>
          <p className="text-xl leading-relaxed mb-8">
            If you want to elevate AI's value beyond mere efficiency improvement, process automation, and content generation—and truly advance into management communication, strategic collaboration, and high-quality decision-making—<strong>this workshop is designed for you.</strong>
          </p>
          <p className="text-lg opacity-90">
            This course doesn't just teach you how to use AI—it teaches you how to use AI in the era of human-machine collaboration to reshape management methods, enhance leadership influence, and make every communication and decision closer to organizational strategy.<strong className="text-yellow-300"> Don't miss this opportunity.</strong>
          </p>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white/70">Workshop Duration</h3>
              <p className="text-2xl font-bold">Half Day (~4 Hours)</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white/70">Ideal Group Size</h3>
              <p className="text-2xl font-bold">12 to 25 Participants</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white/70">Language</h3>
              <p className="text-2xl font-bold">Cantonese / Mandarin</p>
              <p className="text-sm text-white/60 mt-1">Materials in Chinese and English</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-white/70">Format</h3>
              <p className="text-lg font-bold">Highly Interactive Workshop</p>
              <p className="text-sm text-white/60 mt-1">Role-play, Group Discussion, Live AI Hands-on Exercises</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4D21D0] mb-6">
            Take Action Now
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to elevate your leadership to the next level?
          </p>
          <Link
            to="/en/contact"
            className="inline-block bg-[#4D21D0] text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-[#3a19a8] transition-all shadow-lg hover:shadow-xl"
          >
            Inquire About This Course
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