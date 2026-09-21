# DESIGN SYSTEM

Current as of 2026-09-22 · Stage 1 Hero alignment IMPLEMENTED. Parent HEAD `3e3b8cc`.

Documented here: existing CSS and approved visual rules. New design ideas are marked PROPOSED. This file is not a redesign brief.

---

## Character

Dark editorial archive. Strong display type, numbered sections, negative space, and controlled cyan/violet accents on a near-black ground.

CONFIRMED restrictions:

- Avoid generic AI aesthetics.
- Avoid cyberpunk cliché.
- Avoid excessive neon and glow.
- Do not redesign the hero, Work Index, overlay menu, or dark system without explicit approval.

## Typography

Loaded in `app/layout.tsx` via `next/font/google`, subsets `latin` and `latin-ext`, `display: "swap"`.

| Role | Family | CSS variable |
| --- | --- | --- |
| Body / UI | Inter | `--font-inter` → `--font-sans` |
| Display | Space Grotesk | `--font-space-grotesk` → `--font-display` |
| Fallback | Arial, sans-serif | — |

Usage in CSS:

- Display: homepage `h1`, section titles, overlay nav labels, Work row titles, project titles, contact email
- Body: default `body` text, descriptions, metadata
- Micro labels: `.eyebrow`, `.wordmark`, `.discipline-line`, `.hero-index`, `.menu-trigger` — about `0.6875rem`, letter-spacing `0.13em`, weight 500

Homepage `h1` is three stacked words (`DIGITAL` / `CREATIVE` / `ARCHIVE`) with tight line-height (~0.83) and negative letter-spacing.

Root README still mentions Geist. That is **OUTDATED**.

## Color direction

Tokens in `app/globals.css` `:root`:

| Token | Value | Role |
| --- | --- | --- |
| `--color-background` | `#05070d` | Page ground |
| `--color-background-secondary` | `#0a0e18` | Glyph frames |
| `--color-surface` | `#111827` | Media frames |
| `--color-text-primary` | `#f8fafc` | Primary type |
| `--color-text-secondary` | `#94a3b8` | Meta, eyebrows |
| `--color-electric-blue` | `#0066ff` | Film accent, discipline dots |
| `--color-digital-violet` | `#7c3aed` | Animation accent |
| `--color-cyan-glow` | `#00c2ff` | Index numbers, hover, interactive cues |
| `--line-subtle` | `rgb(148 163 184 / 18%)` | Rules and grid |

RGB companion tokens drive hero atmosphere: burgundy, violet-deep, magenta-muted, violet-dark, violet-glow.

Category accents on Work tags (`app/work/work.css`): film blue, 3D cyan, animation violet, interactive violet-glow, AI mix, generative magenta mix.

Hero accent word uses a pale tint (`#e7e6ff` in `hero.css`) with a very low-opacity violet text-shadow.

## Layout principles

- Shell: `.archive-shell` with a faint column grid (`.archive-grid`) and radial atmosphere.
- Content width: `min(100%, 1600px)` with horizontal padding `clamp(1.5rem, 4vw, 5rem)`.
- Header is fixed; sections use `scroll-margin-top` so hashes clear the header.
- Numbered section indexes (`01` Home through `05` Contact).
- Rules (`border-top` with `--line-subtle`) separate sections.

## Asymmetry

Work Index rows (`components/WorkIndexRow.tsx` + `app/work/work.css`):

- Even index: visual on the right (`data-align="left"`)
- Odd index: visual on the left (`data-align="right"`)
- Column ratios change by visual kind (`model` / `thumbnail` / `glyph`)
- Glyph frames reverse stripe angle on right-aligned rows

This is the approved Work Index structure from `77bd9dc`. Do not convert it to a symmetrical card grid.

## Spacing

Clamp-based spacing throughout. Typical vertical padding on sections: `clamp(3.5rem, 6vw, 5rem)` to `clamp(4.5rem, 8vw, 7rem)`. Work rows use `clamp(2.25rem, 4.5vw, 4rem)` block padding.

Body `min-width: 320px`. `scrollbar-gutter: stable`. `overflow-x: clip` on the shell.

