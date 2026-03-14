# adn-ui

[![GitHub](https://img.shields.io/github/license/awaiden/adn-ui)](https://github.com/awaiden/adn-ui/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@adn-ui/react)](https://www.npmjs.com/package/@adn-ui/react)

A modern, accessible, and cross-framework UI library built with [Radix UI](https://www.radix-ui.com/) (React), [Bits UI](https://bits-ui.com/) (Svelte), [Reka UI](https://reka-ui.com/) (Vue), [Tailwind CSS v4](https://tailwindcss.com), and [Tailwind Variants](https://www.tailwind-variants.org/).

## Features

- **Framework Agnostic Styles** — Shared variants and design tokens in `@adn-ui/core` and `@adn-ui/styles`.
- **Accessible** — Built on industry-standard primitives (Radix, Bits, Reka), WCAG compliant.
- **Themeable** — OKLCH design tokens with native Tailwind v4 support.
- **Composable** — Consistent compound component APIs across all frameworks.
- **Type-safe** — First-class TypeScript support.

## Packages

| Package | Description | Status |
| :--- | :--- | :--- |
| [`@adn-ui/react`](./packages/react) | React 19 components (Radix UI) | [![npm](https://img.shields.io/npm/v/@adn-ui/react)](https://www.npmjs.com/package/@adn-ui/react) |
| [`@adn-ui/svelte`](./packages/svelte) | Svelte 5 components (Bits UI) | [![npm](https://img.shields.io/npm/v/@adn-ui/svelte)](https://www.npmjs.com/package/@adn-ui/svelte) |
| [`@adn-ui/vue`](./packages/vue) | Vue 3 components (Reka UI) | [![npm](https://img.shields.io/npm/v/@adn-ui/vue)](https://www.npmjs.com/package/@adn-ui/vue) |
| [`@adn-ui/core`](./packages/core) | Shared styling variants and logic | [![npm](https://img.shields.io/npm/v/@adn-ui/core)](https://www.npmjs.com/package/@adn-ui/core) |
| [`@adn-ui/styles`](./packages/styles) | Core CSS, tokens, and Tailwind config | [![npm](https://img.shields.io/npm/v/@adn-ui/styles)](https://www.npmjs.com/package/@adn-ui/styles) |

## Quick Start (React)

```bash
# Install the library
npm install @adn-ui/react
```

```tsx
import "@adn-ui/react/styles";
import { Button } from "@adn-ui/react";

function App() {
  return <Button variant="primary">Get Started</Button>;
}
```

## Development

This monorepo uses [Bun](https://bun.sh) and [Turborepo](https://turbo.build).

```bash
# Install dependencies
bun install

# Start dev mode (all workspaces)
bun dev

# Build all workspaces
bun run build

# Lint & format
bun check
```

### Framework-specific Development

Each framework package has its own Storybook for component development:

- **React:** `cd packages/react && bun run storybook`
- **Svelte:** `cd packages/svelte && bun run storybook`
- **Vue:** `cd packages/vue && bun run storybook`

## License

[MIT](./LICENSE)
