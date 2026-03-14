# @adn-ui/react - Gemini CLI Context

This project is the React implementation of the `adn-ui` design system. It provides accessible, themeable UI components built on top of **Radix UI** primitives and styled using **Tailwind CSS v4** and **Tailwind Variants**.

## Project Overview

- **Framework**: React (v19)
- **Primitives**: [Radix UI](https://www.radix-ui.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com), [Tailwind Variants](https://www.tailwind-variants.org/)
- **Build Tool**: `tsdown` (for ESM/CJS bundling)
- **Testing**: [Vitest](https://vitest.dev) (Browser Mode with Playwright Chromium)
- **Documentation**: [Storybook](https://storybook.js.org/)

### Architecture

The components follow a **"variants-first" compound component pattern**.
1.  **Variants**: Styling logic is imported from `@adn-ui/core`.
2.  **Context**: Compound components often use a React Context (e.g., `AccordionContext`) to share variant "slots" from the root component to its sub-components.
3.  **Composition**: Components are exported both as a compound object (e.g., `Accordion.Root`, `Accordion.Item`) and as named aliases (e.g., `AccordionRoot`, `AccordionItem`) in each component's `index.ts`.

## Key Commands

All commands should be run using `bun` from the package root or the monorepo root (prefixed with `turbo`).

| Command | Description |
| :--- | :--- |
| `bun run build` | Build the package (ESM, CJS, and types) using `tsdown` |
| `bun run dev` | Run `tsdown` in watch mode |
| `bun run test` | Run Vitest tests in Browser Mode (Playwright Chromium) |
| `bun run storybook` | Start Storybook development server on port 6008 |
| `bun run build-storybook` | Build the static Storybook site |

## Development Conventions

### Component Implementation

- **Directory Structure**: `src/components/[component-name]/`
- **Naming**: Use kebab-case for all files and directories (e.g., `accordion-root.tsx`).
- **Functional Components**: Use functional components with TypeScript.
- **Prop Types**: Prefer `React.ComponentProps<typeof RadixPrimitive>` or `React.ComponentProps<"element">` for base types.
- **Styling**:
  - Use `cn` from `tailwind-variants` for class merging.
  - Apply variant slots from `@adn-ui/core` via a local context for compound components.
  - Ensure `data-slot` attributes are added to key elements for easy targeting in tests.
- **Exports**: `index.ts` must export a compound object and named aliases for all sub-components.

### Testing Standards

- **File Naming**: `[component-name].spec.tsx`
- **Runner**: Vitest Browser Mode.
- **Assertions**: Use `vitest-browser-react`'s `render` and `expect.element(...)`.
- **Coverage**:
  - Verify base classes and slot classes (e.g., `.alert`, `.alert__title`).
  - Verify variant classes (e.g., `.alert--destructive`).
  - Verify prop forwarding (`className`, `data-` attributes).
  - Verify accessibility (roles, ARIA attributes).

### Documentation (Storybook)

- **File Naming**: `[component-name].stories.tsx`
- **Organization**: Group stories under semantic categories (e.g., `Components/Accordion`).
- **Controls**: Use Storybook controls to demonstrate all variants and key props.
