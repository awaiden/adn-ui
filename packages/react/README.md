# @adn-ui/react

[![npm](https://img.shields.io/npm/v/@adn-ui/react)](https://www.npmjs.com/package/@adn-ui/react)
[![GitHub](https://img.shields.io/github/license/awaiden/adn-ui)](https://github.com/awaiden/adn-ui/blob/main/LICENSE)

The core component library for **adn-ui** — accessible, themeable React components built on [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS v4](https://tailwindcss.com).

## Installation

```bash
npm install @adn-ui/react
# or
bun add @adn-ui/react
```

## Setup

Import the stylesheet in your app entry point:

```tsx
import "@adn-ui/react/styles";
```

## Usage

```tsx
import { Button, Dialog, Accordion } from "@adn-ui/react";

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}
```

## Components

30+ components across several categories:

- **Layout** — Surface, Group, Separator, AspectRatio, ScrollArea
- **Forms** — Button, Input, Textarea, Checkbox, RadioGroup, Select, Slider, Switch, Label, Field
- **Feedback** — Alert, Badge, Progress, Skeleton, Tooltip
- **Overlay** — Dialog, AlertDialog, Drawer, Popover, DropdownMenu, ContextMenu
- **Navigation** — Accordion, Breadcrumb, Tabs, Collapsible
- **Data Display** — Avatar, Card, Table, Toggle

## Theming

Override CSS custom properties to customize the look:

```css
:root {
  --primary: oklch(55% 0.25 150);
  --radius: 8px;
}
```

Supports light/dark mode via `.dark` class on `<html>`.

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

## Exports

| Export                 | Description                   |
| ---------------------- | ----------------------------- |
| `@adn-ui/react`        | All component exports         |
| `@adn-ui/react/styles` | Component CSS + default theme |

## Peer Dependencies

- `react` >= 19.0.0
- `react-dom` >= 19.0.0
- `tailwindcss` >= 4.0.0

## Author

**awaiden** — [github.com/awaiden](https://github.com/awaiden)

## License

[MIT](../../LICENSE)
