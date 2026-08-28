# AGENTS.md

> Autonomous AI Agent Guide for **adn-ui** — High-quality React 19 UI component library built with `@base-ui/react` primitives and Tailwind CSS v4.

---

## 📌 Project Overview

**adn-ui** is an open-source, framework-agnostic collection of accessible, copy-and-paste UI components built for **React 19**, styled using **Tailwind CSS v4** and OKLCH color design tokens.

- **Primitives**: `@base-ui/react` (W3C ARIA accessible primitives)
- **Styling**: Tailwind CSS v4 & OKLCH design tokens
- **Variants**: `tailwind-variants` (`tv()`)
- **Icons**: `lucide-react` (Strict rule: NO inline `<svg>` elements in components)
- **Documentation**: Fumadocs (`content/docs/`) & MDX
- **Registry**: `shadcn` CLI compatible JSON registry (`public/r/`)
- **MCP Server**: Built-in Model Context Protocol server at `src/app/api/mcp/[transport]/route.ts`

---

## 🏗️ Architecture & Component Directory Structure

Every component in `src/components/ui/` follows a strict **Modular Single-File Slots** pattern:

```
src/components/ui/<component-name>/
├── <component-name>.tsx           # Component logic & Base UI primitive bindings
├── <component-name>.variants.ts   # Slot-based Tailwind Variant specifications (tv())
├── <component-name>.css          # CSS utility classes & Tailwind v4 @apply rules
├── <component-name>.context.ts   # React context for sharing slots across sub-components
├── <component-name>.test.tsx     # Vitest unit tests
├── <component-name>.stories.tsx  # Storybook stories (if applicable)
├── <component-name>-demo.tsx     # Demo component implementation
└── index.ts                      # Public API exports & TypeScript types
```

### Registry Manifests
Corresponding JSON registry manifests are maintained under:
`public/r/<component-name>.json`

---

## 🤖 Model Context Protocol (MCP) Server

**adn-ui** provides a built-in MCP server at `/api/mcp/[transport]` powered by `@modelcontextprotocol/sdk` and `mcp-handler`.

- **Route File**: `src/app/api/mcp/[transport]/route.ts`
- **SSE Endpoint**: `https://ui.awaiden.com/api/mcp/sse` (or `http://localhost:3000/api/mcp/sse` in dev)

### MCP Tools Available
1. `list_components`: List all available UI components and their file structures.
2. `get_component`: Retrieve full source code, CSS, and variants for a specified component.
3. `search_components`: Search components by name or keyword.
4. `get_component_doc`: Fetch component MDX documentation.
5. `get_registry_item`: Fetch the `shadcn` JSON registry manifest.

---

## 📐 Coding & Style Standards for Agents

### 1. Icon Rules
- **ALWAYS** use `lucide-react` icons (e.g., `ChevronDown`, `ChevronsUpDown`, `Check`, `Search`, `X`).
- **NEVER** write raw inline `<svg>` markup inside components or demo files.
- **NO Tailwind utility classes in TSX files for icons/SVGs**: Never pass `className="h-4 w-4 ..."` directly onto icon components inside `.tsx` files. Instead, style icons via CSS selectors in `*.css` files (e.g., `.checkbox__indicator svg`, `.accordion__trigger svg`, `.select__icon svg`).

### 2. JSDoc `@see` Annotations
Every component's `index.ts` MUST include a JSDoc `@see` annotation linking to its raw MDX documentation:

```typescript
/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/<component-name>/content.md
 */
export const Component = ...
```

### 3. Component Architecture & Variants
- Use `tailwind-variants` (`tv()`) for slot definitions and variants.
- Keep slot names consistent (`root`, `label`, `control`, `trigger`, `item`, `description`, `error`).
- Use `@apply` rules in `*.css` files for styling slots.

---

## ⚙️ Development Commands & Verification Workflow

Agents MUST run verification commands after making any codebase changes:

| Action | Command | Purpose |
| :--- | :--- | :--- |
| **Run Unit Tests** | `npm test` | Runs all Vitest unit tests in `src/**/*.test.{ts,tsx}`. |
| **TypeScript Check** | `npm run types:check` | Runs `next typegen && tsc --noEmit` to verify type safety. |
| **Build Registry** | `npm run build:registry` | Regenerates registry manifests (`npx shadcn build`). |
| **Linting** | `npm run lint` | Runs `oxlint` for fast static code analysis. |
| **Formatting** | `npm run format` | Formats code via `oxfmt`. |

---

## 📋 Checklist for AI Agents Before Completing Tasks

- [ ] Ensure all icon dependencies use `lucide-react` components (no `<svg>`).
- [ ] Maintain modular file structure (`.tsx`, `.variants.ts`, `.css`, `.context.ts`, `index.ts`).
- [ ] Include JSDoc `@see` annotation in `index.ts`.
- [ ] Update `public/r/<component-name>.json` if component files were added or modified.
- [ ] Update `content/docs/getting-started/meta.json` or `content/docs/components/meta.json` if new doc pages are created.
- [ ] Run `npm run types:check` and confirm 0 TypeScript errors.
- [ ] Run `npm test` and confirm 100% passing tests.
