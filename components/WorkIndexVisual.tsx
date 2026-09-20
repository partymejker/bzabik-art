import Image from "next/image";
import type { Project } from "@/lib/types";
import { formatCategories } from "@/lib/categories";
import { getYouTubeThumbnailUrl } from "@/lib/youtube";
import { ModelViewer } from "./ModelViewer";

export type RowVisual =
  | { kind: "model"; src: string; alt: string }
  | { kind: "thumbnail"; src: string; alt: string }
  | { kind: "glyph" };

export function resolveRowVisual(project: Project): RowVisual {
  const media = project.media ?? [];

  const model = media.find((item) => item.type === "model");
  if (model) {
    return { kind: "model", src: model.src, alt: model.alt ?? `${project.title} — 3D model` };
  }

  for (const item of media) {
    if (item.type !== "embed") continue;
    const thumbnail = getYouTubeThumbnailUrl(item.src);
    if (thumbnail) {
      return { kind: "thumbnail", src: thumbnail, alt: item.alt ?? project.title };
    }
  }

  return { kind: "glyph" };
}

const MEDIA_TYPE_LABELS: Record<string, string> = {
  model: "3D model",
  embed: "video",
  video: "video",
  image: "image",
};

export function describeMedia(project: Project): string {
  const media = project.media ?? [];
  if (media.length === 0) return "No published media";

  const counts = new Map<string, number>();
  for (const item of media) {
    const label = MEDIA_TYPE_LABELS[item.type] ?? item.type;
    counts.set(label, (counts.get(label) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([label, count]) => `${count} × ${label}`)
    .join(" · ");
}

export function WorkIndexVisual({ project, index }: { project: Project; index: number }) {
  const visual = resolveRowVisual(project);

  if (visual.kind === "model") {
    return (
      <figure className="work-row-figure">
        <div className="work-row-frame work-row-frame--model" inert>
          <ModelViewer src={visual.src} alt={visual.alt} />
        </div>
        <figcaption className="work-row-figcaption">{visual.alt}</figcaption>
      </figure>
    );
  }

  if (visual.kind === "thumbnail") {
    return (
      <figure className="work-row-figure">
        <div className="work-row-frame work-row-frame--thumb">
          <Image
            src={visual.src}
            alt={`Video still — ${visual.alt}`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 900px) 60vw, 30vw"
          />
          <span className="work-row-play" aria-hidden="true">
            <i />
            Video
          </span>
        </div>
        <figcaption className="work-row-figcaption">{visual.alt}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="work-row-figure">
      <div className="work-row-frame work-row-frame--glyph" data-category={project.category[0]} aria-hidden="true">
        <span className="work-row-glyph-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="work-row-glyph-word">{formatCategories(project.category)}</span>
      </div>
    </figure>
  );
}
