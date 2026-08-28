# Component Architecture & Design Tokens Deep-Dive Reference

This reference guide provides an exhaustive architectural breakdown of **adn-ui** components, Base UI primitive integration, state attributes, slot definitions, OKLCH design tokens, and testing conventions.

---

## Detailed 7-File Slot Architecture

### 1. Context (`<component-name>.context.ts`)
React Context distributes slot generator functions down compound component trees without prop drilling.

```typescript
import { createContext, useContext } from "react";
import type { ComponentVariants } from "./<component-name>.variants";

export type ComponentContextValue = {
  slots: ReturnType<typeof componentVariants>;
};

export const ComponentContext = createContext<ComponentContextValue | null>(null);

export const useComponentContext = () => {
  const context = useContext(ComponentContext);
  if (!context) {
    throw new Error("Sub-component must be rendered inside ComponentRoot provider");
  }
  return context;
};
```

---

### 2. Variant Specifications (`<component-name>.variants.ts`)
Slot definitions map component sub-elements to CSS class names via `tailwind-variants` (`tv()`):

```typescript
import { tv, type VariantProps } from "tailwind-variants";

export const componentVariants = tv({
  slots: {
    root: "component",
    control: "component__control",
    indicator: "component__indicator",
    label: "component__label",
    description: "component__description",
    error: "component__error",
  },
  variants: {
    size: {
      sm: { root: "component--sm", indicator: "component__indicator--sm" },
      md: { root: "component--md", indicator: "component__indicator--md" },
      lg: { root: "component--lg", indicator: "component__indicator--lg" },
    },
    variant: {
      default: { root: "component--default" },
      secondary: { root: "component--secondary" },
      outline: { root: "component--outline" },
      destructive: { root: "component--destructive" },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export type ComponentVariants = VariantProps<typeof componentVariants>;
```

---

### 3. Tailwind v4 & OKLCH Styling (`<component-name>.css`)
Styling uses `@apply` directives combined with Base UI state attributes (`data-checked`, `data-disabled`, `data-invalid`, `data-open`, `data-popup-open`):

```css
/* Base Slot */
.component {
  @apply relative inline-flex items-center gap-2 font-sans transition-colors select-none;
}

/* Base UI State Selectors */
.component[data-disabled] {
  @apply cursor-not-allowed opacity-50;
}

.component[data-invalid] {
  @apply border-destructive text-destructive;
}

/* Icon styling rule - Target SVGs via CSS selectors */
.component__indicator svg {
  @apply size-4 shrink-0 transition-transform duration-200;
}

.component[data-open] .component__indicator svg {
  @apply rotate-180;
}
```

#### OKLCH Design Tokens Available
- `bg-background`, `text-foreground`
- `bg-primary`, `text-primary-foreground`
- `bg-secondary`, `text-secondary-foreground`
- `bg-muted`, `text-muted-foreground`
- `bg-accent`, `text-accent-foreground`
- `bg-destructive`, `text-destructive-foreground`
- `border-border`, `border-input`, `ring-ring`

---

### 4. Component Logic (`<component-name>.tsx`)
Wraps `@base-ui/react` primitives, forwards refs, and handles slot distribution:

```typescript
"use client";

import "./<component-name>.css";
import { Component as BaseComponent } from "@base-ui/react/component";
import type React from "react";
import { cn } from "@/lib/cn";
import { ComponentContext, useComponentContext } from "./<component-name>.context";
import { componentVariants, type ComponentVariants } from "./<component-name>.variants";

export type ComponentRootProps = ComponentVariants & React.ComponentProps<typeof BaseComponent.Root>;

export const ComponentRoot = ({ children, className, size, variant, ...props }: ComponentRootProps) => {
  const slots = componentVariants({ size, variant });
  return (
    <ComponentContext.Provider value={{ slots }}>
      <BaseComponent.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseComponent.Root>
    </ComponentContext.Provider>
  );
};
```

---

### 5. Vitest Test Suite (`<component-name}.test.tsx`)
Tests ARIA accessibility, rendering states, and user interactions:

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ComponentRoot } from "./index";

describe("Component", () => {
  it("renders correctly with default props", () => {
    render(<ComponentRoot>Click Me</ComponentRoot>);
    expect(screen.getByText("Click Me")).toBeDefined();
  });

  it("handles user clicks", async () => {
    const user = userEvent.setup();
    render(<ComponentRoot>Action</ComponentRoot>);
    await user.click(screen.getByText("Action"));
  });
});
```

---

### 6. Demo Component (`<component-name>-demo.tsx`)
Exposes practical usage examples for Storybook and doc pages.

### 7. Module Exports (`index.ts`)
Includes `@see` JSDoc link and public API exports:
```typescript
/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/<component-name>/content.md
 */
export * from "./<component-name>";
export * from "./<component-name>.variants";
export * from "./<component-name>.context";
```
