import Doodle from "../components/Doodle.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { content } from "../data/content.js";

export default function Contact() {
  return (
    <section id="contact" className="alt">
      <div className="wrap">
        <SectionTitle title="Let’s work together" sub="Open to accounting roles in the UAE and available to join immediately." />
        <div className="contact-grid">
          <Doodle name="envelope" className="envelope" />
          <Reveal className="contact-right" delay={0.15}>
            {/* curved arrow pointing at the button */}
            <Doodle name="arrowContact" className="contact-arrow" />
            <div className="hand">say hello here!</div>
            <p><b>Email</b> · {content.email}</p>
            <p><b>Phone</b> · {content.phone}</p>
            <p><b>Based in</b> United Arab Emirates</p>
            <a className="pill big" href={`mailto:${content.email}`}>Send me an email</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
