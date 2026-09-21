# CONTENT MODEL

Current as of 2026-09-22 · commit `4a89597`.

Content lives in typed TypeScript modules. There is no CMS.

Primary sources: `lib/types.ts`, `lib/projects.ts`, `lib/categories.ts`, `lib/profile.ts`, `lib/contact.ts`, plus section components for static copy.

---

## Project data structure

`Project` in `lib/types.ts`:

| Field | Type | Required | Used in UI |
| --- | --- | --- | --- |
| `slug` | `string` | yes | Routes, keys, canonicals |
| `title` | `string` | yes | Work Index, project page, metadata |
| `year` | `string` | yes | Work Index, project eyebrow |
| `category` | `ProjectCategory[]` | yes | Tags, legend, project eyebrow |
| `description` | `string` | yes | Work Index, project About, metadata |
| `client` | `string?` | no | Rendered if present; currently unset on all projects |
| `responsibilities` | `string[]?` | no | Project page list |
| `thumbnail` | `string?` | no | Unused in UI |
| `media` | `ProjectMediaItem[]?` | no | Work Index visual + project media |
| `credits` | `ProjectCredit[]?` | no | Project page |
| `tools` | `string[]?` | no | Work Index + project page |
| `tags` | `string[]?` | no | Data only; Work Index shows `category`, not `tags` |
| `featured` | `boolean?` | no | Data only; `FeaturedWork` is unused |

`ProjectMediaItem`: `type` (`image` \| `video` \| `embed` \| `model`), `src`, optional `alt`, optional `poster`.

`ProjectCategory`: `"film" | "3d" | "animation" | "ai" | "generative" | "interactive"`.

Year note in `lib/projects.ts`: the range `2022–2025` is a placeholder covering the Learnetic tenure. Exact per-project years are **PENDING**.

## Project slugs

Four projects, in archive order:

| Slug | Title |
| --- | --- |
| `educational-interactive-experience` | Educational Interactive Experience |
| `educational-multimedia-project` | Educational Multimedia Project |
| `technical-3d-visualization` | Technical 3D Visualization |
| `interactive-learning-project` | Interactive Learning Project |

Routes: `/work/{slug}`. Unknown slugs call `notFound()`.

Previous client-identifying slugs were replaced in `0d83471`. Do not restore them.

## Categories

Order and labels: `lib/categories.ts`.

| id | Label | Projects using it |
| --- | --- | --- |
| `film` | Film | educational-multimedia-project, technical-3d-visualization |
| `3d` | 3D | educational-multimedia-project, technical-3d-visualization, interactive-learning-project |
| `animation` | Animation | technical-3d-visualization, interactive-learning-project |
| `ai` | AI | none |
| `generative` | Generative | none |
| `interactive` | Interactive | educational-interactive-experience |

`countCategories()` only lists categories that have at least one project. The Work legend therefore omits AI and Generative.

Homepage hero still prints `FILM · 3D · ANIMATION · AI`. About copy mentions AI, generative, and interactive work. That positioning is broader than the current archive.

## Tags

Each project has a `tags` array (EdTech plus discipline words). Nothing in the UI reads `project.tags`. Visible chips are `project.category`.

## Client naming and anonymity

CONFIRMED · IMPLEMENTED (`0d83471`):

- Public project records do not set `client`.
- Titles and slugs are generic and content-accurate.
- Descriptions do not name clients.
- `WorkIndexRow` and the project page will show a client line if `project.client` is set. Keep it unset.

Profile career entries still name employers. That is intentional and separate from project anonymity:

- Learnetic S.A.
- Canon Polska Sp. z o.o.
- INTER Polska S.A. (`id: "inter-polska"`)

`INTER Polska S.A.` spelling is **PENDING** owner confirmation before any change.

Do not drop the career timeline in order to anonymize employers.

## Project descriptions

Short English paragraphs in `lib/projects.ts`. They also become project-page meta descriptions.

Responsibilities are bullet lists on the project page only.

Credits currently name Bartłomiej Żabik with role titles that match the Learnetic work.

Tools are short lists (JavaScript, LaTeX, Blender, DaVinci Resolve, Adobe Photoshop, CSS).

## Work index

`components/sections/WorkSection.tsx` renders every entry in `projects` in array order.

Each row (`WorkIndexRow`) shows:

- Index number
- Category chips
- Title link to `/work/{slug}`
- Year
- Client only if present
- Media summary (`describeMedia()`)
- Description
- Tools
- Visual: first 3D model, else first YouTube thumbnail, else glyph

Two projects currently resolve to glyph because they have no `media`.

## About content

Static copy in `components/sections/AboutSection.tsx`:

- Eyebrow: `CREATIVE PHILOSOPHY`
- Heading: independent visual practice across film, 3D, animation, AI, generative and interactive work
- Detail: experimenting with the digital image, procedurality, technology, and new ways of making and presenting it

There is no `lib/about.ts`.

## Profile content

`lib/profile.ts`:

| Export | Contents |
| --- | --- |
| `profileIntro` | `name`, `role`, `summary` |
| `timeline` | Four work entries + one education entry |
| `capabilityGroups` | Graphics & 3D, Video & Animation, Code & Interactivity, Content & STEM, AI Tools, Collaboration & PM |
| `languages` | Polish native, English advanced, Russian basic |
| `cvPdfUrl` | `null` |

`profileIntro.name` and `profileIntro.role` are not rendered. The Profile heading is hard-coded `PROFILE/CV` in `ProfileSection`. The summary is rendered.

`cvPdfUrl` must stay `null` until the owner supplies a real PDF. The download control is omitted from the DOM when null.

Education: Liceum Ogólnokształcące im. M. Konopnickiej, Legionowo.

## Contact content

`lib/contact.ts`: `contactEmail = "contact@bzabik.art"`.

`ContactSection` renders that address as a `mailto:` heading and a one-line availability note. There is no form, phone number, or social links.

## Homepage hero copy

Hard-coded in `app/page.tsx`:

- Eyebrow: `AN INDEPENDENT VISUAL PRACTICE`
- Title: `DIGITAL / CREATIVE / ARCHIVE`
- Disciplines: `FILM · 3D · ANIMATION · AI`

Do not change this copy without approval.

## Language

The document language is English (`<html lang="en">`). Profile data includes Polish organization names.
