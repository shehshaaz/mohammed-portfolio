import Doodle from "../components/Doodle.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { content } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="alt">
      <div className="wrap">
        <SectionTitle title="About me" />
        <div className="about-grid">
          <div className="art small">
            <Doodle name="person" style={{ inset: "4% 0 0 0", width: "100%", height: "92%" }} />
            <div className="hand" style={{ right: "-2%", top: 0, transform: "rotate(5deg)" }}>numbers<br />don’t lie!</div>
          </div>
          <div>
            {content.about.map((t, i) => <Reveal as="p" key={i} delay={i * 0.1}>{t}</Reveal>)}
            <Reveal className="facts" delay={0.2}>
              {content.facts.map((f) => <div key={f.small}><b>{f.big}</b>{f.small}</div>)}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
