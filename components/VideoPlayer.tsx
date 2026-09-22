"use client";

import { useState } from "react";

type VideoPlayerProps = {
  src?: string;
  poster?: string;
  alt?: string;
  controls?: boolean;
  preload?: "none" | "metadata" | "auto";
};

export function VideoPlayer({
  src,
  poster,
  alt,
  controls = true,
  preload = "metadata",
}: VideoPlayerProps) {
  const [failed, setFailed] = useState(false);
  const canPlay = Boolean(src) && !failed;

  if (!canPlay) {
    return (
      <div className="project-media-video-fallback" role="img" aria-label={alt ?? "Video unavailable"}>
        {poster ? (
          // Native img: this branch only renders when the MP4 failed, so skip the optimizer.
          // eslint-disable-next-line @next/next/no-img-element -- error fallback, not LCP
          <img src={poster} alt="" />
        ) : null}
      </div>
    );
  }

  return (
    <video
      poster={poster}
      controls={controls}
      playsInline
      preload={preload}
      aria-label={alt}
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
