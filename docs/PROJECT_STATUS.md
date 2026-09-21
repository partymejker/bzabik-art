# PROJECT STATUS

Current as of 2026-09-22 · branch `main` · commit `4a89597`.

## Status labels

| Label | Meaning |
| --- | --- |
| IMPLEMENTED | Present in the repository now |
| CONFIRMED | Explicitly approved or supported by repo + owner instruction |
| APPROVED | Owner-approved; not yet coded unless also marked IMPLEMENTED |
| PLANNED | Intended next phase; scope may still be open |
| PROPOSED | Suggested; not approved |
| PENDING | Waiting on owner action or decision |
| NEEDS_VERIFICATION | Cannot be confirmed from this repository or this session |
| OUTDATED | Known to be stale |

---

## Current phase

**Stage 0.5 — Project documentation and AI agent handoff system.**

Stage 0 (stability) is committed on `main` as `4a89597`. Stage 1 implementation has not started.

## Stage map

| Stage | Focus | Status |
| --- | --- | --- |
| Historical build (Etap 1–11, earlier “Stage 0/1” commits) | Site assembled as continuous archive | IMPLEMENTED (historical) |
| Stage 0 | Stability: contact, fonts, favicon files, metadata, Reveal | IMPLEMENTED (`4a89597`, 2026-09-22) |
| Stage 0.5 | Shared documentation for agents | IMPLEMENTED (this `docs/` set) |
| Stage 1 | Next implementation phase | PLANNED · one item APPROVED, remainder PROPOSED |

Git history also contains older commits named “Stage 0” (`2d6dc7b`) and “Stage 1” (`7428fea`). Those are historical build steps. They are not the current Stage 0 / Stage 1 program.

---

## Completed Stage 0 work

From commit `4a89597` and the preceding continuous-archive commit `ba6713b`:

| Item | Status | Source |
| --- | --- | --- |
| Public contact email `contact@bzabik.art` | IMPLEMENTED | `lib/contact.ts` |
| `latin-ext` font subsets | IMPLEMENTED | `app/layout.tsx` |
| Geometric B favicon files (`app/icon.svg`, `app/favicon.ico`) | IMPLEMENTED · visual approval PENDING | favicon files |
| Site metadata, Open Graph, Twitter card | IMPLEMENTED | `app/layout.tsx` |
| Canonical URLs for home and project pages | IMPLEMENTED | `app/page.tsx`, `app/work/[slug]/page.tsx` |
| `metadataBase` `https://bzabik.art` | IMPLEMENTED | `app/layout.tsx` |
| Reveal: `useSyncExternalStore`, noscript / `scripting: none` fallback | IMPLEMENTED | `components/Reveal.tsx`, `app/layout.tsx`, `app/globals.css` |
| Continuous one-page homepage | IMPLEMENTED | `app/page.tsx`, `ba6713b` |
| Overlay menu | IMPLEMENTED | `components/SiteHeader.tsx`, `components/SiteNav.tsx` |
| Hash redirects for `/work` `/about` `/profile` `/contact` | IMPLEMENTED | `next.config.ts` + page-level `redirect()` |
| Client anonymization (Level 1) | IMPLEMENTED | `0d83471`, `lib/projects.ts` |
| CV download omitted while `cvPdfUrl` is null | IMPLEMENTED | `lib/profile.ts`, `components/sections/ProfileSection.tsx` |

## Stage 0.5 documentation

| Item | Status |
| --- | --- |
| `docs/` shared context, status, architecture, design, content, media | IMPLEMENTED in this phase |
| Agent workflow and decision log | IMPLEMENTED in this phase |
| Handoff template | IMPLEMENTED in this phase |
| Documentation commit | AUTHORIZED for this Stage 0.5 docs commit |

## Planned Stage 1 work

Stage 1 is **PLANNED**. Implementation has not started.

### Approved for Stage 1

| Item | Status |
| --- | --- |
| Hero typography left inset | APPROVED FOR STAGE 1 · not implemented |

