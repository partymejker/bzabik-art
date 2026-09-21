# CHANGELOG

High-level project history. Not a dump of every CSS tweak. Future work is listed as planned only.

Current HEAD at documentation time: `4a89597` on `main` (2026-09-22).

---

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

**Stage 1** — PLANNED. Implementation has not started.

Approved for Stage 1 (not implemented):

- Hero typography left inset on `.hero-content` (eyebrow, heading, category text)

PROPOSED candidates (not approved, not done):

- Evidence-first Work Index / media for empty projects
- Authored titles
- Cloudflare R2
- Custom media domain
- Custom HTML5 video player
- Hero video compression
- Model posters
- OG image, sitemap, robots

Do not list these as completed.
