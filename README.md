# adn-ui

[![GitHub](https://img.shields.io/github/license/awaiden/adn-ui)](https://github.com/awaiden/adn-ui/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/@adn-ui/react)](https://www.npmjs.com/package/@adn-ui/react)

A modern, accessible React UI library built with [Radix UI](https://www.radix-ui.com/), [Tailwind CSS v4](https://tailwindcss.com), and [Tailwind Variants](https://www.tailwind-variants.org/).

## Features

- **Accessible** — Built on Radix UI primitives, WCAG compliant
- **Themeable** — OKLCH design tokens with light/dark mode
- **Composable** — Compound component APIs for full layout control
- **Type-safe** — Full TypeScript declarations
- **30+ Components** — Buttons, dialogs, forms, navigation, and more

## Quick Start

```bash
# Install the library
npm install @adn-ui/react

# Import styles in your entry point
import "@adn-ui/react/styles";
```

```tsx
import { Button } from "@adn-ui/react";

function App() {
  return <Button variant="primary">Get Started</Button>;
}
```

## Monorepo Structure

| Workspace        | Description                                 |
| ---------------- | ------------------------------------------- |
| `packages/react` | Core UI component library (`@adn-ui/react`) |
| `apps/docs`      | Documentation site (Astro Starlight)        |

## Development

```bash
# Install dependencies
bun install

# Start dev mode (all workspaces)
bun dev

# Build all workspaces
bun build

# Lint & format
bun check

# Auto-fix lint issues
bun check:fix
```

### Package-specific

```bash
# Storybook (component dev)
cd packages/react && bun run storybook

# Run tests
cd packages/react && bun run test

# Docs dev server
cd apps/docs && bun run dev
```

## Tech Stack

- **Runtime:** [Bun](https://bun.sh)
- **Framework:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + [Tailwind Variants](https://www.tailwind-variants.org/)
- **Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Build:** [Vite](https://vite.dev) + [Turborepo](https://turbo.build)
- **Linting:** [Biome](https://biomejs.dev)
- **Testing:** [Vitest](https://vitest.dev) + Playwright
- **Docs:** [Astro Starlight](https://starlight.astro.build/)

## Author

**awaiden** — [github.com/awaiden](https://github.com/awaiden)

## License

[MIT](./LICENSE)
