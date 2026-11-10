import Doodle from "../components/Doodle.jsx";
import Reveal from "../components/Reveal.jsx";
import { content } from "../data/content.js";

export default function Hero() {
  const { hero, name, role } = content;
  return (
    <section id="hero">
      <div className="wrap hero-grid">
        <div>
          <Reveal className="hi">{hero.greeting}</Reveal>
          <Reveal as="h1" delay={0.1}>{name}</Reveal>
          <Reveal className="role" delay={0.2}>{role}<Doodle name="underline" stretch /></Reveal>
          <Reveal as="p" className="lead" delay={0.3}>{hero.text}</Reveal>
          <Reveal className="btns" delay={0.4}>
            <a className="pill" href="#contact">Hire me</a>
            <a className="read-link" href="#work">See my work →</a>
          </Reveal>
        </div>

        {/* Doodle cluster: calculator + graph + hand-drawn arrows */}
        <div className="art">
          <Doodle name="calculator" className="float" style={{ left: "18%", top: "14%", width: "50%" }} />
          <Doodle name="graph" style={{ right: 0, top: "2%", width: "38%" }} />
          <Doodle name="arrowCurve" style={{ left: "-2%", bottom: "6%", width: "46%" }} />
          <Doodle name="squiggle" style={{ right: "6%", bottom: "10%", width: "30%" }} />
          <div className="hand" style={{ right: "2%", bottom: "2%", transform: "rotate(-6deg)" }}>{hero.note}</div>
        </div>
      </div>
    </section>
  );
}
