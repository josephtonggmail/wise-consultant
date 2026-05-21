import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import HomeEn from "./pages/home-en";
import About from "./pages/about";
import AboutEn from "./pages/about-en";
import Services from "./pages/services";
import ServicesEn from "./pages/services-en";
import Coaching from "./pages/coaching";
import CoachingEn from "./pages/coaching-en";
import Courses from "./pages/courses";
import CoursesEn from "./pages/courses-en";
import AiLeadership from "./pages/ai-leadership";
import AiLeadershipEn from "./pages/ai-leadership-en";
import Contact from "./pages/contact";
import ContactEn from "./pages/contact-en";
import LanguageToggle from "./components/language-toggle";

export { LanguageToggle };

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<HomeEn />} />
        <Route path="/about" element={<About />} />
        <Route path="/en/about" element={<AboutEn />} />
        <Route path="/services" element={<Services />} />
        <Route path="/en/services" element={<ServicesEn />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/en/coaching" element={<CoachingEn />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/en/courses" element={<CoursesEn />} />
        <Route path="/ai-leadership" element={<AiLeadership />} />
        <Route path="/en/ai-leadership" element={<AiLeadershipEn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/en/contact" element={<ContactEn />} />
      </Routes>
    </BrowserRouter>
  );
}