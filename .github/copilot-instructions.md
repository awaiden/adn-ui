# Copilot Workspace Instructions

## Build & Test

- Build all: `bun run build`
- Dev all: `bun dev`
- Lint: `bun check`
- Fix lint: `bun check:fix`
- Test React: `bun run --filter @adn-ui/react test`
- Test Svelte: `bun run --filter @adn-ui/svelte test`

## Monorepo Structure

- `packages/react`: Main React UI library
- `packages/react-themes`: Theme provider/utilities
- `packages/core`: Shared variant logic
- `apps/docs`: Astro Starlight docs

## Patterns & Conventions

- All variants are in `core/src/*.variants.ts` and re-exported from `core/src/index.ts`
- Components use compound patterns (Root, Item, Trigger, etc.)
- Theme system uses OKLCH tokens, `.dark` class, and CSS variables
- Canary releases: All packages auto-published with unique canary tag on each main push
- Stable releases: Only via GitHub release event

## Common Pitfalls

- For GitHub Pages, set `base` in Astro config to repo name (e.g. `/adn-ui`)
- All `window`/`localStorage`/`document` access must be guarded for SSR/tests
- When moving variants, update `core/src/index.ts` exports

## Example Prompts

- "Build all packages"
- "Move all .variants.ts files to core and re-export"
- "Publish canary for all packages"
- "Add dark mode guide to docs"
- "Fix theme provider fallback logic"

## Agent Customization

- Use applyTo for frontend/backend/test instructions if needed
- For new skills: `/create-skill ...` (see agent-customization)

---

For more, see [README.md](../README.md) and [docs](apps/docs).
