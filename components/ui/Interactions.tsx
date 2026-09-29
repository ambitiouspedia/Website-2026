"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Site-wide micro-interactions, mounted once in the root layout:
//  • Scroll reveal — elements with [data-reveal] fade/slide in when they
//    enter the viewport (CSS in globals.css; only active under html.js).
//  • Spotlight — .spot cards get a soft light that follows the cursor.
// Both respect prefers-reduced-motion and add no work on touch-only devices.
export default function Interactions() {
  const pathname = usePathname();

  // Reveal: re-scan on every client-side navigation.
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    // Safety net: anything already on screen is revealed straight away,
    // without waiting for the observer's first callback.
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add("is-in");
    });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Spotlight: one delegated listener, fine-pointer devices only.
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".spot");
      if (!card) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
