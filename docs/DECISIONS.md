# DECISIONS

Current as of 2026-09-22 · commit `4a89597`.

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
- **Impact:** Agents may fix regressions in the existing treatment. They may not restyle or rewrite the hero as part of unrelated work. The Stage 1 left-inset spacing fix below is a separate, approved exception.

## Hero typography left inset is approved for Stage 1

- **Date / phase:** Stage 0.5 review (2026-09-22), approved for Stage 1
- **Decision:** Add a consistent responsive left padding/inset to the entire Hero typography block (eyebrow, main heading, category text). Preserve the current asymmetric composition and type scale. Prevent overflow and clipping. Check 320px, 375px, 390px, 768px, and 1440px.
- **Reason:** Owner review of Stage 0.5 docs. The typography currently sits too close to the left viewport edge.
- **Status:** APPROVED FOR STAGE 1 · not implemented
- **Impact:** Stage 1 may implement this spacing fix only. It is not a hero redesign, not present in CSS yet, and does not approve other hero or layout changes.

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
