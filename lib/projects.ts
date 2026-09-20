import type { Project } from "./types";

// Year is a placeholder range covering the Learnetic S.A. tenure (2022-present) —
// exact per-project years/order to be confirmed and refined.
export const projects: Project[] = [
  {
    slug: "cornelsen-experimenta",
    title: "Cornelsen Experimenta",
    client: "Cornelsen",
    year: "2022–2025",
    category: ["interactive"],
    description:
      "Adaptation of traditional textbooks into interactive digital lessons, built from the ground up. Custom JavaScript drives advanced interactivity, with graphic adaptation and precise LaTeX formatting of complex mathematical and scientific formulas throughout.",
    credits: [{ role: "Interactive Content Editor", name: "Bartłomiej Żabik" }],
    tools: ["JavaScript", "LaTeX"],
    tags: ["EdTech", "Interactive", "STEM"],
    featured: true,
  },
  {
    slug: "unicef-mongolia-education",
    title: "UNICEF & Mongolia Ministry of Education",
    client: "UNICEF / Mongolia Ministry of Education and Science",
    year: "2022–2025",
    category: ["3d", "film"],
    description:
      "Digital education transformation project. Design, modeling and editing of 3D visual assets for interactive digital materials, alongside video editing and adaptation to technical specification, in close collaboration with content editors and subject-matter experts.",
    credits: [{ role: "Multimedia Specialist", name: "Bartłomiej Żabik" }],
    tools: ["Blender", "DaVinci Resolve"],
    tags: ["EdTech", "3D", "Video"],
    featured: true,
  },
  {
    slug: "bcu-mielec",
    title: "BCU Mielec",
    client: "Branżowe Centrum Umiejętności, Mielec",
    year: "2022–2025",
    category: ["3d", "animation", "film"],
    description:
      "Digital learning resources and multimedia production: raster and vector graphics, 3D object modeling, and 2D/3D animation raising the instructional value of the materials, plus video editing for e-learning platforms — turning raw subject-matter scripts into engaging visual assets.",
    credits: [{ role: "Multimedia Specialist", name: "Bartłomiej Żabik" }],
    tools: ["Blender", "Adobe Photoshop", "DaVinci Resolve"],
    tags: ["EdTech", "3D", "Animation"],
    media: [{ type: "embed", src: "https://youtu.be/_wjEu8NO1z8", alt: "BCU Mielec — 2D/3D animation sample" }],
    featured: true,
  },
  {
    slug: "kursy-splitting",
    title: "Kursy Splitting",
    client: "Kursy Splitting",
    year: "2022–2025",
    category: ["3d", "animation"],
    description:
      "Integrated learning platforms built with a multidisciplinary team of content designers, graphic artists, developers and UX/UI specialists. Optimization and adaptation of 3D models for interactive projects, animation and video production, and close collaboration with CSS developers on visual consistency and responsiveness.",
    credits: [{ role: "Content Editor & Multimedia Specialist", name: "Bartłomiej Żabik" }],
    tools: ["Blender", "CSS"],
    tags: ["EdTech", "3D", "Interactive"],
    featured: true,
  },
];
