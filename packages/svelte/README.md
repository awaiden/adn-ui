# @adn-ui/svelte

[![npm](https://img.shields.io/npm/v/@adn-ui/svelte)](https://www.npmjs.com/package/@adn-ui/svelte)
[![GitHub](https://img.shields.io/github/license/awaiden/adn-ui)](https://github.com/awaiden/adn-ui/blob/main/LICENSE)

The Svelte implementation of the **adn-ui** design system — accessible, themeable components built with [Svelte 5](https://svelte.dev/) and [Bits UI](https://bits-ui.com/).

## Features

- **Svelte 5 Runes** — Modern reactivity API.
- **Accessible** — Built on Bits UI primitives.
- **Themeable** — Native Tailwind v4 support.
- **Consistent** — Matches the React and Vue implementation APIs.

## Installation

```bash
npm install @adn-ui/svelte
# or
bun add @adn-ui/svelte
```

## Setup

Import the styles in your root `+layout.svelte`:

```svelte
<script>
  import "@adn-ui/svelte/styles";
</script>

{@render children()}
```

## Usage

```svelte
<script>
  import { Button } from "@adn-ui/svelte";
</script>

<Button variant="primary">Click me</Button>
```

## Development

```bash
# Build (watch mode)
bun run dev

# Production build
bun run build

# Storybook
bun run storybook

# Tests
bun run test:unit
```

## License

[MIT](../../LICENSE)
