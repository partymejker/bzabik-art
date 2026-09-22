import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkSection } from "@/components/sections/WorkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProfileSection } from "@/components/sections/ProfileSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { navItems, sectionNumber } from "@/lib/navigation";
import { PageCount } from "@/components/PageCount";
import { HeroVideo } from "./hero-video";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const homeIndex = sectionNumber("/#top");
  const totalSections = navItems.length;

  return (
    <main className="archive-shell">
      <div className="archive-grid" aria-hidden="true" />

      <SiteHeader />

      <section className="hero" id="top" aria-labelledby="hero-title">
        <HeroVideo />

        <div className="hero-copy">
          <div className="hero-index" aria-label="Current section: Home">
            <span>{String(homeIndex).padStart(2, "0")}</span>
            <span className="index-line" />
            <span>HOME</span>
          </div>

          <div className="hero-content">
            <p className="eyebrow">AN INDEPENDENT VISUAL PRACTICE</p>
            <h1 id="hero-title">
              <span>DIGITAL</span>
              <span>CREATIVE</span>
              <span className="hero-accent">ARCHIVE</span>
            </h1>
            <p className="discipline-line">
              FILM <b>&middot;</b> 3D <b>&middot;</b> ANIMATION <b>&middot;</b> AI
            </p>
          </div>
        </div>

        <div className="hero-footer">
          <PageCount current={homeIndex} total={totalSections} />
          <Link className="explore-link" href="/#work">
            EXPLORE <span aria-hidden="true">&darr;</span>
          </Link>
        </div>
      </section>

      <WorkSection />
      <AboutSection />
      <ProfileSection />
      <ContactSection />
    </main>
  );
}
