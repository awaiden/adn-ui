# @adn-ui/react

This project is the core React component library for **adn-ui**, a design system built on [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS v4](https://tailwindcss.com). It provides a collection of accessible, themeable components designed to be used in React applications.

## Project Overview

- **Main Technologies:** React 19, Radix UI, Tailwind CSS v4, TypeScript, Vite, Vitest, Storybook.
- **Architecture:**
  - **Core Logic:** Built on top of Radix UI primitives.
  - **Styling:** Uses `@adn-ui/core` for styling variants and utility functions.
  - **Theming:** Based on CSS custom properties for color, radius, etc. Supports light and dark modes (via `.dark` class).
  - **Build System:** Powered by `vite-plus` and `tsdown` for packing ESM and CJS formats.

## Building and Running

- **Development Build (Watch Mode):** `bun run dev` (uses `vp pack --watch`)
- **Production Build:** `bun run build` (uses `vp pack`)
- **Run Storybook:** `bun run storybook` (accessible at port 6008)
- **Run Tests:** `bun run test` (uses `vitest` with `jsdom`)
- **Build Storybook:** `bun run build-storybook`

## Development Conventions

### Component Structure

Each component is organized within its own directory under `src/components/<component-name>/`:

- `<component-name>.tsx` (Simple components) OR multiple subcomponent files (Compound components).
- `<component-name>-context.ts`: React context for sharing slots/styles (used in compound components).
- `<component-name>.spec.tsx`: Vitest/Testing Library test file.
- `<component-name>.stories.tsx`: Storybook stories.
- `index.ts`: Exports for the component (both as a main object and individual subcomponents).

### Implementation Patterns

- **Compound Components:** Complex components (like `Accordion`, `Dialog`) are exported as a main object (e.g., `Accordion.Root`, `Accordion.Item`) and as individual named exports.
- **Styling with Slots:** Root components (like `AccordionRoot`) often use a context to pass down "slots" from `@adn-ui/core` (e.g., `const slots = accordionVariants()`). Subcomponents consume this context (e.g., `const { slots } = useAccordionContext()`) and apply their respective slot styles (`slots.content()`).
- **Radix UI Integration:** Most interactive components wrap Radix UI primitives.
- **Consistency:** Use `data-slot="<slot-name>"` attributes on component root elements for internal identification and potential styling hooks.
- **Utility Functions:** Use `cn` from `@adn-ui/core` for class name merging.
- **Export Strategy:** All components are exported from `src/components/index.ts` and re-exported from the main `src/index.ts`.

### Testing

- Tests are colocated with components (`.spec.tsx`).
- Use Vitest and `@testing-library/react`.
- Global setup is located in `vitest.setup.ts`.

## Key Files

- `package.json`: Main project configuration, scripts, and dependencies.
- `tsdown.config.ts`: Configuration for building/packing the library.
- `vite.config.ts`: Vite and Vitest configuration.
- `src/index.ts`: Main entry point for the library exports.
- `src/components/index.ts`: Exports all components.
- `src/hooks/`: Contains shared React hooks (e.g., `use-mobile.ts`).
