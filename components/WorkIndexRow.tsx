import Link from "next/link";
import type { Project } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/categories";
import { describeMedia, resolveRowVisual, WorkIndexVisual } from "./WorkIndexVisual";

export function WorkIndexRow({ project, index, total }: { project: Project; index: number; total: number }) {
  const visual = resolveRowVisual(project);
  const align = index % 2 === 0 ? "left" : "right";

  return (
    <article className="work-row" data-visual={visual.kind} data-align={align}>
      <div className="work-row-rail">
        <p className="work-row-number">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="work-row-total">/{String(total).padStart(2, "0")}</span>
        </p>
        <span className="work-row-rail-line" aria-hidden="true" />
      </div>

      <div className="work-row-body">
        <ul className="work-row-tags" aria-label="Disciplines">
          {project.category.map((category) => (
            <li key={category} className="work-row-tag" data-category={category}>
              {CATEGORY_LABELS[category]}
            </li>
          ))}
        </ul>

        <h2 className="work-row-title">
          <Link className="work-row-link" href={`/work/${project.slug}`}>
            {project.title}
          </Link>
        </h2>

        <dl className="work-row-meta">
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          {project.client && (
            <div>
              <dt>Client</dt>
              <dd>{project.client}</dd>
            </div>
          )}
          <div>
            <dt>Media</dt>
            <dd>{describeMedia(project)}</dd>
          </div>
        </dl>

        <p className="work-row-description">{project.description}</p>

        {project.tools && project.tools.length > 0 && (
          <ul className="work-row-tools">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        )}

        <p className="work-row-cue" aria-hidden="true">
          View project <span>→</span>
        </p>
      </div>

      <div className="work-row-visual">
        <WorkIndexVisual project={project} index={index} />
      </div>
    </article>
  );
}
