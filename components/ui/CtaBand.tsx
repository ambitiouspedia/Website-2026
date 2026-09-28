import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import "./CtaBand.css";

export default function CtaBand({
  title = "Tell us what's slowing your business down.",
  text = "Book a consultation. We'll understand your process, point out where technology can help, and recommend the right next step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-band__panel">
          <div className="cta-band__copy">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-band__actions">
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
