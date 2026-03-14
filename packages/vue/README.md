# @adn-ui/vue

[![npm](https://img.shields.io/npm/v/@adn-ui/vue)](https://www.npmjs.com/package/@adn-ui/vue)
[![GitHub](https://img.shields.io/github/license/awaiden/adn-ui)](https://github.com/awaiden/adn-ui/blob/main/LICENSE)

The Vue implementation of the **adn-ui** design system — accessible, themeable components built with [Vue 3](https://vuejs.org/) and [Reka UI](https://reka-ui.com/).

## Features

- **Vue 3 Composition API** — Lightweight and performant.
- **Accessible** — Built on Reka UI primitives.
- **Themeable** — Native Tailwind v4 support.
- **Consistent** — Matches the React and Svelte implementation APIs.

## Installation

```bash
npm install @adn-ui/vue
# or
bun add @adn-ui/vue
```

## Setup

Import the styles in your main entry file (`main.ts` or `App.vue`):

```ts
import "@adn-ui/vue/styles";
```

## Usage

```vue
<script setup>
import { Button } from "@adn-ui/vue";
</script>

<template>
  <Button variant="primary">Click me</Button>
</template>
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
bun run test
```

## License

[MIT](../../LICENSE)
