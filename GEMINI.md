# adn-ui | Gemini Context

This is the root directory of the **adn-ui** monorepo, a modern, accessible, and cross-framework UI library.

## Project Overview

- **Purpose:** A unified design system providing consistent, high-quality UI components for React, Svelte, and Vue.
- **Core Architecture:**
  - **@adn-ui/styles:** Design tokens, OKLCH color definitions, and Tailwind CSS v4 configuration.
  - **@adn-ui/core:** Framework-agnostic styling variants and logic powered by [Tailwind Variants](https://www.tailwind-variants.org/).
  - **@adn-ui/react:** React 19 implementations built on [Radix UI](https://www.radix-ui.com/).
  - **@adn-ui/svelte:** Svelte 5 implementations built on [Bits UI](https://bits-ui.com/).
  - **@adn-ui/vue:** Vue 3 implementations built on [Reka UI](https://reka-ui.com/).
  - **apps/docs:** Documentation site built with [Astro Starlight](https://starlight.astro.build/).
- **Main Technologies:** [Bun](https://bun.sh), [Turborepo](https://turbo.build), [Vite Plus](https://github.com/vite-plus/vite-plus), [Tailwind CSS v4](https://tailwindcss.com), [TypeScript](https://www.typescriptlang.org/).

## Building and Running

The project uses **Bun** as the primary package manager and task runner, with **Turborepo** for orchestration.

| Command       | Action                                                   |
| :------------ | :------------------------------------------------------- |
| `bun install` | Installs all dependencies across the monorepo.           |
| `bun dev`     | Starts development mode for all workspaces (watch mode). |
| `bun build`   | Builds all packages and apps in the correct order.       |
| `bun test`    | Runs the test suites across all packages.                |
| `bun lint`    | Runs linting via `vite-plus` across the project.         |
| `bun fmt`     | Formats the codebase via `vite-plus`.                    |

## Development Conventions

### Monorepo Management

- **Workspaces:** Organized into `packages/*` (libraries) and `apps/*` (documentation, examples).
- **Build Pipeline:** Managed via `turbo.json`. Task dependencies (e.g., `build` depending on `^build`) ensure that shared packages like `@adn-ui/core` and `@adn-ui/styles` are built before consumer packages.
- **Tooling:** Uses `vite-plus` (`vp`) for linting, formatting, and building.

### Component Design

- **Variants-First:** All styling logic is centralized in `@adn-ui/core` using `tailwind-variants`. This ensures visual consistency across frameworks.
- **BEM-ish Naming:** Follows a consistent BEM-like naming convention for CSS classes and variant slots (e.g., `button`, `button--primary`, `button__icon`).
- **Compound Components:** Favors the compound component pattern (e.g., `Accordion.Root`, `Accordion.Item`) for maximum flexibility.

### Releases

- Uses [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs.
- Run `bun changeset` to document a change before committing.

## Key Files

- `package.json`: Monorepo workspaces and global scripts.
- `turbo.json`: Turborepo task configuration.
- `bun.lock`: Bun lockfile (do not modify manually).
- `README.md`: High-level public documentation.
- `GEMINI.md`: (This file) Instructional context for AI agents.
- `packages/*/GEMINI.md`: Package-specific instructions and patterns.
