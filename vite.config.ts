import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    sortPackageJson: true,
  },
  lint: {
    jsPlugins: ["eslint-plugin-perfectionist"],
    options: { typeAware: true, typeCheck: true },
    rules: {
      "perfectionist/sort-imports": "error",
    },
  },
  staged: {
    "*.{ts,tsx}": ["bun lint --fix", "bun fmt --write"],
  },
});
