import { ProfileTimeline } from "@/components/ProfileTimeline";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { Reveal } from "@/components/Reveal";
import { PageCount } from "@/components/PageCount";
import { capabilityGroups, cvPdfUrl, languages, profileIntro, timeline } from "@/lib/profile";
import { sectionNumber } from "@/lib/navigation";

export function ProfileSection() {
  const workEntries = timeline.filter((entry) => entry.type === "work");
  const educationEntries = timeline.filter((entry) => entry.type === "education");

  return (
    <section id="profile" className="portfolio-section profile-section" aria-labelledby="profile-title">
      <div className="profile-section-header">
        <div className="hero-index" aria-label="Section: Profile">
          <span>04</span>
          <span className="index-line" />
          <span>CAREER ARCHIVE</span>
        </div>
        <div className="profile-intro">
          <p className="eyebrow">BACKGROUND &amp; CAPABILITIES</p>
          <h2 id="profile-title" className="section-title">
            PROFILE<span className="hero-accent">/CV</span>
          </h2>
          <p className="profile-summary">{profileIntro.summary}</p>
          {cvPdfUrl && (
            <a className="cv-download" href={cvPdfUrl} download>
              DOWNLOAD CV <span aria-hidden="true">&darr;</span>
            </a>
          )}
        </div>
      </div>

      <div className="profile-timeline-section" aria-labelledby="experience-heading">
        <h3 id="experience-heading" className="section-heading">
          Experience
        </h3>
        <Reveal>
          <ProfileTimeline entries={workEntries} />
        </Reveal>
      </div>

      <div className="profile-timeline-section" aria-labelledby="education-heading">
        <h3 id="education-heading" className="section-heading">
          Education
        </h3>
        <Reveal>
          <ProfileTimeline entries={educationEntries} />
        </Reveal>
      </div>

      <div className="profile-capabilities" aria-labelledby="capabilities-heading">
        <h3 id="capabilities-heading" className="section-heading">
          Capabilities
        </h3>
        <Reveal>
          <CapabilitiesGrid groups={capabilityGroups} />
        </Reveal>
      </div>

      <div className="profile-languages" aria-labelledby="languages-heading">
        <h3 id="languages-heading" className="section-heading">
          Languages
        </h3>
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
      </div>

      <div className="section-index-footer">
        <PageCount current={sectionNumber("/#profile")} />
      </div>
    </section>
  );
}
