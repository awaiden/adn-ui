---
name: adn-ui
description: Comprehensive guide, component architecture standards, development workflows, step-by-step component creation procedures, and MCP server reference for adn-ui shadcn registry development.
---

# adn-ui Autonomous AI Agent Guide & Skill Specification

**adn-ui** is a shadcn-compatible component registry built for **React 19**, styled using **Tailwind CSS v4** and OKLCH color design tokens, powered by **@base-ui/react** W3C ARIA accessible primitives.

---

## Architecture & File Directory Structure

Every component in `src/components/ui/<component-name>/` follows a strict **Modular Single-File Slots** pattern:

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

## Strict Coding & Styling Guidelines

### 1. Icon Rules
- **ALWAYS** use `lucide-react` icons (e.g., `ChevronDown`, `ChevronsUpDown`, `Check`, `Search`, `X`).
- **NEVER** write raw inline `<svg>` markup inside component TSX files or demo files.
- **NO Tailwind utility classes in TSX files for icons/SVGs**:
  - Incorrect: `<Check className="h-4 w-4 text-primary" />`
  - Correct: `<Check />` rendered inside a slot container, styled in `<component-name>.css`:
    ```css
    .select__icon svg,
    .checkbox__indicator svg {
      @apply size-4 shrink-0 transition-transform;
    }
    ```

### 2. JSDoc `@see` Annotations
Every component's `index.ts` MUST include a JSDoc `@see` annotation pointing to its raw MDX documentation:
```typescript
/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/<component-name>/content.md
 */
export const Component = ...
```

### 3. Component Slots & Variants
- Use `tailwind-variants` (`tv()`) for slot definitions and variants.
- Keep slot names consistent (`root`, `label`, `control`, `trigger`, `item`, `description`, `error`).
- Use `@apply` rules in `*.css` files for styling slots.
- Always use `cn()` utility from `@/lib/cn` to merge custom classNames with slot styles.

---

## Step-by-Step Guide: Creating a New Component

When building a new component for `adn-ui`, follow these exact 10 steps:

### Step 1: Create Directory
Create folder `src/components/ui/<component-name>/`.

### Step 2: Context (`<component-name>.context.ts`)
Define React Context to distribute slot function references to child sub-components:
```typescript
import { createContext, useContext } from "react";
import type { ComponentVariants } from "./<component-name>.variants";

type SlotContextValue = {
  slots: ReturnType<typeof componentVariants>;
};

export const ComponentContext = createContext<SlotContextValue | null>(null);

export const useComponentContext = () => {
  const context = useContext(ComponentContext);
  if (!context) {
    throw new Error("Component sub-components must be rendered within ComponentRoot");
  }
  return context;
};
```

### Step 3: Variants (`<component-name>.variants.ts`)
Define slot class names and variant options using `tailwind-variants`:
```typescript
import { tv, type VariantProps } from "tailwind-variants";

export const componentVariants = tv({
  slots: {
    root: "component",
    control: "component__control",
    label: "component__label",
  },
  variants: {
    size: {
      sm: { root: "component--sm" },
      md: { root: "component--md" },
      lg: { root: "component--lg" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type ComponentVariants = VariantProps<typeof componentVariants>;
```

### Step 4: CSS (`<component-name>.css`)
Styling using Tailwind v4 `@apply` directives and `@base-ui/react` state attributes (`data-checked`, `data-disabled`, `data-invalid`, `data-open`):
```css
.component {
  @apply inline-flex items-center gap-2 rounded-md border border-border bg-background p-2 transition-colors;
}

.component--sm { @apply text-xs p-1; }
.component--md { @apply text-sm p-2; }
.component--lg { @apply text-base p-3; }

.component__control {
  @apply focus-visible:outline-ring cursor-pointer rounded select-none;
}

.component__control svg {
  @apply size-4 shrink-0;
}
```

