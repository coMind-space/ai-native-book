---
project: ai-native-book
purpose: Public interactive book site
---

# Agent Instructions

This repository is the public source for the interactive book "Путь компании к AI-Native".

## Source Files

- Edit book content in `docs/`.
- Edit navigation in `sidebars.ts`.
- Edit site styling in `src/css/custom.css`.
- Do not edit generated output in `.docusaurus/` or `build/`.

## Editorial Rules

Use clear business Russian. Keep terminology stable across chapters. Avoid unnecessary English words, rhetorical contrasts, slash-heavy wording, and decorative marketing language.

## Validation

After changes, run:

```bash
npm run typecheck
npm run build
```

Prefer pull requests for content changes so wording, structure, and factual accuracy can be reviewed.
