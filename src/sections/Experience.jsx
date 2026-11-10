import Doodle from "../components/Doodle.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { content } from "../data/content.js";

export default function Experience() {
  return (
    <section id="experience" className="alt">
      <div className="wrap">
        <SectionTitle title="Experience" sub="Where I’ve worked, newest first." />
        <div className="timeline">
          {content.jobs.map((job, i) => (
            <div key={job.title}>
              {/* hand-drawn arrow connecting one job to the next */}
              {i > 0 && <Reveal className="link"><Doodle name="arrowDown" /></Reveal>}
              <Reveal className="job">
                <Doodle name="ring" className="marker" />
                <div>
                  <h3>{job.title}</h3>
                  <div className="meta">{job.meta}</div>
                  <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        <div className="edu">
          {content.education.map((e, i) => (
            <Reveal className="card" key={e.title} delay={i * 0.1}>
              <small>{e.tag}</small><h3>{e.title}</h3><p>{e.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
