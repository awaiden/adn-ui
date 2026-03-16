# Copilot Workspace Instructions

## 🛠️ Commit Message Rules

**Format:** `<type>(<scope>): <description>`

**Types:**

- **`feat`**: A new feature (e.g., a new component).
- **`fix`**: A bug fix.
- **`chore`**: Maintenance tasks (build config, dependencies, styles).
- **`refactor`**: Code change that neither fixes a bug nor adds a feature.
- **`docs`**: Documentation only changes.
- **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **`perf`**: A code change that improves performance.
- **`test`**: Adding missing tests or correcting existing tests.

**Rules:**

1. **Lowercase:** The description must start with a lowercase letter.
2. **Imperative:** Use the imperative mood ("add" instead of "added").
3. **No Period:** Do not put a period at the end of the line.
4. **Scope:** Use the component name or area (e.g., `accordion`, `build`, `deps`) as the scope.

---

**Example:**
`chore(style): update button padding and border-radius`

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
