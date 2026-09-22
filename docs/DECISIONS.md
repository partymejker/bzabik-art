# DECISIONS

Current as of 2026-09-22 · Stage 2 project template IMPLEMENTED in the working tree. Parent HEAD `09b1955`.

Only decisions supported by the repository or explicit owner instruction. Dates use commit dates when the decision landed in git. Owner-confirmed items without a commit use the project phase.

---

## Canonical public domain is bzabik.art

- **Date / phase:** Stage 0 · 2026-09-22 (`4a89597`)
- **Decision:** Preferred public and canonical host is `https://bzabik.art` (apex).
- **Reason:** Owner instruction. Encoded as `metadataBase` in `app/layout.tsx`. Relative canonicals compose against it.
- **Status:** CONFIRMED · IMPLEMENTED (SEO only)
- **Impact:** Home canonical `/`, project canonicals `/work/{slug}`. This does not perform HTTP host redirects.

## WWW to apex is the host-redirect direction

- **Date / phase:** Stage 0 (owner instruction; not in repo)
- **Decision:** `www.bzabik.art` redirects to `https://bzabik.art` at the host/Vercel layer. Do not add an application-level host redirect.
- **Reason:** Owner confirmed this direction. An app-level redirect would fight Vercel Domains.
- **Status:** CONFIRMED as intent · live Vercel config NEEDS_VERIFICATION
- **Impact:** Agents must not add `middleware.ts` or `vercel.json` host redirects unless asked.

## Continuous one-page archive

- **Date / phase:** 2026-09-21 (`ba6713b`)
- **Decision:** Keep a continuous homepage with hash sections. `/work` `/about` `/profile` `/contact` redirect to hashes. Project details stay on `/work/[slug]`.
- **Reason:** Commit converted standalone section pages into homepage sections plus overlay-menu hash links.
- **Status:** CONFIRMED · IMPLEMENTED
- **Impact:** Dual redirects (page `redirect()` + `next.config.ts` `permanent: true`) are intentional. Do not split the site back into separate marketing pages.

## Overlay menu is the navigation

- **Date / phase:** 2026-09-21 (`ba6713b`) and earlier nav work
- **Decision:** Site navigation is a full-screen overlay (`SiteNav`), not an always-visible link row.
- **Reason:** Implemented menu behavior on the continuous archive.
- **Status:** CONFIRMED · IMPLEMENTED
- **Impact:** Do not replace it with a conventional header nav without approval.

## Clients and projects stay anonymous

- **Date / phase:** 2026-09-20 (`0d83471`)
- **Decision:** Level 1 anonymization. Neutral titles, slugs, and descriptions. Drop `client` from public project records.
- **Reason:** Commit message: replace client-specific titles/slugs/descriptions (for example “BCU Mielec” → “Technical 3D Visualization”); slugs are public SEO identifiers.
- **Status:** CONFIRMED · IMPLEMENTED
- **Impact:** Do not restore client names. Career employers in `lib/profile.ts` remain named.

## CV PDF stays inactive

- **Date / phase:** encoded in `lib/profile.ts`; Stage 0 kept this
- **Decision:** `cvPdfUrl` is `null`. The download control is not rendered.
- **Reason:** Owner instruction. An empty or fake PDF must not produce a broken href.
- **Status:** CONFIRMED · IMPLEMENTED
- **Impact:** Do not invent a PDF or a live-looking placeholder. Activate only with a real file and explicit approval.

## Contact is email only

- **Date / phase:** 2026-09-22 (`4a89597` set `contact@bzabik.art`); contact page from `f2a303f`
- **Decision:** Public contact is `contact@bzabik.art` via `mailto:`. No contact form.
- **Reason:** Owner-approved address. Contact section is minimal by design.
- **Status:** CONFIRMED · IMPLEMENTED
- **Impact:** Single source: `lib/contact.ts`.

## Hero uses a video background

- **Date / phase:** Present through Stage 0; do-not-redesign confirmed by owner
- **Decision:** Homepage hero is video-led (`/videos/timeline-4.mp4`). Do not redesign the hero without explicit approval.
- **Reason:** Owner restriction for this project. Implementation: `app/hero-video.tsx`, `app/hero.css`.
- **Status:** CONFIRMED · IMPLEMENTED
- **Impact:** Agents may fix regressions in the existing treatment. They may not restyle or rewrite the hero as part of unrelated work. The Stage 1 Hero copy column below is a separate, approved exception. `.hero-footer` alignment is not included.

## Hero copy shares the page content column

- **Date / phase:** Stage 1 · 2026-09-22 (approved in Stage 0.5 as a left-inset fix; implemented as a shared column wrapper)
- **Decision:** Wrap `.hero-index` and `.hero-content` in `.hero-copy`. Use the existing page column: `width: min(100%, 1600px)`, `margin-inline: auto`, `padding-inline: clamp(1.5rem, 4vw, 5rem)`. Keep `.hero-index` as a sibling of `.hero-content`. Keep the inner type measure, video background, and asymmetric composition. Do not nest the index inside `.hero-content`.
- **Reason:** Padding only `.hero-content` with the gutter left `.hero-index` on the viewport edge and missed the centered 1600px offset, so Hero did not line up with Work. The wrapper is the same mechanism as `.work-section-header`.
- **Status:** CONFIRMED · IMPLEMENTED
- **Impact:** `app/page.tsx` and `app/hero.css`. This is not a hero redesign. It does not change `.hero-footer`, copy, video, or other sections. Checked at 320px, 375px, 390px, 768px, 1440px, and 1920px with no overflow.

