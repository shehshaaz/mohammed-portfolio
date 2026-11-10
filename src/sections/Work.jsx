import Doodle from "../components/Doodle.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { content } from "../data/content.js";

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <SectionTitle title="Work highlights" sub="The kinds of work I’ve delivered, drawn from my roles." />
        <div className="grid two">
          {content.work.map((w, i) => (
            <Reveal className="card" key={w.title} delay={(i % 2) * 0.1}>
              <Doodle name={w.doodle} />
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="process">
          {content.process.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <Doodle name={s.doodle} />
              <b>{s.title}</b><small>{s.text}</small>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
