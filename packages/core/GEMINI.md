# @adn-ui/core

Shared styling variants and logic for the **adn-ui** design system, built with [Tailwind Variants](https://www.tailwind-variants.org/).

## Project Overview

This package serves as the "single source of truth" for component styles across different framework implementations (React, Svelte, Vue) within the `adn-ui` ecosystem. It uses a framework-agnostic approach by providing TypeScript-based class generation logic.

### Key Technologies

- **Tailwind Variants (`tv`)**: Core engine for managing component variants and slots.
- **Tailwind Merge**: Utility for merging Tailwind CSS classes without conflicts.
- **TypeScript**: Provides full type safety and autocompletion for variants.
- **Vite Plus & tsdown**: Used for bundling and generating type declarations (DTS).

## Project Structure

- `src/*.variants.ts`: Individual styling definitions for each component.
- `src/index.ts`: Central export point for all variants and types.
- `src/utils.ts`: Shared utility functions, including the `cn` (class name) helper.
- `tsdown.config.ts` & `vite.config.ts`: Build and bundling configurations.

## Building and Running

The project uses `bun` as the primary task runner.

- **Development (Watch Mode):**
  ```bash
  bun run dev
  ```
- **Production Build:**
  ```bash
  bun run build
  ```
- **Testing:**
  No explicit test suite found in the current directory. (TODO: Add tests for variant generation).

## Development Conventions

### File Naming

Follow the kebab-case naming convention for variant files: `[component-name].variants.ts`.

### Export Patterns

Each variant file should export:

1.  A constant named `[componentName]Variants` using the `tv` function.
2.  A type named `[ComponentName]Variants` using `VariantProps<typeof ...>`.

Example (`src/button.variants.ts`):

```ts
import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "button",
  // ...
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
```

### Class Naming Strategy

The library uses a BEM-like class naming convention for its variants and slots:

- **Base/Root:** `component-name` (e.g., `button`, `accordion`)
- **Slots:** `component-name__slot-name` (e.g., `accordion__trigger`)
- **Variants:** `component-name--variant-name` (e.g., `button--primary`, `button--sm`)

### Using Slots

For complex components, use the `slots` API provided by `tailwind-variants` to ensure consistent styling across multiple internal elements.

Example (`src/accordion.variants.ts`):

```ts
export const accordionVariants = tv({
  slots: {
    root: "accordion",
    item: "accordion__item",
    trigger: "accordion__trigger",
    // ...
  },
});
```
