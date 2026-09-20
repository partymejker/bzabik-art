import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { WorkIndexRow } from "@/components/WorkIndexRow";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { navItems } from "@/lib/navigation";
import { CATEGORY_LABELS, countCategories } from "@/lib/categories";
import "./work.css";

export const metadata: Metadata = {
  title: "Work — BZABIK.ART",
  description: "Selected film, 3D, animation and interactive work by BZABIK.ART.",
};

export default function WorkPage() {
  const workIndex = navItems.findIndex((item) => item.href === "/work") + 1;
  const disciplines = countCategories(projects);

  return (
    <main className="archive-shell">
      <div className="archive-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="work-hero" aria-labelledby="work-title">
        <div className="hero-index" aria-label="Current section: Work">
          <span>{String(workIndex).padStart(2, "0")}</span><span className="index-line" /><span>WORK</span>
        </div>
        <div className="work-intro">
          <p className="eyebrow">SELECTED PROJECTS</p>
          <h1 id="work-title">WORK</h1>
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
      </section>

      <section className="work-list" aria-label="Project list">
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
      </section>
    </main>
  );
}
