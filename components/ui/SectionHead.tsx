import type { ReactNode } from "react";

// Standard section heading: eyebrow → H2 → optional one-line intro.
// `aside` renders on the right (e.g. a "View all" link) on wide screens.
export default function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
  aside,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  center?: boolean;
  aside?: ReactNode;
  id?: string;
}) {
  const head = (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
  if (aside) {
    return (
      <div className="section-head section-head--row" data-reveal>
        {head}
        {aside}
      </div>
    );
  }
  return (
    <div className={`section-head ${center ? "section-head--center" : ""}`} data-reveal>
      {head}
    </div>
  );
}
