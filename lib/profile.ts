import type { CapabilityGroup, Language, TimelineEntry } from "./types";

export const profileIntro = {
  name: "Bartłomiej Żabik",
  role: "Multimedia Specialist / Digital Creative",
  summary:
    "Multimedia specialist with 4+ years of experience in digital education (EdTech), combining digital art, video production, 3D and programming. Working across interactive lessons, 3D assets, video/animation and STEM content for international clients.",
};

export const timeline: TimelineEntry[] = [
  {
    id: "learnetic",
    type: "work",
    organization: "Learnetic S.A.",
    role: "Interactive Educational Content Editor",
    startDate: "2022-04",
    endDate: "present",
    summary:
      "Editing and producing interactive digital learning content for international EdTech clients — spanning JavaScript-driven interactivity, 3D and graphic production, video editing and LaTeX-based STEM formatting.",
    highlights: [
      {
        title: "Educational Interactive Experience — Interactive Textbook Adaptation",
        description:
          "Built interactive digital lessons from traditional textbooks from the ground up, wrote and implemented custom JavaScript for advanced interactivity, adapted graphics and formatted complex mathematical/scientific formulas in LaTeX, and oversaw the project's overall visual quality in direct collaboration with the client.",
      },
      {
        title: "Educational Multimedia Project — Digital Education Transformation",
        description:
          "Designed, modeled and edited 3D visual assets for interactive digital materials, edited and adapted video content to technical specifications, and worked closely with content editors and subject-matter experts to translate learning goals into engaging multimedia.",
      },
      {
        title: "Technical 3D Visualization — Digital Learning Resources & Multimedia",
        description:
          "Produced and edited raster/vector graphics, modeled 3D objects and created 2D/3D animation for e-learning platforms, collaborating with education experts to turn raw scripts into engaging visual assets.",
      },
      {
        title: "Interactive Learning Project — Integrated Learning Platforms",
        description:
          "Worked in a multidisciplinary team with content designers, graphic artists, developers and UX/UI specialists; optimized and adapted 3D models for interactive projects and produced animation and video materials; collaborated with CSS developers on visual consistency and responsiveness.",
      },
    ],
  },
  {
    id: "canon-helpdesk",
    type: "work",
    organization: "Canon Polska Sp. z o.o.",
    role: "Help Desk Support Specialist",
    startDate: "2018-12",
    endDate: "2021-10",
    summary:
      "End-to-end customer and user support, vendor relations, order processing, monthly financial reporting, printer and print-server troubleshooting (uniFLOW), and maintenance work.",
  },
  {
    id: "inter-polska",
    type: "work",
    organization: "INTER Polska S.A.",
    role: "Customer Service Representative",
    startDate: "2015-10",
    endDate: "2017-06",
    summary:
      "Phone and email customer support for health insurance clients, client data management, document archiving and partner communication.",
  },
  {
    id: "canon-intern",
    type: "work",
    organization: "Canon Polska Sp. z o.o.",
    role: "Intern",
    startDate: "2017-07",
    endDate: "2017-09",
    summary: "Support work in the Service department — data entry, document archiving, client phone contact.",
  },
  {
    id: "liceum-legionowo",
    type: "education",
    organization: "Liceum Ogólnokształcące im. M. Konopnickiej, Legionowo",
    role: "Mathematics & Computer Science profile",
    startDate: "2012-09",
    endDate: "2015-05",
  },
];

export const capabilityGroups: CapabilityGroup[] = [
  { id: "graphics-3d", label: "Graphics & 3D", items: ["Blender", "Adobe Photoshop", "Affinity by Canva", "GIMP", "Inkscape"] },
  { id: "video", label: "Video & Animation", items: ["DaVinci Resolve", "Adobe Premiere Pro", "Subtitle Edit"] },
  { id: "code-interactive", label: "Code & Interactivity", items: ["JavaScript", "CSS", "Visual Studio Code"] },
  { id: "content-stem", label: "Content & STEM", items: ["LaTeX", "mAuthor", "EdTool", "mCourser"] },
  { id: "ai", label: "AI Tools", items: ["Claude", "ChatGPT", "Google Gemini", "Grok"] },
  { id: "collab", label: "Collaboration & PM", items: ["Trello", "YouTrack", "Assembla"] },
];

export const languages: Language[] = [
  { name: "Polish", level: "native" },
  { name: "English", level: "advanced" },
  { name: "Russian", level: "basic" },
];

export const cvPdfUrl: string | null = null;
