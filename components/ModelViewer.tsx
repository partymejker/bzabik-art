"use client";

import { useEffect, useState } from "react";

export function ModelViewer({ src, alt, poster }: { src: string; alt: string; poster?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    import("@google/model-viewer").then(() => setReady(true));
  }, []);

  if (!ready) return null;

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
