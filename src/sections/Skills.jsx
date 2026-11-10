import Doodle from "../components/Doodle.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { content } from "../data/content.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionTitle title="What I do" sub="The accounting work I do day to day." />
        <div className="grid">
          {content.skills.map((s, i) => (
            <Reveal className="card" key={s.title} delay={(i % 3) * 0.1}>
              <Doodle name={s.doodle} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="tags">{content.softSkills.map((t) => <span key={t}>{t}</span>)}</Reveal>
      </div>
    </section>
  );
}
