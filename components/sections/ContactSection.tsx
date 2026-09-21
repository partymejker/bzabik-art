import Link from "next/link";
import { contactEmail } from "@/lib/contact";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="portfolio-section contact-section" aria-labelledby="contact-title">
      <div className="hero-index" aria-label="Section: Contact">
        <span>05</span>
        <span className="index-line" />
        <span>GET IN TOUCH</span>
      </div>

      <Reveal>
        <div className="contact-statement">
          <p className="eyebrow">INQUIRIES &amp; COLLABORATION</p>
          <h2 id="contact-title" className="contact-heading">
            <a className="contact-email" href={`mailto:${contactEmail}`} aria-label={`Email ${contactEmail}`}>
              {contactEmail}
            </a>
          </h2>
          <p className="contact-note">
            Available for multimedia production, 3D visualization, animation, and creative technology projects.
          </p>
        </div>
      </Reveal>

      <footer className="portfolio-footer">
        <p className="footer-brand">
          BZABIK<span>.ART</span> &middot; DIGITAL CREATIVE ARCHIVE
        </p>
        <Link className="explore-link back-to-top" href="/#top">
          TOP <span aria-hidden="true">&uarr;</span>
        </Link>
      </footer>
    </section>
  );
}
