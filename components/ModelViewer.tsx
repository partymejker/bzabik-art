"use client";

import { useEffect, useState } from "react";

export function ModelViewer({ src, alt, poster }: { src: string; alt: string; poster?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    import("@google/model-viewer").then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="model-viewer-slot">
      {!ready && <div className="model-viewer-placeholder" aria-hidden="true" />}
      {ready ? (
        <model-viewer
          src={src}
          alt={alt}
          poster={poster}
          camera-controls
          shadow-intensity="1"
          exposure="1"
          loading="lazy"
          reveal="auto"
        />
      ) : null}
    </div>
  );
}
