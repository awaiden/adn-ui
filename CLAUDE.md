# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `bun run dev` (Vite with HMR)
- **Build:** `bun run build` (runs `tsc -b && vite build`, prebuild runs `shadcn build`)
- **Lint:** `bun run lint` (oxlint with perfectionist plugin)
- **Format:** `bun run format` (oxfmt)
- **Type check only:** `npx tsc -b`
- **Storybook:** `bun run storybook` (port 6006)
- **Build Storybook:** `bun run build-storybook`
- **Storybook tests:** `npx vitest --project=storybook` (runs in headless Chromium via Playwright)

Package manager is **bun** (uses `bun.lock`).

## Architecture

React component library (adn-ui) published as a shadcn registry. Built with Tailwind CSS v4, Vite, TypeScript, and Radix UI primitives.

### Component File Structure

Each component lives in `src/components/ui/<name>/` with these files:

- **`<name>-<part>.tsx`** — Component implementation. Props extend `React.ComponentProps<element>` merged with variant types. Exports both the component and its Props type.
- **`<name>.variants.ts` (or `.tsx`)** — Variant definitions using `tailwind-variants` (`tv()`). Exports the variants function and its `VariantProps` type. Uses `/* eslint-disable perfectionist/sort-objects */` when variant ordering is intentional.
- **`<name>.css`** — Styles using Tailwind `@apply` on BEM-style class names.
- **`<name>.context.ts`** — React context for compound components (slot system).
- **`<name>.stories.tsx`** — Storybook stories using `satisfies Meta<typeof Component>` pattern.
- **`index.ts`** — Barrel file exporting: namespace object, individual named exports, Props types, context/hook, and variants.

### Compound Components (Slot System)

Multi-part components (Card, Sheet, Table, etc.) use a context-based slot system:

1. Root component calls `tv({ slots: {...} })` to create per-slot class functions.
2. Root wraps children in a context provider passing `{ slots }`.
3. Child components call `useXContext()` to get their slot class function.
4. Exported as both a namespace object (`Card.Root`, `Card.Header`) and individual named exports.

### Index File Export Order

Barrel files follow this order (enforced by perfectionist sort-exports):

1. Namespace `export const X = {...}`
2. Named component re-exports `export { ... }`
3. Type exports `export type { XProps } from "./x-part"`
4. Context export `export { XContext, useXContext } from "./x.context"`
5. Variants export `export { type XVariants, xVariants } from "./x.variants"`

All exports are sorted alphabetically by source path.

### Styling

- Tailwind CSS v4 with `@tailwindcss/vite` plugin
- `tailwind-variants` for variant logic (`tv()` for definitions, `cn()` for class merging in components)
- `vite-plugin-tailwind-ref` auto-references `src/index.css` in all component CSS files
- BEM naming: block (`card`), element (`card__header`), modifier (`card--outline`)
- Design tokens in `src/index.css` as CSS custom properties using oklch color space

### shadcn Registry

This project IS a shadcn registry (style: `radix-nova`). The `prebuild` step runs `shadcn build` to generate registry JSON. Components are consumed via `npx shadcn@latest add @adn/<component>`.

### Linting

Uses **oxlint** (not eslint) with `eslint-plugin-perfectionist` (`recommended-natural` config). This enforces alphabetical sorting of imports, exports, object keys, and JSX props. Pre-commit hook runs `shadcn build` then `lint-staged` (oxlint + oxfmt).

### Path Aliases

TypeScript paths: `~/` maps to `./src/` (configured in tsconfig.json, resolved by Vite via `tsconfigPaths`).
