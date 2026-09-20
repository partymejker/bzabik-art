import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { navItems } from "@/lib/navigation";
import { contactEmail } from "@/lib/contact";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact — BZABIK.ART",
  description: "Get in touch with BZABIK.ART.",
};

export default function ContactPage() {
  const contactIndex = navItems.findIndex((item) => item.href === "/contact") + 1;

  return (
    <main className="archive-shell">
      <div className="archive-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="hero-index" aria-label="Current section: Contact">
          <span>{String(contactIndex).padStart(2, "0")}</span><span className="index-line" /><span>CONTACT</span>
        </div>

        <div className="contact-statement">
          <p className="eyebrow">GET IN TOUCH</p>
          <h1 id="contact-title">
            <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </h1>
        </div>
      </section>
    </main>
  );
}
