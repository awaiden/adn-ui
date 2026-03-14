# adn-ui - Gemini CLI Context

Welcome to the `adn-ui` monorepo. This file provides architectural context and development guidelines for this project.

## Project Overview

`adn-ui` is a modern, accessible UI library built for React and Svelte. It leverages Radix UI (React) and Bits UI (Svelte) for accessible primitives, and Tailwind CSS v4 for styling.

### Architecture

The project is structured as a monorepo using **Turborepo** and **Bun**:

- **`packages/core`**: Contains the design system's variants and logic using `tailwind-variants`. This is the single source of truth for component styles.
- **`packages/react`**: React components built on Radix UI primitives, using `@adn-ui/core` for styling.
- **`packages/svelte`**: Svelte components using `@adn-ui/core` for styling.
- **`packages/vue`**: Vue components built on Reka UI primitives, using `@adn-ui/core` for styling.
- **`packages/styles`**: Core CSS, Tailwind configuration, and design tokens (OKLCH).
- **`apps/docs`**: Documentation site built with Astro Starlight.

## Tech Stack

- **Runtime & Package Manager**: [Bun](https://bun.sh)
- **Build System**: [Turborepo](https://turbo.build)
- **Component Primitives**: [Radix UI](https://www.radix-ui.com/) (React), [Bits UI](https://bits-ui.com/) (Svelte), [Reka UI](https://www.reka-ui.com/) (Vue)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com), [Tailwind Variants](https://www.tailwind-variants.org/)
- **Linting & Formatting**: [Biome](https://biomejs.dev)
- **Bundler**: `tsdown` (for packages), Vite (for docs/testing)
- **Testing**: [Vitest](https://vitest.dev), Playwright
- **Documentation**: [Astro Starlight](https://starlight.astro.build/)

## Key Commands

All commands should ideally be run from the root using `bun`.

| Command | Description |
| :--- | :--- |
| `bun install` | Install all dependencies |
| `bun dev` | Start development mode for all workspaces |
| `bun run build` | Build all packages and applications |
| `bun check` | Run Biome linting and formatting checks |
| `bun check:fix` | Automatically fix linting/formatting issues |
| `bun test` | Run tests across the monorepo |

### Workspace-Specific Commands

- **React Storybook**: `cd packages/react && bun run storybook`
- **Svelte Storybook**: `cd packages/svelte && bun run storybook`
- **Vue Storybook**: `cd packages/vue && bun run storybook`
- **Docs Dev**: `cd apps/docs && bun run dev`

## Development Conventions

### Styling Strategy

The project uses a "variants-first" approach.
1. Define styles in `packages/core/src/*.variants.ts` using `tailwind-variants`.
2. Use semantic CSS classes (e.g., `button--primary`) which are mapped to Tailwind utility classes in `packages/styles`.
3. Import and apply these variants in framework-specific components (`packages/react`, `packages/svelte`, or `packages/vue`).

### Component Implementation

- **Cross-Framework Consistency**: The anatomy of a component MUST match exactly between React, Svelte, and Vue implementations (e.g., if React has `Accordion.Root`, `Accordion.Item`, Svelte and Vue must have the exact same structure).
- **React**: Components should be functional, use TypeScript, and prefer Radix UI primitives. Use `React.ComponentProps` for prop types.
- **Svelte**: Components follow Svelte 5 patterns and use Bits UI where applicable.
- **Svelte Component Pattern**:
  1. **Directory Structure**: `packages/svelte/src/lib/components/[name]/`.
  2. **Naming**: Kebab-case for `.svelte` files (e.g., `table-row.svelte`).
  3. **Context**: Use `[name].context.ts` with Svelte 5's `createContext<T>()` (available in 5.40.0+) to share `@adn-ui/core` variants across sub-components. This returns a `[getContext, setContext]` pair.
  4. **Exports**: `index.ts` must export a compound object (e.g., `Table.Root`) and named aliases (e.g., `TableRoot`).
  5. **Testing**: Always include `[name]-test.svelte` (to wrap snippets) and `[name].svelte.spec.ts` for Vitest Browser Mode tests.
  6. **Stories**: Always include `[name].stories.svelte` for Storybook documentation and visual testing.
- **Vue**: Components use `<script setup lang="ts">` and Reka UI primitives.
- **Vue Component Pattern**:
  1. **Directory Structure**: `packages/vue/src/components/[name]/`.
  2. **Naming**: Kebab-case for `.vue` files (e.g., `field-root.vue`).
  3. **Context**: Use `[name].context.ts` with Reka UI's `createContext<T>(providerName)` to share variants. This returns `[useProvider, useInject]`.
  4. **Exports**: `index.ts` must export a compound object (e.g., `Field.Root`) and named aliases (e.g., `FieldRoot`).
  5. **Testing**: Use `vitest-browser-vue` for Vitest Browser Mode tests.
  6. **Stories**: Always include `[name].stories.ts` (or `.tsx`) for Storybook.
- **Naming**: Use kebab-case for files and folders.

### Commits & Releases

The project uses **Changesets** for versioning and changelog generation.
- Run `bun changeset` to document a change before committing.
- CI/CD handles releases via the `.github/workflows/release.yml`.

## Testing

- Unit/Component tests are written with **Vitest**.
- E2E tests (where applicable) use **Playwright**.
- Always verify changes in Storybook before submitting.

## Resources
- BitsUI: https://bits-ui.com/docs/llms.txt (fetch before svelte adding component)
- RekaUI: https://reka-ui.com/llms.txt (fetch before adding vue component)
- RadixUI: https://www.radix-ui.com/primitives (fetch before adding react component)