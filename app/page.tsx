import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { navItems } from "@/lib/navigation";
import { HeroVideo } from "./hero-video";

export default function Home() {
  const homeIndex = navItems.findIndex((item) => item.href === "/") + 1;
  const nextItem = navItems.find((item) => item.href !== "/");

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
    </main>
  );
}
