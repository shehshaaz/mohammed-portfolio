import { RoughFilter } from "./components/Doodle.jsx";
import Navbar from "./components/Navbar.jsx";
import ToolsMarquee from "./components/ToolsMarquee.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Work from "./sections/Work.jsx";
import Contact from "./sections/Contact.jsx";
import { content } from "./data/content.js";

export default function App() {
  return (
    <>
      <RoughFilter />
      <Navbar />
      <Hero />
      <About />
      <ToolsMarquee />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <footer>© 2026 {content.name} · {content.role}, United Arab Emirates</footer>
    </>
  );
}
