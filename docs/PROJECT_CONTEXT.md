# PROJECT CONTEXT

Current as of 2026-09-22 · branch `main` · Stage 1 Hero alignment IMPLEMENTED. Parent HEAD `3e3b8cc`.

This is the shared orientation document for BZABIK.ART. Read it before architecture, design, or content work.

Related documents: [PROJECT_STATUS.md](./PROJECT_STATUS.md) · [ARCHITECTURE.md](./ARCHITECTURE.md) · [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) · [CONTENT_MODEL.md](./CONTENT_MODEL.md) · [MEDIA_SYSTEM.md](./MEDIA_SYSTEM.md) · [DECISIONS.md](./DECISIONS.md) · [AGENT_WORKFLOW.md](./AGENT_WORKFLOW.md)

---

## Purpose

BZABIK.ART is the public portfolio and digital archive of Bartłomiej Żabik.

It presents selected multimedia work as an editorial archive: a continuous one-page homepage plus statically generated project pages.

## Portfolio and archive goals

- Show a coherent independent visual practice.
- Keep the site as a continuous archive, with hash sections on `/` and dedicated `/work/[slug]` pages.
- Keep client identities out of public project records.
- Keep contact minimal: email only.
- Keep the hero, overlay menu, Work Index, and dark visual system stable unless the owner explicitly approves a change.

## Creative disciplines

Public positioning on the homepage (`app/page.tsx`):

**Film · 3D · Animation · AI**

The About section also names generative and interactive work (`components/sections/AboutSection.tsx`).

The live archive in `lib/projects.ts` currently uses categories `interactive`, `3d`, `film`, and `animation`. Categories `ai` and `generative` exist in the type system (`lib/types.ts`, `lib/categories.ts`) and have no assigned projects.

The published work is employed EdTech multimedia from the 2022–present Learnetic tenure. Career employers remain named on the Profile section (`lib/profile.ts`).

## Technology stack

| Layer | Current |
| --- | --- |
| Framework | Next.js `16.3.4` App Router |
| UI | React `19.2.8` |
| Language | TypeScript `5.9.3`, `strict` |
| Styling | Tailwind CSS `4.3.3` as PostCSS/`@theme` bridge; layered hand-written CSS |
| 3D | `@google/model-viewer` `4.3.1` |
| Fonts | Inter + Space Grotesk via `next/font/google`, subsets `latin` and `latin-ext` |
| Lint | ESLint 9 + `eslint-config-next` |
| Tests | None (`package.json` has no test script) |
| Hosting | Vercel, GitHub `partymejker/bzabik-art`, branch `main` |
| Repo path | `c:\Projects\personal\bzabik-art` |

Source: `package.json`, lockfile-resolved versions, `app/layout.tsx`, `tsconfig.json`.

## Visual direction

Intended character: futuristic digital / editorial / experimental archive.

Existing traits in the CSS:

- Dark ground (`#05070d`)
- Strong display typography (Space Grotesk)
- Asymmetrical Work Index rows
- Controlled cyan/violet accents
- Grid overlay and atmospheric gradients
- Scroll reveals with reduced-motion fallback

Restrictions (CONFIRMED):

- Avoid generic AI aesthetics.
- Avoid cyberpunk cliché.
- Avoid excessive neon and glow.
- Do not redesign the hero without explicit approval.

## Approved project decisions

See [DECISIONS.md](./DECISIONS.md) for reasons and impact. Summary:

| Decision | Status |
| --- | --- |
| Preferred public domain is `https://bzabik.art` (apex) | CONFIRMED |
| `bzabik.art` is the canonical host (`metadataBase` in `app/layout.tsx`) | IMPLEMENTED |
| Clients and projects remain anonymous in the public archive | CONFIRMED · IMPLEMENTED |
| CV PDF link stays inactive (`cvPdfUrl: null`) | CONFIRMED · IMPLEMENTED |
| Contact email is `contact@bzabik.art` | CONFIRMED · IMPLEMENTED |
| Hero uses a video background | CONFIRMED · IMPLEMENTED |
| Hero copy shares the page column (`.hero-copy`) | CONFIRMED · IMPLEMENTED |
| `.hero-footer` stays outside that column | CONFIRMED · out of Stage 1 scope |
| Final favicon will be created later by the owner | CONFIRMED |
| Continuous one-page portfolio with overlay menu | CONFIRMED · IMPLEMENTED |
| No contact form | CONFIRMED · IMPLEMENTED |

## Important restrictions

Do not:

- Redesign the website, hero, Work Index, overlay menu, or project-page layout without explicit approval.
- Implement remaining Stage 1 ideas, media migration, Cloudflare R2, or a custom video player unless that work is the approved task. Do not treat `.hero-footer` alignment as in scope unless asked.
- Change Vercel settings, DNS, or domain redirects unless asked.
- Change the favicon design.
- Activate a CV PDF or invent a live-looking placeholder.
- Restore client names on projects.
- Push to GitHub without explicit permission.
- Commit without explicit approval after the user reviews the diff.
- Treat proposed features as implemented features.

## Things requiring user approval

- Any layout-affecting visual change
- Hero redesign or hero copy change
- Favicon / identity mark
- Further Stage 1 items beyond the implemented Hero copy alignment
- `.hero-footer` alignment with the 1600px column
- Git commit and git push
- Vercel, DNS, and host-redirect changes
- Activating `cvPdfUrl`
- Restoring or changing client names
- INTER Polska naming (`INTER Polska S.A.` in `lib/profile.ts`)
- Media infrastructure (R2, custom media domain, custom player)
- Adding or removing projects from the public archive
