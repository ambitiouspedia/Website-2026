import "./Marquee.css";

// Infinite scrolling strip. The list is rendered twice for a seamless loop;
// the copy is aria-hidden so screen readers hear it once. Pauses on hover;
// with reduced motion it becomes a static wrapped list.
export default function Marquee({ items, label }: { items: string[]; label: string }) {
  return (
    <div className="marquee" aria-label={label}>
      <div className="marquee__track">
        <ul>{items.map((it) => <li key={it}>{it}</li>)}</ul>
        <ul aria-hidden="true">{items.map((it) => <li key={it}>{it}</li>)}</ul>
      </div>
    </div>
  );
}
