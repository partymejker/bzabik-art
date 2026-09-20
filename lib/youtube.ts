export function getYouTubeEmbedUrl(url: string): string | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  let id: string | null = null;
  if (parsed.hostname === "youtu.be") {
    id = parsed.pathname.slice(1);
  } else if (parsed.hostname.includes("youtube.com")) {
    id = parsed.searchParams.get("v");
  }

  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}
