import { content } from "../data/content.js";

// Endless left-scrolling logo strip.
// Trick: the list is rendered TWICE and the track slides left by exactly 50%,
// then restarts. The second copy is identical, so the loop looks seamless.
export default function ToolsMarquee() {
  const { tools } = content;
  const row = [...tools, ...tools];
  return (
    <div className="tools">
      <h3>Tools I work with</h3>
      <div className="marquee">
        <div className="track">
          {row.map((t, i) => (
            <div className="logo" key={i} aria-hidden={i >= tools.length}>
              {t.logo
                ? <img src={t.logo} alt={t.name} />
                : <span className="mark" style={{ background: t.color }}>{t.mark}</span>}
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
