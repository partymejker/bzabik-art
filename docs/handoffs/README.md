# Agent handoffs

Handoffs let a later AI agent continue work without a full audit.

Create one Markdown file per session or completed stage:

```
docs/handoffs/YYYY-MM-DD-short-name.md
```

Read the latest handoff after [PROJECT_STATUS.md](../PROJECT_STATUS.md). If the handoff and the repo disagree, trust `git status` and the source files, then update the handoff.

Do not store secrets, `.env` values, or access tokens here.

---

## Required sections

Each handoff must contain:

### Current task
What the session was asked to do, in one short paragraph.

### Context
Phase, branch, HEAD commit, and any owner constraints that applied.

### Files inspected
Paths actually read. Not the whole tree.

### Files changed
Paths created or edited. If none, say so.

### Validation results
Commands run and outcomes. If something was not run, say that.

### Unresolved questions
Open decisions, `NEEDS_VERIFICATION` items, contradictions.

### Recommended next action
The single most useful next step for the following agent or the owner.

### Commit authorization status
`NOT AUTHORIZED` · `AUTHORIZED` · `COMMITTED` (`hash`)

### Push authorization status
`NOT AUTHORIZED` · `AUTHORIZED` · `PUSHED` (`range`)

---

## Template

Copy this block into a new file:

```markdown
# Handoff: <short name>

Date:
Agent:
HEAD:

## Current task

## Context

- Phase:
- Branch:
- Constraints:

## Files inspected

-

## Files changed

-

## Validation results

-

## Unresolved questions

-

## Recommended next action

## Commit authorization status

NOT AUTHORIZED

## Push authorization status

NOT AUTHORIZED
```

---

## Rules

- One current task per handoff. Start a new file if the owner changes scope.
- Keep it short. Link to `docs/*.md` instead of repeating architecture.
- Mark proposed work as PROPOSED.
- After an approved commit, update this handoff with the hash, or add a line to [CHANGELOG.md](../CHANGELOG.md).
- Do not commit or push because a handoff exists. Authorization still has to be explicit.

Latest handoff for Stage 0.5: [2026-09-22-stage-0.5-docs.md](./2026-09-22-stage-0.5-docs.md)
