# CHANGELOG

High-level project history. Not a dump of every CSS tweak. Future work is listed as planned only.

Current as of 2026-09-22 on `main`. HEAD `09b1955` (Stage 1). Stage 2 template work is in the working tree, pending commit.

---

## Stage 2 follow-up — numbering + lead media (2026-09-22)

**Status:** IMPLEMENTED in the working tree · visual review PENDING. No commit.

- Site section index `NN / 05` appears in the footer of Home, Work, About, Profile, and Contact (`PageCount`). Overlay menu numbering is unchanged. Project pages do not show `NN / 05`.
- Home `.hero-footer` uses the 1600px page column so `01 / 05` lines up with the other footers.
- Project pages keep only the archive index `NN / 04` in the hero.
- Project hero is a two-column cluster when media exists: copy left, one lead asset right (first 3D model, else first film/video/image via `ProjectMedia`). Remaining items stay in Media. No `lib/projects.ts` change.

## Stage 2 — Project page template (2026-09-22)

**Status:** IMPLEMENTED in the working tree · owner visual review PENDING. Point 9 (section order About vs Media) is out of this pass.

Shared `/work/[slug]` template, using the complete 3D + film case study as the reference:

- Hero padding clears the fixed header; project sections use `scroll-margin-top`
- `.project-hero .eyebrow` no longer inherits homepage hero margin
- Media section has a visible kicker and heading (`Selected work` / `Media`)
- UI groups `model` items before film/image/video without changing `lib/projects.ts`
- Model frames are 4:3; film/video/image stay 16:9; an odd last item in a 2-column group spans and is capped at `54rem`
- `ModelViewer` shows a quiet placeholder until the library is ready (also used on Work Index)
- Responsibility bullets keep the cyan dot without the glow shadow
- Credits and Tools sit in the same 2-column measure as the media grid

Validation: `npm run lint` clean; `npm run build` success (13 routes). Checked `320px`, `390px`, `768px`, `1440px`, `1920px` plus a no-media project route and the Work Index 3D row.

## Stage 1 — Hero copy alignment (2026-09-22)

**Status:** IMPLEMENTED · owner-accepted after viewport QA.

Homepage Hero typography now shares the page content column used by Work, About, Profile, Contact, and the header wordmark.

- Added `.hero-copy` around `.hero-index` and `.hero-content` (`app/page.tsx`)
- `.hero-copy` uses `width: min(100%, 1600px)`, `margin-inline: auto`, and `padding-inline: clamp(1.5rem, 4vw, 5rem)` (`app/hero.css`)
- `.hero-index` stays a sibling of `.hero-content` inside that wrapper
- Inner type measure `width: min(71rem, 86%)` on `.hero-content` is unchanged
- Hero video stays full-bleed
- `.hero-footer` is **out of this correction**. Above 1600px it can sit on a different alignment line than `.hero-copy`. Treat footer alignment as future work.

Validation: `npm run lint` clean; `npm run build` success. Checked `320px`, `375px`, `390px`, `768px`, `1440px`, `1920px` with no horizontal overflow.

An earlier Stage 1 attempt padded only `.hero-content`. That did not align `.hero-index` or pick up the centered 1600px offset.

## Stage 0.5 — Documentation system (2026-09-22)

**Status:** documentation added in this commit.

Added `docs/` as the shared context for AI agents:

- Project context, status, architecture, design system, content model, media system
- Agent workflow, decision log, changelog
- Handoff template under `docs/handoffs/`
- Owner-approved Stage 1 item recorded: Hero typography left inset (not implemented)

No application, config, or media files were changed for this stage.

## Stage 0 — Stability (2026-09-22)

**Status:** IMPLEMENTED · commit `4a89597`

- Public email set to `contact@bzabik.art`
- Font subsets include `latin-ext`
- Geometric B `app/icon.svg` and `app/favicon.ico`
- Site-wide metadata, Open Graph, Twitter summary card
- Canonical URLs on home and project pages
- `metadataBase` `https://bzabik.art`
- Reveal progressive enhancement (`useSyncExternalStore`, noscript / no-JS fallback)

Preceding archive-structure commit `ba6713b` (2026-09-21):

- Continuous one-page homepage
- Overlay menu hash navigation
- Section routes redirect to `/#work` `/#about` `/#profile` `/#contact`

## Historical product build (2026-09-20)

Summarized. Many of these commits used “Etap” / “Stage” names that are **not** the current Stage 0 / Stage 1 program.

- Initial Next.js project and GitHub workflow notes
- Hero video treatment and mask iterations, then simplified corner fade
- Project data model with four archive entries
- Overlay navigation
- Editorial Work list, then asymmetric Work Index rebuild (`77bd9dc`)
- Project detail pages and `@google/model-viewer`
- Real GLB models and YouTube embeds
- About, Contact, Profile/CV
- Motion tokens, overlay animation, scroll reveals
- Client anonymization Level 1 (`0d83471`)

## Planned

**Stage 1 Hero copy alignment** — IMPLEMENTED (see above).

PROPOSED candidates (not approved, not done):

- `.hero-footer` alignment with the 1600px page column (out of Stage 1 scope)

- Evidence-first Work Index / media for empty projects
- Authored titles
- Cloudflare R2
- Custom media domain
- Custom HTML5 video player
- Hero video compression
- Model posters
- OG image, sitemap, robots

Do not list these as completed.
