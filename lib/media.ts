export const MEDIA_BASE = "https://media.bzabik.art";

/** Absolute URL on the media host. Pass a path without a leading slash. */
export function mediaUrl(path: string): string {
  return `${MEDIA_BASE}/${path.replace(/^\/+/, "")}`;
}
