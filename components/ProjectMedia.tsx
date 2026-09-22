import Image from "next/image";
import type { ProjectMediaItem } from "@/lib/types";
import { getYouTubeEmbedUrl } from "@/lib/youtube";
import { ModelViewer } from "./ModelViewer";
import { VideoPlayer } from "./VideoPlayer";

export function ProjectMedia({ item }: { item: ProjectMediaItem }) {
  if (item.type === "embed") {
    const embedUrl = getYouTubeEmbedUrl(item.src);
    if (!embedUrl) return null;
    return (
      <figure className="project-media-item">
        <div className="project-media project-media-embed">
          <iframe
            src={embedUrl}
            title={item.alt ?? "Project video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        {item.alt && <figcaption className="project-media-caption">{item.alt}</figcaption>}
      </figure>
    );
  }

  if (item.type === "video") {
    return (
      <figure className="project-media-item">
        <div className="project-media project-media-video">
          <VideoPlayer src={item.src} poster={item.poster} alt={item.alt} />
        </div>
        {item.alt && <figcaption className="project-media-caption">{item.alt}</figcaption>}
      </figure>
    );
  }

  if (item.type === "model") {
    return (
      <figure className="project-media-item">
        <div className="project-media project-media-model">
          <ModelViewer src={item.src} alt={item.alt ?? "3D model"} poster={item.poster} />
        </div>
        {item.alt && <figcaption className="project-media-caption">{item.alt}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className="project-media-item">
      <div className="project-media project-media-image">
        <Image src={item.src} alt={item.alt ?? ""} fill sizes="(min-width: 1024px) 70vw, 100vw" />
      </div>
      {item.alt && <figcaption className="project-media-caption">{item.alt}</figcaption>}
    </figure>
  );
}