## Hero footer stays outside the column wrapper

- **Date / phase:** Stage 1 · 2026-09-22 (owner instruction during the alignment correction)
- **Decision:** Leave `.hero-footer` outside `.hero-copy`. Do not “fix” its horizontal inset as part of Stage 1.
- **Reason:** Stage 1 scope is the typography cluster (index + heading + discipline) lining up with Work. The footer still uses `left/right: clamp(1.5rem, 4vw, 5rem)` on the full-bleed hero.
- **Status:** CONFIRMED · out of Stage 1 scope · PROPOSED as later work
- **Impact:** Above 1600px, `01 / 05` can sit left of `.hero-copy` and Work. Do not expand Stage 1 to include the footer unless the owner asks.

## Final favicon comes from the owner

- **Date / phase:** Stage 0 (`4a89597` added geometric B files)
- **Decision:** Current `app/icon.svg` + `app/favicon.ico` are a geometric B stand-in. The owner will create the final favicon later. Do not change the favicon design in passing.
- **Reason:** Owner instruction in the Stage 0.5 brief; Stage 0 replaced the default Next.js mark.
- **Status:** CONFIRMED · files IMPLEMENTED · visual approval PENDING
- **Impact:** Leave the current B files until the owner supplies a replacement.

## Visual direction: editorial archive, not generic AI / cyberpunk

- **Date / phase:** Standing owner instruction
- **Decision:** Futuristic digital / editorial / experimental archive. Avoid generic AI aesthetics, cyberpunk cliché, and excessive neon.
- **Reason:** Owner restriction.
- **Status:** CONFIRMED
- **Impact:** Color tokens include cyan and violet; keep them controlled. Do not add HUD chrome, extra glow, or a symmetrical corporate landing.

## YouTube for film, model-viewer for GLB

- **Date / phase:** 2026-09-20 (project pages and media commits)
- **Decision:** Film on project pages is YouTube embed (`youtube-nocookie`). 3D is `@google/model-viewer` over files in `public/3d_models/`.
- **Reason:** This is what `ProjectMedia` and `lib/projects.ts` implement.
- **Status:** IMPLEMENTED
- **Impact:** A custom player or R2 origin is PROPOSED, not current.

## Hash redirects are permanent in next.config.ts

- **Date / phase:** 2026-09-21 (`ba6713b`)
- **Decision:** `next.config.ts` declares `/work` `/about` `/profile` `/contact` → `/#...` with `permanent: true`, in addition to page-level `redirect()`.
- **Reason:** Implemented with the continuous-archive move.
- **Status:** IMPLEMENTED
- **Impact:** Changing these to non-permanent is PROPOSED, not done. Do not “fix” the dual redirects unless asked.

## Project pages share one template; Stage 2 refines that template

- **Date / phase:** Stage 2 · 2026-09-22 (owner-approved points 1–8)
- **Decision:** Polish the shared `/work/[slug]` template as the case-study pattern. Group 3D models before film in the UI. Keep `lib/projects.ts` data order and copy unchanged. Do not reorder About vs Media yet (point 9).
- **Reason:** One complete project page is the reference; four routes use the same template, including entries with no media.
- **Status:** IMPLEMENTED in the working tree · visual review PENDING
- **Impact:** `app/work/[slug]/page.tsx`, `project.css`, `components/ModelViewer.tsx`, shared placeholder styles in `app/globals.css`. Home, Hero, Work Index layout, and media hosting stay as they are.

## Site section index lives in footers, not in the overlay

- **Date / phase:** Stage 2 follow-up · 2026-09-22
- **Decision:** Reuse `.page-count` (`NN / 05`) at the bottom of Home, Work, About, Profile, and Contact. Overlay menu keeps `01 Home` … `05 Contact` only. Project pages show only the archive index `NN / 04` in the hero — not `02 / 05` in the footer. Home `.hero-footer` shares the 1600px column so the count lines up.
- **Reason:** `01 / 05` existed only on the hero. The owner asked for the same index on main pages, then removed it from project pages because a case study already has an archive index and a second counter added noise.
- **Status:** IMPLEMENTED in the working tree · visual review PENDING
- **Impact:** `components/PageCount.tsx`, section footers, `app/hero.css` footer column.

## Project hero lead is the first model or first film

- **Date / phase:** Stage 2 follow-up · 2026-09-22
- **Decision:** If a project has media, show one lead asset beside the title/about cluster. Prefer the first 3D model; otherwise the first embed/video/image. Render it with `ProjectMedia`. Do not duplicate it in the Media section. Do not invent posters or change `lib/projects.ts`.
- **Reason:** The intro column left a large empty right side. The lead is evidence, not filler.
- **Status:** IMPLEMENTED in the working tree · visual review PENDING
- **Impact:** `app/work/[slug]/page.tsx` and `project.css` only. Point 9 (About vs Media order) stays untouched.
