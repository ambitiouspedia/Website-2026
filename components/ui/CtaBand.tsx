import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import "./CtaBand.css";

export default function CtaBand({
  title = "Tell us what's slowing your business down.",
  text = "A short call is enough to understand your process and suggest the right next step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__panel" data-reveal>
          <div className="cta__glow" aria-hidden="true" />
          <div className="cta__copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta__actions">
            <Link href="/contact" className="btn btn--primary">
              Book a consultation <ArrowRight aria-hidden="true" />
            </Link>
            <a href={SITE.phoneHref} className="btn btn--ghost-dark">
              <Phone aria-hidden="true" /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
