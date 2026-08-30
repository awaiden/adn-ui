---
name: adn-ui-dev
description: Workflow guide and standards for developing, testing, and expanding components and MCP tools in adn-ui. Use when building components, refactoring slot architecture, adding MCP tools, or updating registry manifests.
---

# adn-ui Development & Component Registry Workflow

This skill provides step-by-step guidance for building accessible UI components, managing BEM CSS slot variants, integrating MCP server tools, and updating registry manifests for **adn-ui**.

## Component Architecture & File Structure

Every component lives under `src/components/ui/<component-name>/` following the **Modular Single-File Slots** pattern:

```
src/components/ui/<component-name>/
├── <component-name>.tsx           # Component logic & Base UI primitive bindings
├── <component-name>.variants.ts   # Slot-based Tailwind Variant specifications (tv())
├── <component-name>.css          # CSS utility classes & Tailwind v4 @apply rules
├── <component-name>.context.ts   # React context for sharing slots across sub-components
├── <component-name>.test.tsx     # Vitest unit tests
├── <component-name>.stories.tsx  # Storybook stories
├── <component-name>-demo.tsx     # Interactive demo implementation
└── index.ts                      # Public API exports & JSDoc @see annotation
```

## Key Rules & Guidelines

1. **Icons**:
   - Always import from `lucide-react`.
   - Never use raw `<svg>` HTML elements in TSX files.
   - Style icon dimensions via CSS (e.g., `.button svg { @apply size-4 shrink-0; }`).

2. **JSDoc `@see` Annotations**:
   - Every component's `index.ts` must include a JSDoc annotation:
     ```typescript
     /**
      * @see https://ui.awaiden.com/llms.mdx/docs/components/<component-name>/content.md
      */
     export const Component = Object.assign(ComponentRoot, { ... });
     ```

3. **Compound Export Pattern**:
   - Use `Object.assign(ComponentRoot, { Slot: ComponentSlot, slot: ComponentSlot })` in `index.ts` so components can be used both directly (`<Component />`) and with subcomponents (`<Component.Slot />`).

4. **Model Context Protocol (MCP) Server**:
   - MCP route file is located at `src/app/api/mcp/[transport]/route.ts`.
   - Tools available: `list_components`, `get_component`, `search_components`, `get_component_doc`, `get_registry_item`, `init_adn_ui`, `add_component`, `fetch_llm_doc`.
   - `fetch_llm_doc` tool retrieves raw component MDX documentation using full LLM doc URLs (e.g. `http://localhost:3000/llms.mdx/docs/components/button/content.md`), relative paths, or component names.

## Mandatory Verification Pipeline

After making any codebase modifications, run:

```bash
bun run build:registry && bun run types:check && bun run test && bun run lint
```
