import type { Project } from "./types";

// Year is a placeholder range covering the Learnetic S.A. tenure (2022-present) —
// exact per-project years/order to be confirmed and refined.
export const projects: Project[] = [
  {
    slug: "educational-interactive-experience",
    title: "Educational Interactive Experience",
    year: "2022–2025",
    category: ["interactive"],
    description:
      "Adaptation of traditional educational materials into interactive digital lessons. The work combined content production, visual development, technical implementation and close attention to the accuracy of scientific and mathematical content.",
    responsibilities: [
      "Designing and building interactive digital lessons",
      "Developing and implementing JavaScript scripts",
      "Preparing and adapting visual assets",
      "Formatting complex mathematical and scientific expressions using LaTeX",
      "Maintaining the visual consistency of the project",
      "Collaborating directly with the client",
      "Implementing feedback and optimising educational content",
    ],
    credits: [{ role: "Interactive Educational Content Editor", name: "Bartłomiej Żabik" }],
    tools: ["JavaScript", "LaTeX"],
    tags: ["EdTech", "Interactive", "STEM"],
    featured: true,
  },
  {
    slug: "educational-multimedia-project",
    title: "Educational Multimedia Project",
    year: "2022–2025",
    category: ["3d", "film"],
    description:
      "As part of a wider digital education transformation initiative, work focused on preparing visual and multimedia assets for interactive digital learning materials.",
    responsibilities: [
      "Designing, modelling and editing 3D visual assets",
      "Editing and adapting video materials",
      "Following project guidelines and technical specifications",
      "Collaborating with content editors",
      "Collaborating with subject-matter experts",
      "Translating educational requirements into engaging multimedia experiences",
    ],
    credits: [{ role: "Multimedia Specialist", name: "Bartłomiej Żabik" }],
    tools: ["Blender", "DaVinci Resolve"],
    tags: ["EdTech", "3D", "Video"],
    featured: true,
  },
  {
    slug: "technical-3d-visualization",
    title: "Technical 3D Visualization",
    year: "2022–2025",
    category: ["3d", "animation", "film"],
    description:
      "Creation and adaptation of digital educational resources for a vocational training center, combining graphic design, 3D modelling, animation and video editing.",
    responsibilities: [
      "Designing and editing raster and vector graphics",
      "Modelling 3D objects",
      "Creating 2D and 3D animations",
      "Editing educational video content",
      "Preparing visual materials for e-learning platforms",
      "Collaborating with educational experts",
      "Transforming raw subject-matter scenarios into engaging visual resources",
    ],
    credits: [{ role: "Multimedia Specialist", name: "Bartłomiej Żabik" }],
    tools: ["Blender", "Adobe Photoshop", "DaVinci Resolve"],
    tags: ["EdTech", "3D", "Animation"],
    media: [
      { type: "model", src: "/3d_models/palnik.glb", alt: "Welding torch — 3D model" },
      { type: "model", src: "/3d_models/czesc_konstrukcyjna.glb", alt: "Construction part — 3D model" },
      { type: "model", src: "/3d_models/bezwzgledny_uklad_wspolrzednych.glb", alt: "Absolute coordinate system — 3D model" },
      { type: "model", src: "/3d_models/uklad_wspolrzednych.glb", alt: "Coordinate system — 3D model" },
      { type: "embed", src: "https://youtu.be/fgZ5QOJ1C_c", alt: "Introduction to discrete event process simulation" },
      { type: "embed", src: "https://youtu.be/KKFF6BRSvuU", alt: "Sheet metal animation" },
      { type: "embed", src: "https://youtu.be/eeAIVHdYm6I", alt: "Equipment operation" },
      { type: "embed", src: "https://youtu.be/0tg6MCobhPE", alt: "Welding station" },
      { type: "embed", src: "https://youtu.be/GLoj51YZklg", alt: "Program interface" },
    ],
    featured: true,
  },
  {
    slug: "interactive-learning-project",
    title: "Interactive Learning Project",
    year: "2022–2025",
    category: ["3d", "animation"],
    description:
      "Content and multimedia work for integrated learning platforms, produced as part of a multidisciplinary team including content designers, graphic designers, developers and UI/UX specialists.",
    responsibilities: [
      "Adapting and optimising 3D models for interactive projects",
      "Producing animation and video materials",
      "Editing and adapting content",
      "Collaborating with CSS developers",
      "Supporting visual consistency",
      "Supporting responsiveness and the quality of user experience in digital lessons",
    ],
    credits: [{ role: "Content Editor & Multimedia Specialist", name: "Bartłomiej Żabik" }],
    tools: ["Blender", "CSS"],
    tags: ["EdTech", "3D", "Interactive"],
    media: [
      { type: "embed", src: "https://youtu.be/KNrZtIrSe7Y", alt: "Mercury Volume" },
      { type: "embed", src: "https://youtu.be/tEE6ZY_G-68", alt: "Formulas of Compounds" },
    ],
    featured: true,
  },
];
