import useScrollProgress from "../hooks/useScrollProgress.js";
import { content } from "../data/content.js";

const links = ["about", "skills", "experience", "work", "contact"];

export default function Navbar() {
  const progress = useScrollProgress();
  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} />
      <nav>
        <b>{content.name}<i>.</i></b>
        <div>{links.map((l) => <a key={l} href={`#${l}`}>{l}</a>)}</div>
      </nav>
    </>
  );
}
