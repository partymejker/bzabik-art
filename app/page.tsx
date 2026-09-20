import { SiteHeader } from "@/components/SiteHeader";
import { HeroVideo } from "./hero-video";

export default function Home() {
  return (
    <main className="archive-shell">
      <div className="archive-grid" aria-hidden="true" />

      <SiteHeader />

      <section className="hero" id="top" aria-labelledby="hero-title">
        <HeroVideo />

        <div className="hero-index" aria-label="Current section: Home">
          <span>01</span><span className="index-line" /><span>HOME</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">AN INDEPENDENT VISUAL PRACTICE</p>
          <h1 id="hero-title">
            <span>DIGITAL</span><span>CREATIVE</span><span className="hero-accent">ARCHIVE</span>
          </h1>
          <p className="discipline-line">FILM <b>&middot;</b> 3D <b>&middot;</b> ANIMATION <b>&middot;</b> AI</p>
        </div>

        <div className="hero-footer">
          <p className="page-count"><span>01</span> / 05</p>
          <a className="explore-link" href="#top">EXPLORE <span aria-hidden="true">&darr;</span></a>
        </div>
      </section>
    </main>
  );
}
