import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    sortPackageJson: true,
  },
  lint: {
    options: { typeAware: true, typeCheck: true },
  },
  staged: {
    "*.{ts,tsx}": ["pnpm lint --fix", "pnpm fmt --write"],
  },
});
