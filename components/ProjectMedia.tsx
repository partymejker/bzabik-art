import Image from "next/image";
import type { ProjectMediaItem } from "@/lib/types";
import { getYouTubeEmbedUrl } from "@/lib/youtube";
import { ModelViewer } from "./ModelViewer";

export function ProjectMedia({ item }: { item: ProjectMediaItem }) {
  if (item.type === "embed") {
    const embedUrl = getYouTubeEmbedUrl(item.src);
    if (!embedUrl) return null;
    return (
      <div className="project-media project-media-embed">
        <iframe
          src={embedUrl}
          title={item.alt ?? "Project video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div className="project-media">
        <video src={item.src} poster={item.poster} controls playsInline preload="metadata" />
      </div>
    );
  }

  if (item.type === "model") {
    return (
      <div className="project-media project-media-model">
        <ModelViewer src={item.src} alt={item.alt ?? "3D model"} poster={item.poster} />
      </div>
    );
  }

  return (
    <div className="project-media project-media-image">
      <Image src={item.src} alt={item.alt ?? ""} fill sizes="(min-width: 1024px) 70vw, 100vw" />
    </div>
  );
}
