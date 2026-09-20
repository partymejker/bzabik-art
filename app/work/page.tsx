import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";
import { navItems } from "@/lib/navigation";
import "./work.css";

export const metadata: Metadata = {
  title: "Work — BZABIK.ART",
  description: "Selected film, 3D, animation and interactive work by BZABIK.ART.",
};

export default function WorkPage() {
  const workIndex = navItems.findIndex((item) => item.href === "/work") + 1;

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
      </section>

      <section className="work-list" aria-label="Project list">
        <ol>
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Reveal>
                <ProjectCard project={project} index={index} />
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
