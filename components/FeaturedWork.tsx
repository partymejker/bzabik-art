import Link from "next/link";
import type { Project } from "@/lib/types";

export function FeaturedWork({ projects }: { projects: Project[] }) {
  return (
    <ol className="featured-work-grid">
      {projects.map((project, index) => (
        <li key={project.slug}>
          <Link href={`/work/${project.slug}`} className="featured-card">
            <p className="featured-card-index">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="featured-card-title">{project.title}</h3>
            <p className="featured-card-meta">
              <span>{project.year}</span>
              {project.category.length > 0 && <span>{project.category.join(" · ")}</span>}
            </p>
          </Link>
        </li>
      ))}
    </ol>
  );
}
