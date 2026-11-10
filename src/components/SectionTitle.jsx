import Doodle from "./Doodle.jsx";
import Reveal from "./Reveal.jsx";

// Centered heading with the red hand-drawn underline.
export default function SectionTitle({ title, sub }) {
  return (
    <>
      <Reveal as="h2" className="section-title">{title}<Doodle name="underline" stretch /></Reveal>
      {sub && <Reveal as="p" className="sub">{sub}</Reveal>}
    </>
  );
}
