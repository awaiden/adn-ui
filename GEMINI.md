# adn-ui Project Context

`adn-ui` is a modern, accessible, and framework-agnostic UI library built with **Tailwind CSS v4**, **Tailwind Variants**, and accessibility primitives (Radix UI for React).

## Project Overview

- **Monorepo Structure**: Managed with [Bun](https://bun.sh) and [Turborepo](https://turbo.build).
  - `packages/core`: Shared styling logic and variants using `tailwind-variants`. Defines BEM-like class names (e.g., `button--md`).
  - `packages/styles`: Central CSS repository, design tokens (OKLCH), and Tailwind v4 configuration.
  - `packages/react`: React 19 components built on [Radix UI](https://www.radix-ui.com/).
  - `apps/docs`: Documentation site built with Astro.
- **Styling**: Leverages Tailwind CSS v4's native support for OKLCH, CSS variables, and `@plugin` architecture.
- **Build System**: Uses `vite-plus` (`vp`) for package bundling (`vp pack`), linting (`vp lint`), and formatting (`vp fmt`).

## Building and Running

### Core Commands
- **Install Dependencies**: `bun install`
- **Build All**: `bun run build` (via Turbo)
- **Dev Mode**: `bun dev` (starts dev mode for all workspaces)
- **Check (Lint/Format)**: `bun check` or `bun lint` / `bun format`
- **Test**: `bun run test`

### Framework-specific Development
- **React Storybook**: `cd packages/react && bun run storybook`
- **React Tests**: `cd packages/react && bun run test`

## Development Conventions

### Component Architecture
- **Compound Components**: Follow a consistent compound component API. Export components as a main object with sub-components (e.g., `Button.Icon`).
- **Variant-First Styling**: All styling variants must be defined in `@adn-ui/core` using `tailwind-variants` to ensure consistency across frameworks (React, Svelte, Vue).
- **Separation of Concerns**:
  - **Logic/Variants**: `@adn-ui/core`
  - **CSS/Tokens**: `@adn-ui/styles`
  - **Framework Implementation**: `packages/react`, etc.

### Coding Standards
- **Tooling**: Biome is used for linting and formatting via `vp lint` and `vp fmt`.
- **Naming**: Use kebab-case for filenames and BEM-inspired naming for core CSS classes.
- **Accessibility**: All components MUST prioritize accessibility, leveraging Radix UI primitives and following WCAG guidelines.
- **Changesets**: Use `bun changeset` to document changes for versioning and publishing.

### Testing
- **Vitest**: Preferred testing framework.
- **Browser Testing**: `vitest-browser-react` is used for React component testing to ensure accurate rendering and interaction checks.