Current issue: the Hero typography block (`.hero-content`: eyebrow, main heading, category/discipline line) sits too close to the left viewport edge and lacks a consistent horizontal inset.

Required change (not yet coded):

- Add a consistent responsive left padding/inset to the entire Hero typography block.
- Apply that inset to the eyebrow, main heading, and category text together.
- Preserve the current asymmetric composition and typography scale.
- Avoid an unrelated hero redesign.
- Prevent horizontal overflow and text clipping.

Required viewport checks after implementation: `320px`, `375px`, `390px`, `768px`, `1440px`.

This is a targeted spacing fix. It is not a hero redesign and it is not present in CSS yet.

### Still PROPOSED (not Stage 1 unless later approved)

- Evidence-first Work Index (lead media on every row)
- Authored project titles
- Handling of archive entries with no published media
- Cloudflare R2
- Custom media domain
- Custom HTML5 video player

Those media items remain **PROPOSED** future infrastructure. They are not implemented and are not approved as Stage 1.

---

## Completed tasks (current product)

- Four-project archive in `lib/projects.ts`
- Work Index with alternating left/right visual alignment
- Project detail pages with credits, tools, responsibilities, media
- YouTube nocookie embeds and `<model-viewer>` GLB rendering
- Profile timeline, capabilities, languages
- About practice statement
- Mailto contact
- Reduced-motion handling for hero video and reveals

## Open tasks

| Item | Status |
| --- | --- |
| Implement approved Stage 1 Hero typography left inset | APPROVED · not implemented |
| Remaining Stage 1 scope beyond the hero inset | PENDING |
| Final favicon by owner | PENDING |
| INTER Polska naming confirmation | PENDING |
| Media for `educational-interactive-experience` and `educational-multimedia-project` | OPEN |
| OG image | OPEN (no file, Twitter card is `summary`) |
| `sitemap.ts` / `robots.ts` | OPEN (absent) |
| README.md still describes create-next-app / Geist | OUTDATED |
| `GITHUB-PORADNIK.md` local path `F:\Projects\bzabik-art-1` | OUTDATED |

## Known blockers

- Stage 1 implementation has not started. The hero typography left inset is the only approved Stage 1 item.
- Final identity mark is waiting on the owner.
- Two of four Work rows have no published media (`WorkIndexVisual` falls back to a category glyph).
- Hero video `public/videos/timeline-4.mp4` is about 11.2 MB.

## Items requiring user approval

Listed in [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md). Immediate ones:

- Favicon visual direction
- Further Stage 1 items beyond the approved hero typography inset
- INTER Polska spelling
- Hero redesign or copy change (the left-inset spacing fix is already approved)

## Deployment and domain status

| Item | Status | Notes |
| --- | --- | --- |
| GitHub remote | CONFIRMED | `https://github.com/partymejker/bzabik-art.git` |
| Default branch | CONFIRMED | `main` |
| HEAD matches `origin/main` at `4a89597` | CONFIRMED at documentation start | Verified with `git rev-parse` |
| Vercel auto-deploy from `main` | CONFIRMED as project practice | Current dashboard state NEEDS_VERIFICATION (no dashboard access in this task) |
| `vercel.json` | IMPLEMENTED as absent | None in repo |
| `middleware.ts` | IMPLEMENTED as absent | None in repo |
| App-level host redirect | IMPLEMENTED as absent | `next.config.ts` redirects only section paths to hashes |
| Canonical host `https://bzabik.art` | IMPLEMENTED | SEO `metadataBase` only; it does not perform HTTP host redirects |
| `www.bzabik.art` → `https://bzabik.art` | CONFIRMED by prior owner instruction | Live Vercel Domains config NEEDS_VERIFICATION |
| Production HTML / live deploy of `4a89597` | NEEDS_VERIFICATION | Not fetched in this task |

Do not change Vercel settings or DNS from an agent session unless the owner asks.

## Last known build

Prior Stage 0 work reported a clean TypeScript check and a successful `next build`. This documentation session did not re-run `next build` or `tsc`. Treat current build health as **NEEDS_VERIFICATION** before Stage 1.
