import Link from "next/link";
import type { Project } from "@/lib/types";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/work/${project.slug}`} className="project-card">
      <p className="project-card-index">{String(index + 1).padStart(2, "0")}</p>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-meta">
          <span>{project.year}</span>
          {project.client && <span>{project.client}</span>}
          {project.category.length > 0 && <span>{project.category.join(" · ")}</span>}
        </p>
        <p className="project-card-description">{project.description}</p>
        {project.tools && project.tools.length > 0 && (
          <ul className="project-card-tools">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
