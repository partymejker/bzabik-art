import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectMedia } from "@/components/ProjectMedia";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";
import "./project.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — BZABIK.ART`,
    description: project.description,
  };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index];

  if (!project) notFound();

  const prevProject = projects.length > 1 ? projects[(index - 1 + projects.length) % projects.length] : null;
  const nextProject = projects.length > 1 ? projects[(index + 1) % projects.length] : null;

  return (
    <main className="archive-shell">
      <div className="archive-grid" aria-hidden="true" />
      <SiteHeader />

      <section className="project-hero" aria-labelledby="project-title">
        <p className="project-count">
          <span>{String(index + 1).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}
        </p>
        <p className="eyebrow">
          {project.category.join(" · ").toUpperCase()} — {project.year}
        </p>
        <h1 id="project-title">{project.title}</h1>
        {project.client && <p className="project-client">{project.client}</p>}
      </section>

      <section className="project-intro" aria-label="Project overview">
        <Reveal className="project-intro-reveal">
          <div className="project-description">
            <h2 className="section-heading">About</h2>
            <p>{project.description}</p>

            {project.responsibilities && project.responsibilities.length > 0 && (
              <>
                <h2 className="section-heading project-responsibilities-heading">Responsibilities</h2>
                <ul className="project-responsibilities">
                  {project.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Reveal>
      </section>

      {project.media && project.media.length > 0 && (
        <section className="project-media-section" aria-label="Project media">
          <Reveal className="project-media-reveal">
            {project.media.map((item, mediaIndex) => (
              <ProjectMedia key={`${item.type}-${mediaIndex}`} item={item} />
            ))}
          </Reveal>
        </section>
      )}

      {((project.credits && project.credits.length > 0) || (project.tools && project.tools.length > 0)) && (
        <section className="project-details" aria-label="Project details">
          <Reveal className="project-meta-columns">
            {project.credits && project.credits.length > 0 && (
              <div>
                <h2 className="section-heading">Credits</h2>
                <ul className="project-credits">
                  {project.credits.map((credit) => (
                    <li key={credit.role}>
                      <span>{credit.role}</span>
                      <span>{credit.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.tools && project.tools.length > 0 && (
              <div>
                <h2 className="section-heading">Tools</h2>
                <ul className="project-tools">
                  {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </section>
      )}

      <nav className="project-nav" aria-label="Other projects">
        {prevProject ? (
          <Link className="project-nav-link" href={`/work/${prevProject.slug}`}>
            <span className="project-nav-label">Prev</span>
            <span className="project-nav-title">{prevProject.title}</span>
          </Link>
        ) : (
          <span />
        )}
        <Link className="explore-link" href="/work">
          Back to Work
        </Link>
        {nextProject ? (
          <Link className="project-nav-link project-nav-link-next" href={`/work/${nextProject.slug}`}>
            <span className="project-nav-label">Next</span>
            <span className="project-nav-title">{nextProject.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </main>
  );
}
