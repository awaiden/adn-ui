# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`adn-ui-next` is a monorepo-based, cross-framework UI component library with packages for React, Svelte, and Vue. It uses Turborepo for orchestration and Bun as the package manager (Node.js >=22 required).

**Published packages:** `@adn-ui/react`, `@adn-ui/svelte`, `@adn-ui/vue`, `@adn-ui/core`, `@adn-ui/styles`

## Commands

```bash
# Install dependencies
bun install

# Development (all packages)
bun dev

# Build (all packages)
bun run build

# Lint & format
bun run lint
bun run fmt
bun check        # runs both lint + fmt

# Test (all packages)
bun run test

# Run tests for a specific package
bun run --filter @adn-ui/react test

# Start Storybook (from within the package directory)
bun storybook
```

## Architecture

### Monorepo Structure

```
packages/
  core/     # Tailwind Variants definitions shared across all frameworks
  react/    # React 19 components using Radix UI
  svelte/   # Svelte components using Bits UI
  vue/      # Vue components using Reka UI
  styles/   # Core CSS, OKLCH design tokens, Tailwind v4 config
apps/
  docs/     # Astro Starlight documentation site
```

### Styling Architecture (3-layer system)

1. **`@adn-ui/styles`** — Raw CSS: `src/index.css` imports layers, themes, and per-component CSS. `src/themes/default.css` defines OKLCH color tokens. `.dark` class switches themes.
2. **`@adn-ui/core`** — Variant logic: each `src/*.variants.ts` file uses `tailwind-variants` (`tv()`) to define a component's visual variants (size, color, etc.), exported from `src/index.ts`.
3. **Framework packages** — Components import variants from `@adn-ui/core`, apply them with `className`, and wrap the relevant headless primitive (Radix/Bits/Reka).

### Component Pattern

Every component follows this structure within its package (e.g., `packages/react/src/components/button/`):
- `button.tsx` — Component implementation
- `button.variants.ts` (in `packages/core/src/`) — `tv()` variant definition
- `button.spec.tsx` — Tests
- `button.stories.tsx` — Storybook stories
- `index.ts` — Re-exports

Compound components use named sub-components (Root, Item, Trigger, Content, etc.) via dot notation or named exports.

### Adding a New Component

1. Create `packages/core/src/<name>.variants.ts` with `tv()` and export it from `packages/core/src/index.ts`
2. Create `packages/styles/src/components/<name>.css` and import it in `packages/styles/src/index.css`
3. Implement the component in each framework package under `src/components/<name>/`
4. Export from the package's `src/components/index.ts`

## Tooling

- **Turborepo** — Task runner; `turbo.json` defines task dependencies (`build` depends on `^build`)
- **vite-plus (`vp`)** — Unified CLI for lint, format, test, and build config
- **Changesets** — Version management; run `bun changeset` to create a changeset before merging
- **CI** — Canary releases auto-publish on merge to `main`; stable releases via GitHub release

## Commit Convention

Format: `<type>(<scope>): <description>` (lowercase, imperative, no period)

Types: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `perf`, `test`
Scopes: component name or area (e.g., `button`, `accordion`, `build`, `deps`)

## SSR / Environment Guards

Always guard browser-only APIs: `window`, `localStorage`, `document` must be wrapped in existence checks for SSR compatibility and test environments.
