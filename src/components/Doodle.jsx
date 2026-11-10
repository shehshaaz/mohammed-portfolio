import { useRef } from "react";
import useReveal from "../hooks/useReveal.js";

// helper: a circle drawn as a path (so it can be "drawn" by the animation)
const c = (x, y, r) => `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

// Every doodle: a viewBox (vb) + a list of strokes (p).
// A stroke is a path string, or [path, true] for a light red fill.
export const DOODLES = {
  underline: { vb: "0 0 200 14", p: ["M2 9C50 2 120 13 198 4"] },
  calculator: { vb: "0 0 120 150", p: [
    "M20 12Q60 6 100 12Q106 70 102 136Q60 142 18 136Q14 70 20 12Z",
    ["M30 24L90 23L91 44L29 45Z", 1],
    c(38, 66, 5), c(60, 66, 5), c(82, 66, 5), c(38, 88, 5), c(60, 88, 5), c(82, 88, 5),
    "M33 110H67M78 107L88 117M88 107L78 117"] },
  graph: { vb: "0 0 110 80", p: ["M6 4V72H104", "M12 60L34 42L52 52L72 26L96 12", "M84 10L97 11L94 24", c(34, 42, 2)] },
  arrowCurve: { vb: "0 0 130 70", p: ["M4 8C40 -2 90 6 120 52", "M104 48L121 55L123 36"] },
  squiggle: { vb: "0 0 100 70", p: ["M10 62C30 30 60 70 90 8", "M76 10L91 6L92 22"] },
  person: { vb: "0 0 220 220", p: [
    c(90, 62, 24), "M76 56Q90 46 104 56",
    "M52 150Q54 100 90 98Q126 100 128 150",
    "M62 190L40 196L52 150H128L146 196Z",
    ["M62 160H116L124 186H56Z", 1],
    "M128 130L160 96H196V150H158Z", "M168 140V122M178 140V108M188 140V116"] },
  pie: { vb: "0 0 80 80", p: [c(40, 40, 28), ["M40 40V12A28 28 0 0 1 64 54Z", 1], "M40 40V12M40 40L64 54"] },
  calcSmall: { vb: "0 0 80 80", p: [
    "M22 8Q40 4 58 8Q61 40 58 72Q40 76 22 72Q19 40 22 8Z", ["M28 16H52V28H28Z", 1],
    "M30 40H34M38 40H42M46 40H50M30 52H34M38 52H42M46 52H50"] },
  doc: { vb: "0 0 80 80", p: ["M18 6H48L62 20V74H18Z", "M48 6V20H62", "M26 34H54M26 44H54M26 54H42"] },
  bars: { vb: "0 0 80 80", p: ["M10 70H70", ["M16 70V46H28V70M34 70V28H46V70M52 70V16H64V70", 1]] },
  magnify: { vb: "0 0 80 80", p: [c(34, 34, 20), "M48 48L72 72", "M26 36L32 42L44 26"] },
  magnifyTrend: { vb: "0 0 80 80", p: [c(32, 32, 22), "M48 48L72 72", "M22 38L28 30L34 36L42 24"] },
  card: { vb: "0 0 80 80", p: ["M12 22H68V62H12Z", ["M12 34H68V44H12Z", 1], c(56, 54, 3)] },
  sheets: { vb: "0 0 80 80", p: ["M14 8H50V66H14Z", "M24 16H60V74H24Z", "M32 56V46M40 56V36M48 56V42"] },
  bulb: { vb: "0 0 80 80", p: ["M24 40A18 18 0 1 1 56 40C56 48 50 50 50 58H30C30 50 24 48 24 40Z", "M32 68H48"] },
  target: { vb: "0 0 80 80", p: [c(40, 40, 28), c(40, 40, 16), [c(40, 40, 4), 1]] },
  growth: { vb: "0 0 80 80", p: ["M12 70H70", "M16 56L34 38L46 48L68 18", "M54 16L69 16L68 31"] },
  ring: { vb: "0 0 44 44", p: [c(22, 22, 16), [c(22, 22, 6), 1]] },
  arrowDown: { vb: "0 0 46 86", p: ["M8 2C40 20 -4 50 22 76", "M10 66L22 78L32 62"] },
  envelope: { vb: "0 0 120 100", p: [
    "M8 20Q60 16 112 20Q115 55 112 86Q60 90 8 86Q5 55 8 20Z", "M10 22L60 58L110 22",
    ["M50 12C50 4 58 2 60 8C62 2 70 4 70 12C70 18 60 24 60 24C60 24 50 18 50 12Z", 1]] },
  arrowContact: { vb: "0 0 130 90", p: ["M6 12C40 -6 100 10 112 66", "M98 56L113 70L122 50"] },
};

// Hidden SVG filter that makes every line slightly wobbly, like a marker.
export function RoughFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <filter id="rough">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" />
        <feDisplacementMap in="SourceGraphic" scale="3.2" />
      </filter>
    </svg>
  );
}

// <Doodle name="calculator" /> — draws itself when scrolled into view.
export default function Doodle({ name, className = "", style, stretch = false }) {
  const ref = useRef(null);
  const seen = useReveal(ref);
  const { vb, p } = DOODLES[name];
  return (
    <svg ref={ref} viewBox={vb} style={style} aria-hidden="true"
      preserveAspectRatio={stretch ? "none" : undefined}
      className={`doodle ${seen ? "in" : ""} ${className}`}>
      {p.map((stroke, i) => {
        const [d, filled] = Array.isArray(stroke) ? stroke : [stroke, false];
        return <path key={i} d={d} pathLength="1" className={filled ? "fill" : ""}
          style={{ animationDelay: `${Math.min(i, 6) * 0.15}s` }} />;
      })}
    </svg>
  );
}
