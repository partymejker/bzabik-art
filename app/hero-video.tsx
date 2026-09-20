"use client";

import { useEffect, useState } from "react";

export function HeroVideo() {
  const [canPlayMotion, setCanPlayMotion] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setCanPlayMotion(!reducedMotion.matches);

    updateMotionPreference();
    reducedMotion.addEventListener("change", updateMotionPreference);

    return () => reducedMotion.removeEventListener("change", updateMotionPreference);
  }, []);

  if (!canPlayMotion) return null;

  return (
    <div className="hero-video-layer" aria-hidden="true">
      <video autoPlay loop muted playsInline preload="metadata">
        <source src="/videos/timeline-4.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
