# @adn-ui/svelte - Project Context

This is the Svelte implementation of the `adn-ui` design system. It is built using **Svelte 5** and **Bits UI** for accessible primitives, with styling managed by `@adn-ui/core` (Tailwind Variants).

## Project Overview

- **Purpose**: A modern, accessible UI library for Svelte applications.
- **Core Technologies**: Svelte 5, Bits UI, Tailwind CSS v4, Tailwind Variants, Bun.
- **Styling**: Leverages `@adn-ui/core` for centralized style definitions and `cn` utility.
- **Bundling**: Uses `tsdown` for distributing the package.

## Architecture & Conventions

### "Variants-First" Compound Components
Components follow a strict compound pattern to maintain consistency across the monorepo:
1. **Directory Structure**: `src/lib/components/[name]/`.
2. **Naming**: Kebab-case for all `.svelte` files (e.g., `accordion-item.svelte`).
3. **Context**: Each component uses a `[name].context.ts` with Svelte 5's `createContext<T>()` to share slots and variant states between sub-components.
4. **Exports**: `index.ts` must export a compound object (e.g., `Accordion.Root`) and named aliases (e.g., `AccordionRoot`).

### Implementation Details
- **Primitives**: Always prefer `bits-ui` for accessibility logic.
- **State**: Use Svelte 5 runes (`$state`, `$derived`, `$props`, `$bindable`).
- **Styles**: Initialize variants in the `Root` component and pass them down via context. Use `cn` from `@adn-ui/core` for merging classes.
- **Snippets**: Use `{@render children?.()}` for child content.

## Key Commands

| Command | Description |
| :--- | :--- |
| `bun dev` | Start `tsdown` in watch mode for development |
| `bun run build` | Build the package for distribution |
| `bun test:unit` | Run component tests with Vitest (Browser Mode) |
| `bun run storybook` | Launch Storybook for local component development |
| `bun run test:e2e` | Run Playwright E2E tests |

## Testing Strategy

- **Component Tests**: Located in `[name].svelte.spec.ts`. These use Vitest Browser Mode with `vitest-browser-svelte`.
- **Test Helpers**: A `[name]-test.svelte` helper is often used to wrap snippets for browser-based testing.
- **Visual Testing**: Storybook (`[name].stories.svelte`) is used for manual and automated visual verification.

## Public API

The library's public API is managed in `src/lib/index.ts`, which exports all components and utilities. All components are exported as both compound objects and individual named exports.
