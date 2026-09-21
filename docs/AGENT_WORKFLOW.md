# AGENT WORKFLOW

Use this workflow on every BZABIK.ART task. The documentation in `docs/` is the shared project memory. Do not start with a full-repo audit unless that documentation is missing, outdated, or contradicts the code.

---

## Before work

1. **Read relevant documentation.** Minimum: [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md), [PROJECT_STATUS.md](./PROJECT_STATUS.md), [DECISIONS.md](./DECISIONS.md). Then only the files that match the task (architecture, design, content, media, latest handoff).
2. **Check git status.** `git status`
3. **Check the current branch.** `git branch --show-current` — expected default is `main`.
4. **Check recent commits.** `git log --oneline -10`
5. **Read only files relevant to the task.** Use paths from the docs. Do not dump the entire tree.
6. **Identify assumptions and uncertainties.** Label them. If the docs say `NEEDS_VERIFICATION` or `PENDING`, do not silently resolve them.
7. **Work within the approved scope.** If the request would redesign the hero, change identity, touch Vercel/DNS, or implement unapproved Stage 1 ideas, stop and ask. The Stage 1 Hero copy alignment (`.hero-copy`) is IMPLEMENTED. `.hero-footer` alignment is out of that scope. Further Stage 1 items remain PROPOSED until approved.

If documentation and code disagree, trust the code, record the contradiction, and update the docs as part of the task when the change is in scope.

## During work

8. **Run relevant validation.** For app changes: `npm run lint` and, when the change can break the build, `npm run build`. For docs-only work, do not install new linters. Do not add dependencies only to validate documentation.
9. **Review the final diff.** `git status`, `git diff --stat`, `git diff`. Confirm the change set matches the task. Revert accidental edits to unrelated files without overwriting pre-existing user work.

## After work

10. **Report changes and remaining issues.** Files created/updated, facts changed, open questions, items still `PENDING` or `NEEDS_VERIFICATION`.
11. **Suggest documentation updates** when architecture, content, decisions, or status changed. Apply those updates in the same task when they are part of the requested work.
12. **Write a handoff** under `docs/handoffs/` when the session should be continued by another agent. Follow [handoffs/README.md](./handoffs/README.md).

Do not commit. Do not push. Wait for explicit owner approval.

---

## Restrictions

- Do not push without explicit permission.
- Do not commit without explicit permission.
- Do not use `git add .`. If a commit is later approved, stage only reviewed files.
- Do not redesign unrelated sections.
- Do not override approved decisions in [DECISIONS.md](./DECISIONS.md).
- Do not treat proposed features as implemented.
- Do not claim to have verified Vercel settings without access.
- Do not change DNS, domain redirects, or Vercel project settings unless asked.
- Do not implement Cloudflare R2, a custom video player, or media migration unless that is the approved task. Do not expand Stage 1 to `.hero-footer` or other unapproved layout work unless the owner asks.
- Do not redesign the hero or change the favicon design.
- Do not invent client names, a live CV PDF, or a contact form.
- Do not repeat a full audit unless documentation is missing, outdated, or contradictory.

## Reading map

| Task type | Read |
| --- | --- |
| Any | PROJECT_CONTEXT, PROJECT_STATUS, DECISIONS, latest handoff |
| Routes, components, deploy | ARCHITECTURE |
| Visual / CSS / motion | DESIGN_SYSTEM |
| Copy, projects, profile | CONTENT_MODEL |
| Video, GLB, YouTube, CDN ideas | MEDIA_SYSTEM |
| Continuing another agent | `docs/handoffs/` |

## Git and reporting

- Preferred remote: `https://github.com/partymejker/bzabik-art.git`
- Preferred branch: `main`
- Owner often authorizes git in Polish (for example “wykonaj push”). Treat that as explicit permission for the named action only.
- After an approved commit, confirm hash and files. After an approved push, confirm the range. Do not force-push unless explicitly requested.

## Documentation hygiene

When you change product behavior or lock a decision:

- Update [PROJECT_STATUS.md](./PROJECT_STATUS.md)
- Add a row to [DECISIONS.md](./DECISIONS.md) if a decision was made
- Add a short entry to [CHANGELOG.md](./CHANGELOG.md) for the stage, not for every CSS tweak
- Keep status labels: `IMPLEMENTED` `CONFIRMED` `PLANNED` `PROPOSED` `PENDING` `NEEDS_VERIFICATION` `OUTDATED`

Stale root files: `README.md` (create-next-app / Geist) and `GITHUB-PORADNIK.md` (old local path). Do not treat them as source of truth.
