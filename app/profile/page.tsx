import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ProfileTimeline } from "@/components/ProfileTimeline";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { Reveal } from "@/components/Reveal";
import { capabilityGroups, cvPdfUrl, languages, profileIntro, timeline } from "@/lib/profile";
import { navItems } from "@/lib/navigation";
import "./profile.css";

export const metadata: Metadata = {
  title: "Profile / CV — BZABIK.ART",
  description: "Professional background, experience and capabilities of Bartłomiej Żabik.",
};

export default function ProfilePage() {
  const workEntries = timeline.filter((entry) => entry.type === "work");
  const educationEntries = timeline.filter((entry) => entry.type === "education");
  const profileIndex = navItems.findIndex((item) => item.href === "/profile") + 1;

  return (
    <main className="archive-shell">
      <div className="archive-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="profile-hero" aria-labelledby="profile-title">
        <div className="hero-index" aria-label="Current section: Profile">
          <span>{String(profileIndex).padStart(2, "0")}</span><span className="index-line" /><span>PROFILE</span>
        </div>
        <div className="profile-intro">
          <p className="eyebrow">CAREER ARCHIVE</p>
          <h1 id="profile-title">
            PROFILE<span className="hero-accent">/CV</span>
          </h1>
          <p className="profile-summary">{profileIntro.summary}</p>
          {cvPdfUrl && (
            <a className="cv-download" href={cvPdfUrl} download>
              DOWNLOAD CV <span aria-hidden="true">&darr;</span>
            </a>
          )}
        </div>
      </section>

      <section className="profile-timeline-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="section-heading">Experience</h2>
        <Reveal>
          <ProfileTimeline entries={workEntries} />
        </Reveal>
      </section>

      <section className="profile-timeline-section" aria-labelledby="education-heading">
        <h2 id="education-heading" className="section-heading">Education</h2>
        <Reveal>
          <ProfileTimeline entries={educationEntries} />
        </Reveal>
      </section>

      <section className="profile-capabilities" aria-labelledby="capabilities-heading">
        <h2 id="capabilities-heading" className="section-heading">Capabilities</h2>
        <Reveal>
          <CapabilitiesGrid groups={capabilityGroups} />
        </Reveal>
      </section>

      <section className="profile-languages" aria-labelledby="languages-heading">
        <h2 id="languages-heading" className="section-heading">Languages</h2>
        <Reveal>
          <ul className="languages-list">
            {languages.map((language) => (
              <li key={language.name}>
                <span>{language.name}</span>
                <span>{language.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <div className="profile-footer">
        <Link className="explore-link" href="/">
          <span aria-hidden="true">&larr;</span> HOME
        </Link>
      </div>
    </main>
  );
}
