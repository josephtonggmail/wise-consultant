import { useState } from "react";
import { Brain, Lightbulb, Shield, Users, Menu, X, Mic, MessageCircle, UserCheck, TrendingUp, Cpu } from "lucide-react";
import LanguageToggle from "../components/language-toggle";

const NAV_LINKS = [
  { href: "/en", label: "Home" },
  { href: "/en/about", label: "About" },
  { href: "/en/services", label: "Services" },
  { href: "/en/coaching", label: "Coaching" },
  { href: "/en/courses", label: "Courses" },
  { href: "/en/contact", label: "Contact" },
];

const CATEGORIES = [
  { id: "communication", label: "Communication & Presentation" },
  { id: "leadership", label: "Organizational Development" },
  { id: "psychology", label: "Psychology Applications" },
  { id: "ai", label: "AI & Technology" },
];

const COURSES = {
  communication: [
    { title: "Workplace Mind-Reading Communication", desc: "Master the art of reading others' thoughts and emotions through neuroscience and psychology principles, building deep relationships and enhancing team collaboration and leadership influence.", duration: "12 hrs", img: "course-communication.jpg" },
    { title: "Public Speaking & Presentation Skills", desc: "From mental preparation to body language, elevate your stage presence and persuasive power in speeches, presentations, and negotiations with confidence and impact.", duration: "16 hrs", img: "course-publicspeaking.jpg" },
    { title: "Introvert Workplace Relationship Management", desc: "Communication strategies specifically designed for introverts, leveraging your unique I-type advantages to build quality professional networks and influence in the workplace.", duration: "8 hrs", img: "course-introvert.jpg" },
  ],
  leadership: [
    { title: "Strategic AI Leadership Workshop", desc: "Human-AI Collaboration and Decision-Making in Practice — A practical workshop for senior and mid-level managers, leveraging strategic thinking and AI to enhance management communication quality, meeting judgment, and decision-making standards.", duration: "4 hrs", img: "ai-leadership-hero.jpg", href: "/en/ai-leadership" },
    { title: "Growth Mindset Organization Building", desc: "Cultivate a Growth Mindset throughout your organization, establishing a culture of continuous learning, embracing challenges, and learning from failure to drive collective growth.", duration: "12 hrs", img: "course-growth.jpg" },
    { title: "Leadership in the AI Era", desc: "Learn to integrate AI tools into leadership practice in this rapidly evolving era of artificial intelligence, enhancing decision quality, team efficiency, and innovation capability.", duration: "16 hrs", img: "course-ai-leadership.jpg" },
    { title: "New-Era Leadership Fundamentals", desc: "Learn core neuroscience-based leadership concepts to build adaptive leadership thinking and capabilities for future challenges.", duration: "8 hrs", img: "course-leadership-1.jpg" },
    { title: "Change Management & Organizational Transformation", desc: "Master key change management skills to lead teams successfully through complex organizational transformation phases.", duration: "12 hrs", img: "course-leadership-2.jpg" },
  ],
  psychology: [
    { title: "Organizational Psychological Safety", desc: "Based on Amy Edmondson's framework, learn how to create trusting, open, and fearless work environments where team members feel safe to take risks and speak up.", duration: "8 hrs", img: "course-psychology-1.jpg" },
    { title: "Emotional Intelligence & Relationships", desc: "Develop core Emotional Intelligence (EQ) capabilities to enhance emotional management and interpersonal influence as a leader.", duration: "12 hrs", img: "course-psychology-2.jpg" },
  ],
  ai: [
    { title: "Organizational Talent Strategy in the AI Era", desc: "Learn to develop forward-looking talent strategies in the AI era, balancing human capabilities with technology augmentation.", duration: "8 hrs", img: "course-ai-1.jpg" },
    { title: "HR Digital Transformation", desc: "Master key steps and tools for HR digitalization to enhance the strategic value and operational efficiency of HR functions.", duration: "12 hrs", img: "course-ai-2.jpg" },
    { title: "AI-Assisted Leadership Development", desc: "Use AI tools to accelerate personalized leadership learning with real-time feedback, improving coaching and development efficiency.", duration: "10 hrs", img: "course-ai-3.jpg" },
  ],
};

export default function CoursesEn() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("communication");

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/en"><img src="/images/logo-full.png" alt="WISE" className="h-10" /></a>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(link => (
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
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="block text-sm font-medium text-gray-700 hover:text-[#4D21D0]">{link.label}</a>
            ))}
            <div className="pt-3 border-t border-gray-100"><LanguageToggle isZh={false} /></div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-[#4D21D0] to-[#6B3DD4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 pt-12">Professional Courses</h1>
          <p className="text-white/70 text-lg">Systematic learning journeys from foundational to advanced</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Neuroscience-Backed", desc: "All course content is based on neuroscience research and evidence-based practices, ensuring scientific validity and lasting learning outcomes" },
              { icon: Lightbulb, title: "Practical Tools", desc: "Beyond theoretical knowledge, we provide tools, frameworks, and methods that can be directly applied to work for immediate impact" },
              { icon: Shield, title: "Psychological Safety", desc: "Creating a safe and supportive learning environment where participants dare to try, dare to breakthrough, and enjoy sharing" },
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

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center bg-white rounded-xl p-1.5 shadow-sm">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-3 px-5 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[#4D21D0] text-white"
                    : "text-gray-500 hover:text-gray-700 bg-gray-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(COURSES[activeCategory as keyof typeof COURSES] || []).map((course: any, i: number) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#4D21D0]/30 hover:shadow-xl transition-all">
                <div className="h-48 relative overflow-hidden">
                  <img src={`/images/${course.img}`} alt={course.title} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.backgroundImage = 'linear-gradient(135deg, #4D21D0 0%, #69ADB6 100%)'; (e.target as HTMLImageElement).style.backgroundSize = 'cover'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-medium text-white bg-[#4D21D0] px-3 py-1 rounded-full">{course.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">{course.desc}</p>
                  <a href="/en/contact" className="text-sm font-medium text-[#69ADB6] hover:text-[#4D21D0] transition-colors">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#4D21D0] to-[#69ADB6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Inquire About Course Details & Corporate Training</h2>
          <p className="text-white/80 text-lg mb-8">We offer customized corporate training services, tailored to your organization's specific needs</p>
          <a href="/en/contact" className="inline-block bg-white text-[#4D21D0] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Contact Us</a>
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