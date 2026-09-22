import { WorkIndexRow } from "@/components/WorkIndexRow";
import { Reveal } from "@/components/Reveal";
import { PageCount } from "@/components/PageCount";
import { projects } from "@/lib/projects";
import { CATEGORY_LABELS, countCategories } from "@/lib/categories";
import { sectionNumber } from "@/lib/navigation";

export function WorkSection() {
  const disciplines = countCategories(projects);

  return (
    <section id="work" className="portfolio-section work-section" aria-labelledby="work-title">
      <div className="work-section-header">
        <div className="hero-index" aria-label="Section: Work">
          <span>02</span>
          <span className="index-line" />
          <span>WORK ARCHIVE</span>
        </div>

        <div className="work-intro">
          <p className="eyebrow">SELECTED PROJECTS & VISUAL PRODUCTION</p>
          <h2 id="work-title" className="section-title">
            WORK
          </h2>
        </div>

        <div className="work-hero-foot">
          <p className="work-count">
            <span>{String(projects.length).padStart(2, "0")}</span> projects in archive
          </p>
          <ul className="work-legend" aria-label="Disciplines in this archive">
            {disciplines.map(({ category, count }) => (
              <li key={category} data-category={category}>
                <span>{CATEGORY_LABELS[category]}</span>
                <span>{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="work-list" aria-label="Project list">
        <div className="work-list-key" aria-hidden="true">
          <span>Index</span>
          <span>Project</span>
          <span>2022 — 2025</span>
        </div>
        <ol>
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Reveal>
                <WorkIndexRow project={project} index={index} total={projects.length} />
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="section-index-footer">
          <PageCount current={sectionNumber("/#work")} />
        </div>
      </div>
    </section>
  );
}