### Step 5: Logic & TSX (`<component-name>.tsx`)
Bind `@base-ui/react` primitives and export compound sub-components:
```typescript
"use client";

import "./<component-name>.css";
import { Primitive as BasePrimitive } from "@base-ui/react/primitive";
import type React from "react";
import { cn } from "@/lib/cn";
import { ComponentContext, useComponentContext } from "./<component-name>.context";
import { componentVariants, type ComponentVariants } from "./<component-name>.variants";

export type ComponentRootProps = ComponentVariants & React.ComponentProps<typeof BasePrimitive.Root>;

export const ComponentRoot = ({ children, className, size, ...props }: ComponentRootProps) => {
  const slots = componentVariants({ size });
  return (
    <ComponentContext.Provider value={{ slots }}>
      <BasePrimitive.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BasePrimitive.Root>
    </ComponentContext.Provider>
  );
};
```

### Step 6: Unit Tests (`<component-name>.test.tsx`)
Write Vitest unit tests covering render, interactions, and ARIA attributes:
```typescript
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ComponentRoot } from "./index";

describe("Component", () => {
  it("renders correctly", () => {
    render(<ComponentRoot>Test Content</ComponentRoot>);
    expect(screen.getByText("Test Content")).toBeDefined();
  });
});
```

### Step 7: Demo (`<component-name>-demo.tsx`)
Create an interactive demo component:
```typescript
import { ComponentRoot } from "./index";

export function ComponentDemo() {
  return <ComponentRoot>Interactive Demo</ComponentRoot>;
}
```

### Step 8: Exports (`index.ts`)
Export all public API elements with `@see` annotation:
```typescript
/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/<component-name>/content.md
 */
export * from "./<component-name>";
export * from "./<component-name>.variants";
```

### Step 9: Build Registry Manifest
Regenerate registry files by running:
```bash
bun run build:registry
```

### Step 10: Documentation
Create `content/docs/components/<component-name>.mdx` and add entry to `content/docs/components/meta.json`.

---

## Development Commands & Verification Workflow

Agents MUST execute verification commands after modifying codebase files:

| Task | Command | Purpose |
| :--- | :--- | :--- |
| **Unit Testing** | `bun run test` | Runs Vitest unit tests in `src/**/*.test.{ts,tsx}`. |
| **Type Check** | `bun run types:check` | Verifies TypeScript types with `tsc --noEmit`. |
| **Build Registry** | `bun run build:registry` | Regenerates registry manifests (`bun x shadcn build`). |
| **Linting** | `bun run lint` | Runs `oxlint` static code analysis. |
| **Formatting** | `bun run format` | Code formatting via `oxfmt`. |

---

## Model Context Protocol (MCP) Server

adn-ui provides a built-in MCP server at `src/app/api/mcp/[transport]/route.ts` offering 7 specialized tools:

1. `init_adn_ui`: Project setup instructions, `components.json` registry config, and PostCSS/Vite setup.
2. `list_components`: List all available components and file structures.
3. `get_component`: Retrieve component source code, CSS, and variant definitions.
4. `search_components`: Search components by keyword or name.
5. `get_component_doc`: Fetch MDX documentation and usage examples.
6. `get_registry_item`: Fetch `shadcn` JSON registry manifest.
7. `add_component`: Get installation command (`npx shadcn@latest add @adn-ui/<name>`), direct URL, manifest, and instructions.

---

## Checklist for AI Agents Before Completing Tasks

- [ ] All icons use `lucide-react` components (NO inline `<svg>`).
- [ ] No inline Tailwind size/color utility classes on icon components in TSX files.
- [ ] Maintained 7-file modular structure (`.tsx`, `.variants.ts`, `.css`, `.context.ts`, `.test.tsx`, `-demo.tsx`, `index.ts`).
- [ ] Included JSDoc `@see` annotation in `index.ts`.
- [ ] Updated `public/r/<component-name>.json` via `bun run build:registry`.
- [ ] Verified TypeScript type checking with `bun run types:check` (0 errors).
- [ ] Verified Vitest unit test suite with `bun run test` (100% passing).

---

## Reference Guides

For deep-dive topics, consult reference files in this skill folder:
- [Component Architecture Guide](./references/component-architecture.md)
- [MCP Tools & Integration Reference](./references/mcp-server.md)
- [Using Agent Skills via `npx skills`](./references/skills-cli.md)
