# PROJECT STATUS

Current as of 2026-09-22 · branch `main` · Stage 2 project template IMPLEMENTED in the working tree (visual review PENDING). Parent HEAD `09b1955`.

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

**Stage 2 — Project page template, plus numbering and lead media.**

Code is in the working tree. Owner visual review is PENDING. Point 9 (moving Media above or beside About) stays out of this pass.

Stage 1 Hero copy alignment remains IMPLEMENTED (`09b1955`). Remaining Stage 1 ideas stay PROPOSED.

## Stage map

| Stage | Focus | Status |
| --- | --- | --- |
| Historical build (Etap 1–11, earlier “Stage 0/1” commits) | Site assembled as continuous archive | IMPLEMENTED (historical) |
| Stage 0 | Stability: contact, fonts, favicon files, metadata, Reveal | IMPLEMENTED (`4a89597`, 2026-09-22) |
| Stage 0.5 | Shared documentation for agents | IMPLEMENTED (`3e3b8cc`, 2026-09-22) |
| Stage 1 | Hero copy alignment with the page column | IMPLEMENTED (`09b1955`) · remainder PROPOSED |
| Stage 2 | One project-page template as the case-study pattern | IMPLEMENTED in working tree · visual review PENDING |

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

## Completed Stage 1 work

Hero copy alignment with the existing page content column. Owner-accepted after viewport QA.

| Item | Status | Source |
| --- | --- | --- |
| Shared `.hero-copy` wrapper | IMPLEMENTED | `app/page.tsx`, `app/hero.css` |
| Page column `width: min(100%, 1600px)` + `margin-inline: auto` | IMPLEMENTED | `.hero-copy`, same mechanism as `.work-section-header` |
| Gutter `padding-inline: clamp(1.5rem, 4vw, 5rem)` | IMPLEMENTED | `.hero-copy` |
| `.hero-index` and `.hero-content` share that column | IMPLEMENTED | siblings inside `.hero-copy` |
| Asymmetric type measure `width: min(71rem, 86%)` on `.hero-content` | IMPLEMENTED | unchanged inner measure |
| Full-bleed hero video | IMPLEMENTED | `.hero` / `HeroVideo` unchanged |
| `.hero-footer` alignment with the 1600px column | out of scope | still `left/right: clamp(1.5rem, 4vw, 5rem)` only |

An earlier attempt padded only `.hero-content`. That missed `.hero-index` and the centered 1600px offset, so it did not match Work. The wrapper is the correction.

Validation (this Stage 1 session):

- `npm run lint` — clean
- `npm run build` — success, TypeScript OK
- Viewports `320px`, `375px`, `390px`, `768px`, `1440px`, `1920px`: left edges of `01 HOME`, the Hero heading, `WORK ARCHIVE`, and the wordmark match; no horizontal overflow; no text clipping
- At `1920px`, `.hero-copy` is a centered 1600px column (`margin-left: 152.5px` + gutter `76.8px` → content at `229.3px`)

`.hero-footer` (`01 / 05`) was deliberately left outside `.hero-copy`. Above 1600px it follows only the gutter, so it sits left of the Work column. That remaining mismatch is future work. It is not part of this Stage 1 item.

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
- Hero copy (`.hero-index` + `.hero-content`) aligned to the page column via `.hero-copy`
- Project page template: header offset, media heading, 3D-then-film grouping, 4:3 model frames, ModelViewer placeholder, quieter bullets, Credits/Tools on the media grid measure

## Open tasks

| Item | Status |
| --- | --- |
| Stage 2 owner visual review | PENDING |
| Stage 2 point 9 — reorder About vs Media | PROPOSED · out of current pass |
| `.hero-footer` alignment with the 1600px column (above 1600px) | IMPLEMENTED in working tree (with `NN / 05` footers) |
| Remaining Stage 1 scope beyond the Hero copy alignment | PENDING |
| Final favicon by owner | PENDING |
| INTER Polska naming confirmation | PENDING |
| Media for `educational-interactive-experience` and `educational-multimedia-project` | OPEN |
| OG image | OPEN (no file, Twitter card is `summary`) |
| `sitemap.ts` / `robots.ts` | OPEN (absent) |
| README.md still describes create-next-app / Geist | OUTDATED |
| `GITHUB-PORADNIK.md` local path `F:\Projects\bzabik-art-1` | OUTDATED |

## Known blockers

- Stage 1 Hero copy alignment is implemented. `.hero-footer` still uses the gutter-only inset and can diverge above 1600px.
- Final identity mark is waiting on the owner.
- Two of four Work rows have no published media (`WorkIndexVisual` falls back to a category glyph).
- Hero video `public/videos/timeline-4.mp4` is about 11.2 MB.

## Items requiring user approval

Listed in [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md). Immediate ones:

- Favicon visual direction
- Further Stage 1 items beyond the implemented Hero copy alignment
- `.hero-footer` alignment with the 1600px column
- INTER Polska spelling
- Hero redesign or copy change

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

Stage 1 validation ran `npm run lint` (clean) and `npm run build` (success, TypeScript OK, 13 routes generated). Treat live Vercel production HTML as **NEEDS_VERIFICATION** until this Stage 1 commit is pushed and deployed.
