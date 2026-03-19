# @adn-ui/styles | Gemini Context

This directory contains the core CSS, design tokens, and Tailwind CSS v4 configuration for the **adn-ui** design system.

## Project Overview

- **Purpose:** Central repository for styles, theming, and component-specific CSS.
- **Main Technologies:**
  - [Tailwind CSS v4](https://tailwindcss.com) (using modern `@theme` and `@layer` syntax).
  - [OKLCH Color Space](https://oklch.com) for perceptual uniformity across themes.
  - [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) for deep, runtime-swappable theming.
  - [PostCSS](https://postcss.org/) for CSS transformations.
- **Architecture:**
  - `src/index.css`: The primary entry point that orchestrates layers, themes, and component styles.
  - `src/themes/`: Root-level CSS variable definitions (e.g., `default.css`) with `@theme inline` for Tailwind integration.
  - `src/components/`: Modular, component-specific CSS files (e.g., `button.css`, `card.css`) using a BEM-inspired naming convention.

## Building and Running

This package is part of a monorepo. Build and development commands are typically managed at the root level or via `bun`.

- **Build:** `TODO: Specify build command (e.g., bun build)`
- **Dev/Watch:** `TODO: Specify watch command`
- **Installation:**
  ```bash
  bun add @adn-ui/styles
  ```

## Development Conventions

### CSS & Styling

- **Tailwind v4 First:** Prefer using Tailwind utilities via `@apply` within component CSS files to maintain consistency.
- **Naming Convention:** Use a BEM-like pattern for component classes:
  - Base: `.button`
  - Variant: `.button--primary`, `.button--sm`
  - State: `.button:disabled`, `.button--active`
- **Theming:**
  - Define new design tokens in `src/themes/default.css` using CSS variables.
  - Map variables to Tailwind utilities using the `@theme inline` block.
  - Support dark mode using the `.dark` class selector and variable overrides.
- **Colors:** Always use `oklch()` for color definitions to ensure better color accessibility and perceptual uniformity.
- **Layering:** Organize styles into `@layer base`, `@layer components`, and `@layer utilities` to maintain proper CSS specificity.

### Component Structure

- Each UI component should have its own `.css` file in `src/components/`.
- New component styles must be imported into `src/components/index.css`.

## Key Files

- `src/index.css`: Orchestration of all styles and Tailwind configuration.
- `src/themes/default.css`: Primary design token definitions and Tailwind theme mapping.
- `src/components/index.css`: Aggregate import file for all component-specific styles.
- `package.json`: Package metadata and dependencies (Tailwind v4, tailwindcss-animate).
