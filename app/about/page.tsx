import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { navItems } from "@/lib/navigation";
import "./about.css";

export const metadata: Metadata = {
  title: "About — BZABIK.ART",
  description: "An independent visual practice working across film, 3D, animation, AI, generative and interactive work.",
};

export default function AboutPage() {
  const aboutIndex = navItems.findIndex((item) => item.href === "/about") + 1;

  return (
    <main className="archive-shell">
      <div className="archive-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="about-hero" aria-labelledby="about-title">
        <div className="hero-index" aria-label="Current section: About">
          <span>{String(aboutIndex).padStart(2, "0")}</span><span className="index-line" /><span>ABOUT</span>
        </div>

        <div className="about-statement">
          <p className="eyebrow">PRACTICE STATEMENT</p>
          <h1 id="about-title">
            An independent visual practice working across film, 3D, animation, AI, generative and interactive work.
          </h1>
          <p className="about-detail">
            The interest lies in experimenting with the digital image — with procedurality, technology, and new ways of making and presenting it.
          </p>
        </div>
      </section>
    </main>
  );
}
