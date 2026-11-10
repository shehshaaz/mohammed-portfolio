import { useRef } from "react";
import useReveal from "../hooks/useReveal.js";

// Wrap anything in <Reveal> to fade it in when it scrolls into view.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const seen = useReveal(ref);
  return (
    <Tag ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }} {...rest}>
      {children}
    </Tag>
  );
}
