import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { FeaturedWork } from "@/components/FeaturedWork";
import { navItems } from "@/lib/navigation";
import { projects } from "@/lib/projects";
import { HeroVideo } from "./hero-video";
import "./home.css";

export default function Home() {
  const homeIndex = navItems.findIndex((item) => item.href === "/") + 1;
  const nextItem = navItems.find((item) => item.href !== "/");
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <main className="archive-shell">
      <div className="archive-grid" aria-hidden="true" />

      <SiteHeader />

      <section className="hero" id="top" aria-labelledby="hero-title">
        <HeroVideo />

        <div className="hero-index" aria-label="Current section: Home">
          <span>{String(homeIndex).padStart(2, "0")}</span><span className="index-line" /><span>HOME</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">AN INDEPENDENT VISUAL PRACTICE</p>
          <h1 id="hero-title">
            <span>DIGITAL</span><span>CREATIVE</span><span className="hero-accent">ARCHIVE</span>
          </h1>
          <p className="discipline-line">FILM <b>&middot;</b> 3D <b>&middot;</b> ANIMATION <b>&middot;</b> AI</p>
        </div>

        <div className="hero-footer">
          <p className="page-count"><span>{String(homeIndex).padStart(2, "0")}</span> / {String(navItems.length).padStart(2, "0")}</p>
          {nextItem && (
            <Link className="explore-link" href={nextItem.href}>
              EXPLORE <span aria-hidden="true">&darr;</span>
            </Link>
          )}
        </div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="featured-work" aria-labelledby="featured-heading">
          <div className="featured-work-header">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2 id="featured-heading">Recent Projects</h2>
            </div>
            <Link className="view-all-link" href="/work">
              VIEW ALL <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <FeaturedWork projects={featuredProjects} />
        </section>
      )}
    </main>
  );
}
