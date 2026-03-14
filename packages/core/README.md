# @adn-ui/core

[![npm](https://img.shields.io/npm/v/@adn-ui/core)](https://www.npmjs.com/package/@adn-ui/core)
[![GitHub](https://img.shields.io/github/license/awaiden/adn-ui)](https://github.com/awaiden/adn-ui/blob/main/LICENSE)

Shared styling variants and logic for the **adn-ui** design system, built with [Tailwind Variants](https://www.tailwind-variants.org/).

This package is the "single source of truth" for component styles across React, Svelte, and Vue implementations.

## Features

- **Framework Agnostic** — Pure TypeScript logic for class generation.
- **Composable** — Slots-based API for complex component styling.
- **Type-safe** — Autocomplete for all variants and slots.
- **Performance** — Zero-runtime impact when used with Tailwind CSS v4.

## Installation

```bash
npm install @adn-ui/core
# or
bun add @adn-ui/core
```

## Usage

```ts
import { button } from "@adn-ui/core";

const classes = button({
  variant: "primary",
  size: "md",
  className: "extra-class"
});
```

## Development

```bash
# Build (watch mode)
bun run dev

# Production build
bun run build
```

## License

[MIT](../../LICENSE)
