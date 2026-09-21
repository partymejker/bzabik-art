import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="about" className="portfolio-section about-section" aria-labelledby="about-title">
      <div className="hero-index" aria-label="Section: About">
        <span>03</span>
        <span className="index-line" />
        <span>PRACTICE STATEMENT</span>
      </div>

      <Reveal>
        <div className="about-statement">
          <p className="eyebrow">CREATIVE PHILOSOPHY</p>
          <h2 id="about-title" className="about-heading">
            An independent visual practice working across film, 3D, animation, AI, generative and interactive work.
          </h2>
          <p className="about-detail">
            The interest lies in experimenting with the digital image — with procedurality, technology, and new ways of making and presenting it.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
