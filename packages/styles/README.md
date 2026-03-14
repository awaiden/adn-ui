# @adn-ui/styles

[![npm](https://img.shields.io/npm/v/@adn-ui/styles)](https://www.npmjs.com/package/@adn-ui/styles)
[![GitHub](https://img.shields.io/github/license/awaiden/adn-ui)](https://github.com/awaiden/adn-ui/blob/main/LICENSE)

Core CSS, design tokens, and [Tailwind CSS v4](https://tailwindcss.com) configuration for the **adn-ui** design system.

## Features

- **Tailwind v4 First** — Native integration with the latest Tailwind engine.
- **OKLCH Colors** — Modern, perceptually uniform color space.
- **Semantic Tokens** — Shared design tokens across all implementations.
- **Performance** — Minimal runtime overhead.

## Installation

```bash
npm install @adn-ui/styles
# or
bun add @adn-ui/styles
```

## Usage

Import the main stylesheet in your app entry point:

```css
@import "@adn-ui/styles";
```

Or in your JS/TS entry point:

```ts
import "@adn-ui/styles";
```

## Theming

Override design tokens via CSS custom properties:

```css
:root {
  --primary: oklch(55% 0.25 150);
  --radius: 0.5rem;
}
```

## License

[MIT](../../LICENSE)
