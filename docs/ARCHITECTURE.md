# ARCHITECTURE

Current as of 2026-09-22 · commit `4a89597`.

This describes the architecture that exists in the repository. It does not describe planned systems.

---

## Stack

Next.js App Router (`next` `16.3.4`) with React `19.2.8` and TypeScript `strict`. Path alias `@/*` maps to the repo root (`tsconfig.json`).

Scripts (`package.json`): `dev`, `build`, `start`, `lint`. No test script.

## App Router structure

```
app/
  layout.tsx              root layout, fonts, metadata, global CSS imports
  page.tsx                homepage (continuous archive)
  hero-video.tsx          client hero <video>
  icon.svg / favicon.ico  identity files
  globals.css             tokens, layout, nav, reveal
  hero.css / home.css     homepage atmosphere and section chrome
  about/page.tsx          redirect → /#about
  contact/page.tsx        redirect → /#contact
  profile/page.tsx        redirect → /#profile
  work/page.tsx           redirect → /#work
  work/[slug]/page.tsx    SSG project page
```

`app/layout.tsx` imports all section CSS so homepage hashes and project pages share the cascade:

`globals.css`, `hero.css`, `home.css`, `work/work.css`, `about/about.css`, `profile/profile.css`, `contact/contact.css`.

Project CSS is imported from the project page: `app/work/[slug]/project.css`.

CSS cascade layers, declared in `app/globals.css`:

`layout, hero, home, work, about, profile, contact, project`

## Routes

| Route | Behavior |
| --- | --- |
| `/` | Homepage. Sections `#top` `#work` `#about` `#profile` `#contact` |
| `/work/[slug]` | Static project page. `generateStaticParams()` from `lib/projects.ts` |
| `/work` `/about` `/profile` `/contact` | Redirect to homepage hashes |

Redirects are duplicated on purpose (left from `ba6713b`):

1. Page-level `redirect()` in each stub page.
2. Permanent redirects in `next.config.ts`.

Navigation data: `lib/navigation.ts`.

```
Home    /#top
Work    /#work
About   /#about
Profile /#profile
Contact /#contact
```

There is no `middleware.ts`, `sitemap.ts`, `robots.ts`, or `app/api/`.

## Main components

### Homepage (`app/page.tsx`)

- `SiteHeader` — wordmark + menu trigger
- `HeroVideo` — muted looping MP4, skipped when `prefers-reduced-motion`
- `WorkSection` — archive index
- `AboutSection` — practice statement
- `ProfileSection` — CV-like archive
- `ContactSection` — mailto + footer

### Shared chrome

| Component | Role |
| --- | --- |
| `components/SiteHeader.tsx` | Fixed header, open-state scroll lock |
| `components/SiteNav.tsx` | Full-screen overlay dialog, focus trap, Escape |
| `components/Reveal.tsx` | IntersectionObserver reveal; reduced-motion via `useSyncExternalStore` |

### Work

| Component | Role |
| --- | --- |
| `components/sections/WorkSection.tsx` | Section shell + category legend |
| `components/WorkIndexRow.tsx` | Editorial row; alternates `data-align` |
| `components/WorkIndexVisual.tsx` | Chooses model / YouTube thumbnail / glyph |

### Project page

| Component | Role |
| --- | --- |
| `app/work/[slug]/page.tsx` | Title, about, responsibilities, media, credits, tools, prev/next |
| `components/ProjectMedia.tsx` | image / video / YouTube embed / model |
| `components/ModelViewer.tsx` | Dynamic import of `@google/model-viewer` |

### Profile / about / contact

| Component | Role |
| --- | --- |
| `components/sections/AboutSection.tsx` | Static copy |
| `components/sections/ProfileSection.tsx` | Intro, timeline, capabilities, languages, optional CV link |
| `components/ProfileTimeline.tsx` | Work and education entries |
| `components/CapabilitiesGrid.tsx` | Tool groups |
| `components/sections/ContactSection.tsx` | `mailto:` + footer |

### Present but unused

`components/FeaturedWork.tsx` is not imported anywhere. It has no matching CSS in the current cascade. Left in the tree; do not delete it unless the owner asks.

## Data and content

Typed TypeScript modules, not a CMS:

| File | Contents |
| --- | --- |
| `lib/types.ts` | Project, media, profile, capability types |
| `lib/projects.ts` | Four projects |
| `lib/categories.ts` | Category order, labels, counts |
| `lib/profile.ts` | Intro, timeline, capabilities, languages, `cvPdfUrl` |
| `lib/contact.ts` | `contactEmail` |
| `lib/navigation.ts` | Overlay menu items |
| `lib/youtube.ts` | ID / nocookie embed / `img.youtube.com` thumbnail helpers |

See [CONTENT_MODEL.md](./CONTENT_MODEL.md).

## Styling

Tailwind 4 is loaded with `@import "tailwindcss"` and `@theme inline` font tokens in `app/globals.css`. Layout and identity are hand-written CSS in `@layer` files. Utility classes in markup are rare (`antialiased` on `<html>`).

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

## Metadata

Root metadata in `app/layout.tsx`:

- `metadataBase: new URL("https://bzabik.art")`
- Title: `BZABIK.ART — Digital Creative Archive`
- Description, `applicationName`, authors, creator
- Open Graph `type: website`, Twitter `card: summary`
- `html lang="en"`
- Fonts: Inter `--font-inter`, Space Grotesk `--font-space-grotesk`

Page-level canonicals:

- Home: `alternates.canonical: "/"`
- Project: `alternates.canonical: "/work/${slug}"` plus project OG/Twitter

Canonicals are relative and compose against `metadataBase`. There is no Open Graph image file. Do not add a second conflicting canonical.

`metadataBase` is SEO-only. Host redirects are not implemented in the app.

## Build and deployment

| File | Role |
| --- | --- |
| `next.config.ts` | YouTube image remote patterns; permanent hash redirects |
| `postcss.config.mjs` | `@tailwindcss/postcss` |
| `eslint.config.mjs` | `eslint-config-next` core-web-vitals + typescript |
| `tsconfig.json` | Strict TS, `@/*` alias |
| `types/model-viewer.d.ts` | JSX types for `<model-viewer>` |

`next.config.ts` `images.remotePatterns` allow `img.youtube.com` and `i.ytimg.com` `/vi/**`.

Deployment practice: push `main` → GitHub → Vercel. There is no `vercel.json`. Live dashboard settings are **NEEDS_VERIFICATION** without Vercel access.

## Relevant files (quick map)

```
app/layout.tsx
app/page.tsx
app/hero-video.tsx
app/work/[slug]/page.tsx
next.config.ts
lib/projects.ts
lib/profile.ts
lib/contact.ts
components/SiteHeader.tsx
components/SiteNav.tsx
components/Reveal.tsx
components/WorkIndexRow.tsx
components/WorkIndexVisual.tsx
components/ProjectMedia.tsx
components/ModelViewer.tsx
```
