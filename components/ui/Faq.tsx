import { Plus } from "lucide-react";
import "./Faq.css";

// Accessible accordion built on native <details>/<summary> — works without
// JS, keyboard-friendly, and every answer is in the HTML for search engines.
// Pair with getFaqSchema() for FAQPage structured data.
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={f.q} className="faq__item" data-reveal style={{ ["--d" as string]: Math.min(i, 6) }}>
          <summary>
            <span>{f.q}</span>
            <Plus className="faq__icon" aria-hidden="true" />
          </summary>
          <div className="faq__answer">
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
