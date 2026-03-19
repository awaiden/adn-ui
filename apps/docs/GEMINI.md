# @adn-ui/docs

Documentation site for the `@adn-ui/react` library, built with [Astro Starlight](https://starlight.astro.build/).

## Project Overview

- **Framework**: [Astro](https://astro.build/) with the [Starlight](https://starlight.astro.build/) integration.
- **UI Components**: [React 19](https://react.dev/) with [Tailwind CSS 4](https://tailwindcss.com/).
- **Icons**: [Lucide React](https://lucide.dev/).
- **Architecture**:
  - `src/content/docs/`: MDX files for guides and component documentation.
  - `src/components/`: React components used as interactive examples in the docs.
  - `src/styles/global.css`: Global Tailwind CSS 4 configuration and custom styles.

## Building and Running

Commands are run using `bun` (preferred) or `npm`.

| Command         | Action                                                   |
| :-------------- | :------------------------------------------------------- |
| `bun dev`       | Starts the local development server at `localhost:4321`. |
| `bun run build` | Builds the production site to the `dist/` directory.     |
| `bun preview`   | Previews the local production build.                     |
| `bun astro ...` | Runs Astro CLI commands.                                 |

## Development Conventions

### 1. Adding New Component Documentation

To add documentation for a new component (e.g., `MyComponent`):

1.  **Create an Example Component**:
    - Path: `src/components/MyComponentExample.tsx`
    - Pattern: Export a constant object containing functional components for different states (Variants, Sizes, etc.).
    - Use `"use client";` at the top.
    - Example structure:
      ```tsx
      "use client";
      import { MyComponent } from "@adn-ui/react";
      export const MyComponentExample = {
        Variants: () => (
          <div className="flex gap-4">
            <MyComponent variant="primary" />
          </div>
        ),
        Sizes: () => (
          <div className="flex gap-4">
            <MyComponent size="sm" />
          </div>
        ),
      };
      ```

2.  **Create an MDX Page**:
    - Path: `src/content/docs/components/my-component.mdx`
    - The sidebar will automatically detect new files in this directory via `autogenerate`.
    - Structure:
      - Frontmatter with `title` and `description`.
      - Import `ComponentPreview` and your example component.
      - Use `<ComponentPreview><MyComponentExample.Variants client:load /></ComponentPreview>` to show previews.
      - Include Usage, API Reference (table), and Examples sections.

### 2. Styling

- The project uses **Tailwind CSS 4**.
- Custom CSS is located in `src/styles/global.css`.
- Prefer using utility classes within React examples.

### 3. Sidebar Configuration

- **Getting Started**: Manually managed in `astro.config.mjs`.
- **Components**: Automatically generated from files in `src/content/docs/components/`.

### 4. Interactive Previews

- Always use the `client:load` directive when including React examples in MDX to ensure interactivity works.
- Wrap examples in the `<ComponentPreview>` component for consistent padding, borders, and background.

## Key Files

- `astro.config.mjs`: Core configuration for Astro and Starlight.
- `src/components/ComponentPreview.tsx`: The wrapper for documentation examples.
- `src/content/docs/guides/llms.mdx`: Configuration for the `llms.txt` generation.
