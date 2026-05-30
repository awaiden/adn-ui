# adn-ui

A shadcn registry of accessible React components built with Radix UI primitives, Tailwind CSS v4, and tailwind-variants.

## Why adn-ui over shadcn/ui?

shadcn/ui is great for getting started, but adn-ui solves the problems you hit as you scale:

| | shadcn/ui | adn-ui |
|---|---|---|
| **Styling** | Inline utility strings in JSX | BEM-style CSS classes — components stay readable, styles stay in `.css` files |
| **Variants** | `cva` with flat string arrays | `tailwind-variants` with typed slots — compound components get per-slot variant control |
| **Compound components** | Flat exports, manual class threading | Context-based slot system — child components inherit styles from root automatically |
| **CSS architecture** | Utilities baked into components | Separated concerns — override a class in CSS without touching component code |
| **Color system** | HSL custom properties | oklch custom properties — perceptually uniform, wider gamut |
| **Customization** | Copy-paste then modify inline classes | Override BEM classes in your own CSS layer or swap variant definitions |
| **Bundle** | Every utility string ships in JS | Styles extract to CSS — smaller JS bundles, cacheable stylesheets |

adn-ui is still a shadcn registry — you install components the same way (`npx shadcn@latest add @adn/button`). You get the same copy-paste ownership model with a cleaner architecture underneath.

## Features

- Built on [Radix UI](https://radix-ui.com) primitives for accessibility and behavior
- Styled with [Tailwind CSS v4](https://tailwindcss.com) using BEM-style CSS selectors
- Variant logic powered by [tailwind-variants](https://www.tailwind-variants.org)
- Dark mode support via CSS custom properties (oklch color space)
- Storybook for component documentation and visual testing

## Components

Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button, Card, Checkbox, Collapsible, Context Menu, Dialog, Dropdown Menu, Form, Hover Card, Input, Label, Menubar, Navigation Menu, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Sheet, Skeleton, Slider, Switch, Table, Tabs, Textarea, Toggle, Toggle Group, Toolbar, Tooltip.

## Getting Started

```bash
bun install
bun run dev
```

## Development

```bash
# Dev server with HMR
bun run dev

# Storybook
bun run storybook

# Lint
bun run lint

# Type check
npx tsc -b

# Storybook tests (browser-based via Playwright)
npx vitest --project=storybook
```

## Usage as a Registry

This project is a [shadcn registry](https://ui.shadcn.com/docs/registry). Add the registry to your project's `components.json`:

```json
{
  "registries": {
    "@adn": "https://awaiden.github.io/adn-ui/r/{name}.json"
  }
}
```

Then install components using the `@adn` prefix:

```bash
npx shadcn@latest add @adn/button
npx shadcn@latest add @adn/card
npx shadcn@latest add @adn/table
```

## License

MIT
