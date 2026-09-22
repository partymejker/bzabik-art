# MEDIA SYSTEM

Current as of 2026-09-22 · Stage 2 project template in the working tree. Parent HEAD `09b1955`.

This documents how media works today. Future hosting and player work is marked PROPOSED or PLANNED and is not implemented.

---

## Current media locations

All site-hosted files are under `public/`:

```
public/
  videos/
    timeline-4.mp4          ~11.18 MB  hero background
  3d_models/
    palnik.glb              ~23 KB
    czesc_konstrukcyjna.glb ~73 KB
    bezwzgledny_uklad_wspolrzednych.glb  ~36 KB
    uklad_wspolrzednych.glb ~187 KB
```

There is no `public/images/` directory and no committed posters or OG image.

Remote media: YouTube URLs stored on projects; thumbnails from `img.youtube.com`; embeds from `www.youtube-nocookie.com`.

`next.config.ts` allows Next Image hosts:

- `img.youtube.com/vi/**`
- `i.ytimg.com/vi/**`

## Current video implementation

### Hero

`app/hero-video.tsx` + `app/hero.css`:

- Client component
- `<video autoPlay loop muted playsInline preload="metadata">`
- Source `/videos/timeline-4.mp4`
- Decorative (`aria-hidden`)
- Not rendered when `prefers-reduced-motion: reduce`
- Object-fit cover, object-position `62% center`, slight brightness/contrast/saturate filter
- Masked to the top-right; left side of the hero stays typographic

Native browser controls are not shown. There is no custom player.

### Project video type

`ProjectMedia` supports `type: "video"` with native `controls`, `playsInline`, `preload="metadata"`, and optional `poster`.

No project currently uses `type: "video"`. Film on project pages is YouTube `embed`.

## Poster images

`ProjectMediaItem.poster` is optional.

- Native `<video poster>`
- `<model-viewer poster>`

No project media item sets `poster`. YouTube rows use the platform thumbnail. `ModelViewer` shows a quiet radial placeholder until `@google/model-viewer` has loaded; it does not invent a still of the GLB.

## Existing media components

| Component | What it does |
| --- | --- |
| `app/hero-video.tsx` | Homepage background MP4 |
| `components/ProjectMedia.tsx` | Switch on `image` / `video` / `embed` / `model` |
| `components/ModelViewer.tsx` | Client-only dynamic `import("@google/model-viewer")` with a quiet placeholder until ready |
| `components/WorkIndexVisual.tsx` | Work row preview: first model, else YouTube `hqdefault`, else glyph |
| `lib/youtube.ts` | Parse youtu.be / youtube.com, nocookie embed URL, thumbnail URL |

YouTube embeds:

- `iframe` to `https://www.youtube-nocookie.com/embed/{id}`
- `loading="lazy"`
- Standard allow list + fullscreen
- 16:9 frame in `project.css`

3D:

- Four GLBs on `technical-3d-visualization` only
- `camera-controls`, `shadow-intensity="1"`, `exposure="1"`, `loading="lazy"`, `reveal="auto"`
- Project-page model frames are 4:3; Work Index model frames were already 4:3
- Work Index model preview is `inert` (visual only)
- Types: `types/model-viewer.d.ts`

Project-page grouping (UI only, `lib/projects.ts` order unchanged): the first `model`, else the first embed/video/image, is the hero lead. Remaining items stay in Media (`model` group then playback). Pages without media have no lead and omit the Media section. No local posters exist; film lead is the existing YouTube embed.

Images:

- `next/image` for YouTube thumbnails and for `type: "image"`
- No project currently uses `type: "image"`

## Which projects have media

| Project | Media |
| --- | --- |
| `educational-interactive-experience` | none |
| `educational-multimedia-project` | none |
| `technical-3d-visualization` | 4× `model` + 5× YouTube `embed` |
| `interactive-learning-project` | 2× YouTube `embed` |

Work Index fallback for empty media: numbered category glyph (`work-row-frame--glyph`).

Project pages omit the media section when `media` is missing or empty.

## Media naming and loading

- Hero file is a single named MP4: `timeline-4.mp4`
- GLB filenames are Polish descriptive names from the original production assets
- Public URLs are root-absolute (`/3d_models/...`, `/videos/...`)
- Hero video `preload="metadata"`; project video type same
- Model viewer and YouTube iframes load lazily
- Model viewer JS is code-split; the custom element renders only after the import resolves (`null` until ready)

Do not rename public media paths without updating `lib/projects.ts` and `app/hero-video.tsx`.

## Existing media limitations

- Hero MP4 is large (~11.2 MB) and shipped from the Next/Vercel origin
- Two archive entries have no playable or viewable media
- No local posters for GLBs
- No `type: "image"` or `type: "video"` items in the archive
- Native video and YouTube UI are the default platform chrome
- YouTube thumbnails are `hqdefault.jpg` (not maxres)
- No CDN or object-storage layer in the repo
- No media domain
- `FeaturedWork` does not render media
- `project.thumbnail` is unused

## Future media direction

The following are **not implemented**. Do not describe them as current architecture.

| Idea | Status | Notes |
| --- | --- | --- |
| Cloudflare R2 | PROPOSED | Out of scope for Stage 0.5 |
| Custom media domain | PROPOSED | Out of scope for Stage 0.5 |
| Custom HTML5 video player | PROPOSED | Out of scope for Stage 0.5 |
| Compress / replace hero video | PROPOSED | File is large; no approved replacement |
| Local posters for models | PROPOSED | Field exists; no assets |
| Lead media on every Work row | PROPOSED | Related to empty-media projects |

Any of these may become later work. They are **PROPOSED**. The Stage 1 Hero copy alignment is IMPLEMENTED (see [PROJECT_STATUS.md](./PROJECT_STATUS.md) and [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)). Do not start R2, a custom media domain, or a custom player without a later approval.
