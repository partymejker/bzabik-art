import type { ModelViewerElement } from "@google/model-viewer";

type ModelViewerAttributes = React.DetailedHTMLProps<React.HTMLAttributes<ModelViewerElement>, ModelViewerElement> & {
  src?: string;
  alt?: string;
  poster?: string;
  ar?: boolean;
  "ar-modes"?: string;
  "camera-controls"?: boolean;
  "auto-rotate"?: boolean;
  "auto-rotate-delay"?: number;
  "rotation-per-second"?: string;
  "camera-orbit"?: string;
  "field-of-view"?: string;
  "shadow-intensity"?: string;
  "shadow-softness"?: string;
  exposure?: string;
  "environment-image"?: string;
  "disable-zoom"?: boolean;
  "interaction-prompt"?: "auto" | "when-focused" | "none";
  loading?: "auto" | "lazy" | "eager";
  reveal?: "auto" | "interaction" | "manual";
};

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        "model-viewer": ModelViewerAttributes;
      }
    }
  }
}

export {};
