# adn-ui

> A high-quality, unstyled React UI component library built on [@base-ui/react](https://base-ui.com) primitives and styled with **Tailwind CSS v4**.

Created & maintained by **Halil Aydın** ([@awaiden](https://github.com/awaiden)).

[![GitHub Repo](https://img.shields.io/badge/GitHub-awaiden%2Fadn--ui-blue?logo=github)](https://github.com/awaiden/adn-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Base UI](https://img.shields.io/badge/Base_UI-%40base--ui%2Freact-purple)](https://base-ui.com)

---

## ✨ Features

- ⚡ **Base UI Primitives**: Full W3C ARIA compliance, focus trapping, and keyboard navigation powered by `@base-ui/react`.
- 🎨 **Tailwind CSS v4 Native**: Configured with modern `@theme` design tokens and seamless dark mode support.
- 📱 **Multi-Directional Touch Gestures**: Drawers with swipe-to-dismiss gesture handling for all screen edges (`bottom`, `right`, `left`, `top`).
- 🤖 **AI-Friendly JSDoc Docs**: Every component includes JSDoc `@see` annotations (e.g. `@see https://ui.awaiden.com/llms.mdx/docs/components/button/content.md`) linking directly to markdown docs for AI coding assistants.
- 🧩 **Zero Lock-In**: Copy, paste, and customize components directly inside your project under `src/components/ui`.
- 📦 **Registry CLI Integration**: Built-in `shadcn` compatible registry generator (`bun run build:registry`).

---

## 🏗️ Why adn-ui? Modular Architecture

Unlike standard UI registries that bundle JSX rendering, CVA variant definitions, and animation styles into a single monolithic file, **adn-ui** uses a **Modular System**. Every component is cleanly split into specialized modules:

```
src/components/ui/card/
├── card.tsx           # 🧠 Logic: React structure & primitive component binding
├── card.variants.ts   # 🎨 Variants: Slot-based Tailwind Variant specifications
├── card.css          # 💅 Styles: CSS variables, transitions & utility rules
├── card.context.ts   # 🔗 Context: Shared slot context across card sub-components
└── index.ts            # 📦 Exports: Clean public API and TypeScript types
```

### Key Benefits:

- **Effortless Customization**: Tweak styling or add new variants in `*.variants.ts` or `*.css` without risking breaking component logic or accessibility attributes.
- **Clean Separation of Concerns**: Keeps rendering logic isolated from design tokens and slots.
- **AI-Friendly & LLM Ready**: JSDoc `@see` annotations point AI coding assistants (Antigravity, Cursor, Copilot) directly to raw component markdown docs.
- **Maintainable & Scalable**: Swap styles, add theme slots, or extend component logic independently as your application grows.

---

## 🚀 Getting Started

### Installation

Clone the repository and install dependencies using [Bun](https://bun.sh):

```bash
git clone https://github.com/awaiden/adn-ui.git
cd adn-ui
bun install
```

### Development Server

Run the Next.js development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the interactive landing page and documentation.

### ⚠️ Mandatory Setup for Tailwind CSS v4 CSS Files

Because `adn-ui` components utilize dedicated `.css` files with `@apply` rules, standalone CSS files in Tailwind CSS v4 require a reference to your global CSS entry file.

**Without auto-referencing plugins, PostCSS will throw errors such as:**

> `Unknown directive @apply` or `Cannot find utility class... (did you forget @reference?)`

Ensure your project config includes auto-referencing:

#### Next.js (`postcss.config.mjs`)

```js
const config = {
  plugins: {
    "postcss-tw-auto-reference": {
      globalCssPath: "app/globals.css",
    },
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

#### Vite (`vite.config.ts`)

```ts
import { defineConfig } from "vite";
import tailwindAutoReference from "vite-plugin-tw-auto-reference";

export default defineConfig({
  plugins: [
    tailwindAutoReference({
      globalCssPath: "src/styles.css",
    }),
  ],
});
```

---

## 🛠️ Scripts & Commands

| Command                  | Description                                       |
| :----------------------- | :------------------------------------------------ |
| `bun dev`                | Starts the Next.js development server.            |
| `bun run build`          | Builds the production Next.js application.        |
| `bun run build:registry` | Builds the component registry via `shadcn build`. |
| `bun run types:check`    | Validates TypeScript types across the codebase.   |
| `bun run lint`           | Runs `oxlint` for fast linter checks.             |
| `bun run prepare`        | Configures Husky pre-commit hooks.                |

---

## 🧩 Component Library

`adn-ui` includes 35+ accessible components located in `src/components/ui/`:

- **Accordion**
- **Alert Dialog**
- **Autocomplete**
- **Avatar**
- **Badge**
- **Breadcrumb**
- **Button**
- **Card**
- **Checkbox & Checkbox Group**
- **Collapsible**
- **Combobox**
- **Context Menu**
- **Dialog & Overlay**
- **Drawer** _(Multi-directional swipe gestures)_
- **Field & Fieldset**
- **Form**
- **Input & Number Field**
- **Menu & Popover**
- **Progress**
- **Radio & Radio Group**
- **Scroll Area**
- **Select**
- **Separator**
- **Slider**
- **Switch**
- **Table**
- **Tabs**
- **Textarea**
- **Toggle & Toggle Group**
- **Tooltip**

---

## 👤 Author

**Halil Aydın**

- GitHub: [@awaiden](https://github.com/awaiden)
- Repository: [awaiden/adn-ui](https://github.com/awaiden/adn-ui)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
