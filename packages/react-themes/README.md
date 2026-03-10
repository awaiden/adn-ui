# @adn-ui/react-themes

[![npm](https://img.shields.io/npm/v/@adn-ui/react-themes)](https://www.npmjs.com/package/@adn-ui/react-themes)
[![GitHub](https://img.shields.io/github/license/awaiden/adn-ui)](https://github.com/awaiden/adn-ui/blob/main/LICENSE)

Theme provider and utilities for **adn-ui** — supports dark mode, system preference, and custom themes.

## Installation

```bash
npm install @adn-ui/react-themes
# or
bun add @adn-ui/react-themes
```

## Usage

```tsx
import { ThemeProvider, useTheme } from "@adn-ui/react-themes";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Current theme: {theme}
    </button>
  );
}
```

## Development

```bash
# Build (watch mode)
bun run dev

# Production build
bun run build

# Tests
bun run test
```

## License

[MIT](../../LICENSE)
