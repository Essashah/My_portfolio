# Essa Shah — Portfolio

Personal site for Essa Shah, AI / ML Engineer. Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lenis.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Structure

- `src/data/content.ts` — all copy: profile, experience, capabilities and toolkit. Edit text here.
- `src/components/` — page sections (`Hero`, `About`, `Capabilities`, `Experience`, `Toolkit`, `Contact`), plus `Nav` and `Loader`.
- `src/components/ui/` — motion primitives: masked line reveals, text scramble, magnetic hover, local clock.
- `src/components/effects/DotField.tsx` — the interactive dot-matrix canvas behind the hero.
- `src/lib/scroll.ts` — Lenis smooth scrolling and anchor navigation.

All motion respects `prefers-reduced-motion`.
