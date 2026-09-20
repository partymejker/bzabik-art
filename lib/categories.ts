import type { Project, ProjectCategory } from "./types";

export const CATEGORY_ORDER: ProjectCategory[] = ["film", "3d", "animation", "ai", "generative", "interactive"];

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  film: "Film",
  "3d": "3D",
  animation: "Animation",
  ai: "AI",
  generative: "Generative",
  interactive: "Interactive",
};

export function formatCategories(categories: ProjectCategory[]): string {
  return categories.map((category) => CATEGORY_LABELS[category]).join(" / ");
}

export function countCategories(projects: Project[]): Array<{ category: ProjectCategory; count: number }> {
  return CATEGORY_ORDER.map((category) => ({
    category,
    count: projects.filter((project) => project.category.includes(category)).length,
  })).filter((entry) => entry.count > 0);
}
