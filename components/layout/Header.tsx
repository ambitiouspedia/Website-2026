"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, BookOpen, Newspaper, Building2, Factory } from "lucide-react";
import { CATEGORIES, getServicesByCategory } from "@/data/services";
import Icon from "@/components/ui/Icon";
import "./Header.css";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className={`logo logo--${tone}`} aria-label="Ambitious Pedia Tech and Services — home">
      <Image src="/images/logo-mark.png" alt="" width={26} height={40} className="logo__mark" priority />
      <span className="logo__text">
        <span className="logo__name">Ambitious Pedia</span>
        <span className="logo__sub">Tech and Services</span>
      </span>
    </Link>
  );
}

const RESOURCES = [
  { label: "Insights", href: "/insights", text: "Articles on AI, ERP, CRM and business technology", icon: Newspaper },
  { label: "Learning", href: "/learning", text: "Guides, checklists and tutorials", icon: BookOpen },
];
const COMPANY = [
  { label: "About us", href: "/about", text: "Who we are and how we work", icon: Building2 },
  { label: "Industries", href: "/industries", text: "Businesses we work with", icon: Factory },
];

// ─── Dropdown shell: hover on mouse, click/keyboard everywhere ──────────────
function Dropdown({ label, active, wide, children }: { label: string; active: boolean; wide?: boolean; children: (close: () => void) => ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const close = () => setOpen(false);
  const id = `menu-${label.toLowerCase()}`;
  return (
    <div
      ref={ref}
      className={`dd ${wide ? "dd--wide" : ""}`}
      data-open={open}
      onMouseEnter={() => { hovering.current = true; setOpen(true); }}
      onMouseLeave={() => { hovering.current = false; setOpen(false); }}
    >
      <button
        type="button"
        className={`nav-link ${active ? "is-active" : ""}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => (hovering.current ? setOpen(true) : setOpen((v) => !v))}
      >
        {label} <ChevronDown aria-hidden="true" className="dd__chev" />
      </button>
      <div id={id} className="dd__panel">{children(close)}</div>
    </div>
  );
}

function LinkList({ items, close }: { items: typeof RESOURCES; close: () => void }) {
  return (
    <ul className="dd__list">
      {items.map((it) => (
        <li key={it.href}>
          <Link href={it.href} onClick={close} className="dd__item">
            <span className="icon-tile"><it.icon aria-hidden="true" /></span>
            <span><b>{it.label}</b><small>{it.text}</small></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const mq = window.matchMedia("(min-width: 1100px)");
    const close = (e: MediaQueryListEvent) => { if (e.matches) setMobileOpen(false); };
    mq.addEventListener("change", close);
    return () => { document.body.style.overflow = ""; mq.removeEventListener("change", close); };
  }, [mobileOpen]);

  const is = (...hrefs: string[]) => hrefs.some((h) => pathname === h || pathname.startsWith(`${h}/`));
  const closeDrawer = () => setMobileOpen(false);
  const tab = mobileOpen ? 0 : -1;

  return (
    <header className={`header ${scrolled || mobileOpen ? "header--solid" : ""}`}>
      <div className="container header__bar">
        <Logo />

        <nav className="header__nav" aria-label="Primary">
          <Dropdown label="Services" active={is("/services")} wide>
            {(close) => (
              <>
                <div className="mega">
                  {CATEGORIES.map((c) => (
                    <div key={c.id} className="mega__col">
                      <p className="mega__head"><Icon name={c.icon} /> {c.name}</p>
                      <ul>
                        {getServicesByCategory(c.id).map((s) => (
                          <li key={s.slug}><Link href={`/services/${s.slug}`} onClick={close}>{s.shortName}</Link></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link href="/services" className="mega__all" onClick={close}>All services <ArrowRight aria-hidden="true" /></Link>
              </>
            )}
          </Dropdown>
          <Link href="/solutions" className={`nav-link ${is("/solutions") ? "is-active" : ""}`}>Solutions</Link>
          <Link href="/projects" className={`nav-link ${is("/projects") ? "is-active" : ""}`}>Projects</Link>
          <Dropdown label="Resources" active={is("/insights", "/learning")}>
            {(close) => <LinkList items={RESOURCES} close={close} />}
          </Dropdown>
          <Dropdown label="Company" active={is("/about", "/industries")}>
            {(close) => <LinkList items={COMPANY} close={close} />}
          </Dropdown>
        </nav>

        <Link href="/contact" className="btn btn--primary btn--sm header__cta">Book a consultation</Link>

        <button
          type="button"
          className="burger"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          data-open={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      <div id="mobile-menu" className="drawer" data-open={mobileOpen} aria-hidden={!mobileOpen}>
        <nav className="container drawer__nav" aria-label="Mobile">
          {CATEGORIES.map((c) => (
            <details key={c.id} className="drawer__group">
              <summary tabIndex={tab}><Icon name={c.icon} /> {c.name} <ChevronDown aria-hidden="true" /></summary>
              <ul>
                {getServicesByCategory(c.id).map((s) => (
                  <li key={s.slug}><Link href={`/services/${s.slug}`} tabIndex={tab} onClick={closeDrawer}>{s.name}</Link></li>
                ))}
              </ul>
            </details>
          ))}
          <ul className="drawer__main">
            {[
              { label: "All services", href: "/services" },
              { label: "Solutions", href: "/solutions" },
              { label: "Projects", href: "/projects" },
              ...RESOURCES,
              ...COMPANY,
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.href}><Link href={l.href} tabIndex={tab} onClick={closeDrawer}>{l.label}</Link></li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn--primary drawer__cta" tabIndex={tab} onClick={closeDrawer}>
            Book a consultation <ArrowRight aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