Header, Work, About, Profile, Contact, project pages, and Hero copy (`.hero-copy`) share the page column: `width: min(100%, 1600px)`, `margin-inline: auto`, `padding-inline: clamp(1.5rem, 4vw, 5rem)`. `.hero-copy` wraps `.hero-index` and `.hero-content`. `.hero-content` keeps its inner measure `width: min(71rem, 86%)`. The homepage `.hero-footer` still uses only `left/right: clamp(1.5rem, 4vw, 5rem)` and is outside that column.

## Responsive behavior

Breakpoints in CSS:

| Width | Behavior |
| --- | --- |
| `900px` | Work rows stack visual under body; project media grid becomes one column |
| `800px` | Hero content full width |
| `640px` | Single-column Work rows, tighter type, stacked footer and project nav, contact email wrap (`word-break: break-word`) |

## Animation and reveal

Motion tokens (`app/globals.css`):

- `--motion-ease: cubic-bezier(.4, 0, .2, 1)`
- `--motion-fast: 180ms`
- `--motion-medium: 320ms`
- `--motion-reveal: 560ms`

`Reveal` (`components/Reveal.tsx`):

- Starts at `data-reveal="hidden"` (opacity 0, `translateY(1.5rem)`)
- Becomes `visible` on intersection (threshold `0.1`, rootMargin `-5%`)
- Reduced motion: treated as visible immediately
- `noscript` in `app/layout.tsx` and `@media (scripting: none)` keep content visible without JS

Hero video is omitted when `prefers-reduced-motion: reduce` (`app/hero-video.tsx` and `hero.css`).

Global reduced-motion rule shortens transitions and animations to `0.01ms`.

Overlay menu fades and translates; body scroll locks while open.

Hover cues are small: cyan title color, play-badge, 3% thumbnail scale, cue arrow shift.

## Accessibility considerations

IMPLEMENTED:

- Overlay nav is a modal dialog with `aria-modal`, focus trap, Escape, and return focus to the trigger
- `aria-expanded` / `aria-controls` on the menu button
- Section `aria-labelledby` / `aria-label`
- Reveal content remains in the document; JS-off is handled
- Hero video is `aria-hidden` and decorative
- Work Index 3D preview uses `inert` so it is not an unexpected tab stop
- Contact email has an explicit `aria-label`
- YouTube iframes have a title
- `prefers-reduced-motion` is respected for video, reveals, and motion tokens
- Wordmark has an accessible name

Limitations:

- Color contrast of secondary text (`#94a3b8` on `#05070d`) is not independently audited here (**NEEDS_VERIFICATION**)
- Work row whole-card hover is visual; the actual control is the title link
- No skip-to-content link

## Current design limitations

- `.hero-footer` can sit left of the 1600px page column on viewports wider than 1600px (out of Stage 1 scope; PROPOSED later work)
- Geometric B favicon is a Stage 0 stand-in; owner will supply the final mark
- Two Work rows use a glyph fallback because those projects have no media
- Leftover unused page-hero CSS: `.work-hero`, `.about-hero`, `.contact-hero`, `.profile-hero`, `.profile-footer`
- `FeaturedWork` has no CSS in the current cascade
- Cyan glow on menu trigger and list bullets exists; keep it controlled
- No light theme

## Stage 1 — Hero copy column

**Status:** IMPLEMENTED · owner-accepted

`.hero-copy` is the Hero cluster container (`.hero-index` + `.hero-content`). It uses the same column and gutter as `.work-section-header`. Video stays full-bleed. Type scale and inner `86%` / `71rem` measure stay on `.hero-content`.

**Out of scope:** `.hero-footer`. Above 1600px it can use a different alignment line than `.hero-copy`. Footer alignment is PROPOSED later work.

**Checks recorded:** 320px, 375px, 390px, 768px, 1440px, 1920px — no horizontal overflow.

## PROPOSED (not approved)

- New identity mark / favicon beyond the current geometric B
- Hero redesign (the Stage 1 column wrapper is implemented; a broader hero restyle is not)
- Aligning `.hero-footer` to the 1600px page column
- Author name near the hero
- Replacing glyph fallbacks with lead media
- Custom HTML5 video player chrome
- Uneven / modular project-page media layouts beyond the current 2-column grid
