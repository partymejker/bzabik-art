"use client";

import "@google/model-viewer";

export function ModelViewer({ src, alt, poster }: { src: string; alt: string; poster?: string }) {
  return (
    <model-viewer
      src={src}
      alt={alt}
      poster={poster}
      camera-controls
      auto-rotate
      shadow-intensity="1"
      exposure="1"
      loading="lazy"
      reveal="auto"
    />
  );
}
