# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `bun run dev` (Vite with HMR)
- **Build:** `bun run build` (runs `tsc -b && vite build`)
- **Lint:** `bun run lint` (ESLint with perfectionist plugin for import/object sorting)
- **Type check only:** `npx tsc -b`
- **Preview production build:** `bun run preview`
- **Storybook:** `bun run storybook` (port 6006)
- **Build Storybook:** `bun run build-storybook`
- **Storybook tests:** `npx vitest --project=storybook`

Package manager is **bun** (uses `bun.lock`).

## Architecture

This is a React component library (adn-ui) using Tailwind CSS v4, Vite, and TypeScript.

### Component Pattern

Components follow a consistent structure under `src/components/<name>/`:

- **`<name>.tsx`** — Component implementation. Props extend `React.ComponentProps<element>` merged with variant types.
- **`<name>.variants.ts`** — Variant definitions using `tailwind-variants` (`tv()`). Exports the variants function and its `VariantProps` type.
- **`<name>.css`** — Styles using Tailwind `@apply` on BEM-style class names (e.g., `.button--primary`, `.card__header`).
- **`index.ts`** — Barrel file exporting the component, variants, and types.

### Multi-part Components (Card pattern)

Compound components use a context-based slot system:

- Root component creates variants with `tv({ slots: {...} })` and provides slot classes via React context.
- Child components consume context with a `useXContext()` hook to get their slot class.
- Exported as a namespace object (`Card.Root`, `Card.Header`, etc.) plus individual named exports.

### Styling Approach

- Tailwind CSS v4 with `@tailwindcss/vite` plugin
- `tailwind-variants` for variant logic (`tv()` for definitions, `cn()` for merging)
- `vite-plugin-tailwind-ref` for auto-referencing `src/index.css`
- CSS classes use BEM naming: block (`card`), element (`card__header`), modifier (`card--outline`)

### shadcn Registry

This project IS a shadcn registry (not a consumer). Components are published as registry entries with `radix-nova` style (`components.json`). Design tokens (colors, radii) are defined as CSS custom properties in `src/index.css` using oklch.

### Class Merging

Two `cn` utilities exist — use `cn` from `tailwind-variants` (which components import) for combining variant output with className overrides. The `src/lib/utils.ts` `cn` (clsx + tailwind-merge) is the shadcn-compatible utility for general class merging.

### Storybook

Stories live alongside components as `<name>.stories.tsx`. Use `satisfies Meta<typeof Component>` pattern. Tests run in a real browser via Playwright (`npx vitest --project=storybook`).

### ESLint

Uses `eslint-plugin-perfectionist` with `recommended-natural` config for automatic sorting of imports, objects, etc. Disable with `/* eslint-disable perfectionist/sort-objects */` when variant ordering is intentional.
