"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "@/data/process";
import "./ProcessStepper.css";

// Interactive 7-step process (ARIA tabs). Auto-advances while visible until
// the visitor interacts; never auto-advances with reduced motion. All step
// text is in the HTML for search engines (inactive panels are just hidden).
export default function ProcessStepper({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([e]) => {
      clearInterval(timer);
      if (e.isIntersecting) timer = setInterval(() => setActive((a) => (a + 1) % PROCESS_STEPS.length), 3800);
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); clearInterval(timer); };
  }, [auto]);

  const select = (i: number) => { setAuto(false); setActive(i); };
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = PROCESS_STEPS.length;
    const next = e.key === "ArrowRight" || e.key === "ArrowDown" ? (i + 1) % n
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (i - 1 + n) % n
      : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : null;
    if (next === null) return;
    e.preventDefault();
    select(next);
    tabs.current[next]?.focus();
  };

  return (
    <div ref={ref} className={`stepper stepper--${tone}`} data-reveal>
      <div className="stepper__rail" role="tablist" aria-label="How we work">
        <span className="stepper__progress" style={{ ["--p" as string]: active / (PROCESS_STEPS.length - 1) }} aria-hidden="true" />
        {PROCESS_STEPS.map((s, i) => (
          <button
            key={s.label}
            ref={(el) => { tabs.current[i] = el; }}
            role="tab"
            id={`step-tab-${i}`}
            aria-selected={active === i}
            aria-controls={`step-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            className={`stepper__tab ${i <= active ? "is-done" : ""}`}
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="stepper__dot">{String(i + 1).padStart(2, "0")}</span>
            <span className="stepper__label">{s.label}</span>
          </button>
        ))}
      </div>

      {PROCESS_STEPS.map((s, i) => (
        <div
          key={s.label}
          role="tabpanel"
          id={`step-panel-${i}`}
          aria-labelledby={`step-tab-${i}`}
          hidden={active !== i}
          className="stepper__panel"
        >
          <span className="stepper__big" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
          <div className="stepper__deliv">
            <span>You get</span>
            <b>{s.deliverable}</b>
          </div>
        </div>
      ))}
    </div>
  );
}
