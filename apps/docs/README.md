# adn-ui docs

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Documentation site for [`@adn-ui/react`](https://github.com/awaiden/adn-ui). Built with [Astro Starlight](https://starlight.astro.build/).

## Development

```bash
# Dev server
bun run dev

# Production build
bun run build

# Preview production build
bun run preview
```

## Structure

```
src/
├── content/docs/
│   ├── index.mdx              # Landing page
│   ├── guides/                 # Getting started guides
│   │   ├── introduction.mdx
│   │   ├── installation.mdx
│   │   ├── styling.mdx
│   │   ├── composition.mdx
│   │   └── references.mdx
│   └── components/             # Per-component docs (auto-sidebar)
├── components/                 # React example components (*Example.tsx)
└── styles/global.css           # Global styles
```

## Adding a Component Docs Page

1. Create `src/components/<Name>Example.tsx` with example usage
2. Create `src/content/docs/components/<name>.mdx` with preview, usage, API reference

Component pages are auto-detected by the sidebar via `autogenerate`.

## Author

**awaiden** — [github.com/awaiden](https://github.com/awaiden)

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun install`         | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`       | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
