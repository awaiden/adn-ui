# adn-ui

## Project Overview

`react-ui` is a modern, high-performance React UI library (`@adn-ui/react`) built with a focus on developer experience and visual polish. It provides accessible, themeable components for building consistent user interfaces.

### Core Technologies

- **Runtime & Package Manager:** [Bun](https://bun.sh) (v1.3.9)
- **Framework:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with `@apply` and [Tailwind Variants](https://www.tailwind-variants.org/)
- **Monorepo Management:** [Turborepo](https://turbo.build)
- **Primitives:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev)
- **Linting & Formatting:** [Biome](https://biomejs.dev) (v2.4.6) — **not** Prettier or ESLint
- **Documentation:** [Astro Starlight](https://starlight.astro.build/) (`apps/docs/`)
- **Component Dev:** [Storybook 10](https://storybook.js.org) (inside `packages/react/`)
- **Build:** [Vite](https://vite.dev) with `vite-plugin-dts` for type generation
- **Testing:** [Vitest](https://vitest.dev) with Playwright browser mode

## Architecture

Monorepo with two workspaces:

- `packages/react/` — Core UI library. Builds to `dist/` as ES + CJS via Vite. Exports `@adn-ui/react` (components) and `@adn-ui/react/styles` (CSS).
- `apps/docs/` — Documentation site built with Astro Starlight. Consumes `@adn-ui/react` as a `workspace:*` dependency. MDX pages under `src/content/docs/`.

### Component Structure

Each component in `packages/react/src/components/<name>/` follows this pattern:

| File                 | Purpose                                                                             |
| -------------------- | ----------------------------------------------------------------------------------- |
| `<name>.tsx`         | Component logic. Uses `React.ComponentProps` + variant types for props.             |
| `<name>.variants.ts` | `tv()` from `tailwind-variants` defining BEM-like CSS class mappings.               |
| `<name>.css`         | Actual styles using `@apply` with semantic design tokens.                           |
| `<name>.stories.tsx` | Storybook stories for interactive development.                                      |
| `<name>.spec.tsx`    | Vitest browser tests.                                                               |
| `index.ts`           | Barrel export. Renames default export to `<Name>Root` and creates a `<Name>` alias. |

**Key pattern:** CSS classes use BEM-style naming (`.button`, `.button--primary`, `.button--sm`), mapped through `tv()` variants in the `.variants.ts` file. The `.tsx` file stays minimal — just props destructuring and a single JSX element.

### Barrel Exports

Every component must be exported through:

1. Its own `index.ts`
2. `packages/react/src/components/index.ts` (add `export * from "./<name>"`)
3. CSS must be imported in `packages/react/src/components/index.css` (add `@import "./<name>/<name>.css"`)

### Theme System

Defined in `packages/react/src/styles/themes/default.css`:

- Uses **OKLCH color space** for perceptual uniformity
- Light/dark mode via `:root` / `.dark` selectors
- Design tokens: `--primary`, `--secondary`, `--destructive`, `--muted`, `--accent`, `--surface`, `--background`, `--foreground`, each with `-foreground` and `-hover` variants
- Mapped to Tailwind via `@theme inline` block
- Custom radii: `--radius`, `--radius-button` (pill by default)

### Documentation Structure (`apps/docs/`)

- `src/content/docs/index.mdx` — Landing page (splash template)
- `src/content/docs/guides/` — Guide pages (introduction, installation, styling, composition, references)
- `src/content/docs/components/` — Auto-generated sidebar from MDX files, one per component
- `src/components/` — React example components (`*Example.tsx`) used in MDX via `client:load`
- `src/components/ComponentPreview.tsx` — Wrapper for live component previews
- Sidebar is configured in `astro.config.mjs`

## Building and Running

### Global Commands (Root)

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `bun install`   | Install all dependencies                  |
| `bun dev`       | Start dev mode for all workspaces (Turbo) |
| `bun build`     | Build all workspaces for production       |
| `bun check`     | Run Biome linting and formatting checks   |
| `bun check:fix` | Auto-fix linting/formatting issues        |

### Package Commands (`packages/react/`)

| Command                   | Description                                      |
| ------------------------- | ------------------------------------------------ |
| `bun run dev`             | `vite build --watch` (library rebuild on change) |
| `bun run build`           | Production library build                         |
| `bun run test`            | Run Vitest browser tests                         |
| `bun run storybook`       | Storybook dev server on port 6006                |
| `bun run build-storybook` | Build static Storybook                           |

### Docs Commands (`apps/docs/`)

| Command           | Description              |
| ----------------- | ------------------------ |
| `bun run dev`     | Astro dev server         |
| `bun run build`   | Build static docs site   |
| `bun run preview` | Preview production build |

## Development Conventions

### Styling

- Use Tailwind v4 features: CSS variables, `@theme inline`, `@utility`
- All colors in OKLCH
- Always use `tailwind-variants` (`tv`) for variant definitions — never inline conditional classes
- Keep styles in `.css` files with `@apply`, variant mappings in `.variants.ts`
- Use `tailwind-merge` for className merging when accepting external classes

### Components

- Use Radix UI primitives for accessibility (WCAG compliance)
- Type all props with `React.ComponentProps<element> & VariantProps`
- Default exports in `.tsx`, re-exported as named exports in `index.ts`
- Components are compound (e.g., `Accordion.Root`, `Accordion.Item`, `Accordion.Trigger`)

### Tooling

- **Biome only** — no Prettier, no ESLint. Format: tabs, double quotes
- **Turbo** for cross-workspace task orchestration with caching
- **Husky + lint-staged** for pre-commit hooks (runs `biome check --write` on staged `.ts/.tsx`)

### Adding a New Component

1. Create `packages/react/src/components/<name>/` with all 6 files
2. Add `export * from "./<name>"` to `packages/react/src/components/index.ts`
3. Add `@import "./<name>/<name>.css"` to `packages/react/src/components/index.css`
4. Create `apps/docs/src/components/<Name>Example.tsx` with example usage
5. Create `apps/docs/src/content/docs/components/<name>.mdx` with preview, usage, API reference, and examples

### Adding a Documentation Guide Page

1. Create `apps/docs/src/content/docs/guides/<slug>.mdx` with frontmatter (`title`, `description`)
2. Add an entry to the `sidebar` array in `apps/docs/astro.config.mjs` under the "Getting Started" group

## Known Pitfalls

- The `packages/react` Vite config uses `vite-plugin-dts` with `rollupTypes: true` — type errors in any component will block the entire build
- `react` and `react-dom` are externalized in the library build; they must be peer dependencies
- The docs app has a Vite plugin type mismatch (`@ts-expect-error`) for `@tailwindcss/vite` — this is expected
- Biome's CSS parser needs `tailwindDirectives: true` to avoid errors on `@apply`, `@theme`, etc.
- TypeScript version in `packages/react` (5.9.3) may be newer than what API Extractor bundles — upgrade API Extractor if warnings appear

## CI/CD

GitHub Actions workflows in `.github/workflows/`:

| Workflow      | Trigger                               | Purpose                                                             |
| ------------- | ------------------------------------- | ------------------------------------------------------------------- |
| `ci.yml`      | Push/PR to `main`                     | Lint (Biome), build, test (Vitest + Playwright)                     |
| `release.yml` | Push to `main`                        | Changesets version/publish (creates release PR or publishes to npm) |
| `docs.yml`    | Push to `main` (docs/library changes) | Build & deploy docs to GitHub Pages                                 |

### Secrets Required

- `NPM_TOKEN` — npm publish token (for `release.yml`)
- `GITHUB_TOKEN` — provided automatically by GitHub Actions
