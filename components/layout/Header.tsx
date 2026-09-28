"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SERVICE_GROUPS, getServicesByGroup } from "@/data/services";
import "./Header.css";

const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function Logo({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Link
      href="/"
      className={`logo logo--${variant}`}
      aria-label="Ambitious Pedia Tech and Services — home"
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={30}
        height={46}
        className="logo__mark"
        priority
      />
      <span className="logo__text">
        <span className="logo__name">Ambitious Pedia</span>
        <span className="logo__sub">Tech and Services</span>
      </span>
    </Link>
  );
}

// ─── Services mega-menu (desktop) ────────────────────────────────────────────
function ServicesMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Mouse users open the menu by hovering, so their click on the button must
  // not toggle it straight back closed. Keyboard/touch users toggle by click.
  const hovering = useRef(false);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="mega"
      data-open={open}
      onMouseEnter={() => { hovering.current = true; setOpen(true); }}
      onMouseLeave={() => { hovering.current = false; setOpen(false); }}
    >
      <button
        type="button"
        className={`nav-link ${active ? "is-active" : ""}`}
        aria-expanded={open}
        aria-controls="services-menu"
        onClick={() => (hovering.current ? setOpen(true) : setOpen((v) => !v))}
      >
        Services <ChevronDown aria-hidden="true" className="mega__chev" />
      </button>

      <div id="services-menu" className="mega__panel">
        <div className="mega__grid">
          {SERVICE_GROUPS.map((group) => (
            <div key={group.id} className="mega__col">
              <p className="mega__group">{group.name}</p>
              <ul>
                {getServicesByGroup(group.id).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} onClick={() => setOpen(false)}>
                      {s.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link href="/services" className="mega__all" onClick={() => setOpen(false)}>
          View all services <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll behind the open drawer; close it if the viewport widens
  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const mq = window.matchMedia("(min-width: 1100px)");
    const close = (e: MediaQueryListEvent) => { if (e.matches) setMobileOpen(false); };
    mq.addEventListener("change", close);
    return () => {
      document.body.style.overflow = "";
      mq.removeEventListener("change", close);
    };
  }, [mobileOpen]);

  const closeDrawer = () => setMobileOpen(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`header ${scrolled || mobileOpen ? "header--solid" : ""}`}>
      <div className="container header__bar">
        <Logo />

        <nav className="header__nav" aria-label="Primary">
          <ServicesMenu active={isActive("/services")} />
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className={`nav-link ${isActive(href) ? "is-active" : ""}`}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn--primary header__cta">
          Book a consultation
        </Link>

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
          <p className="drawer__label">Services</p>
          <ul className="drawer__services">
            {SERVICE_GROUPS.flatMap((g) => getServicesByGroup(g.id)).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} tabIndex={mobileOpen ? 0 : -1} onClick={closeDrawer}>{s.shortName}</Link>
              </li>
            ))}
          </ul>
          <ul className="drawer__main">
            <li><Link href="/services" tabIndex={mobileOpen ? 0 : -1} onClick={closeDrawer}>All services</Link></li>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}><Link href={href} tabIndex={mobileOpen ? 0 : -1} onClick={closeDrawer}>{label}</Link></li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn--primary drawer__cta" tabIndex={mobileOpen ? 0 : -1} onClick={closeDrawer}>
            Book a consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
