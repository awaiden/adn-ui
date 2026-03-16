import { defineConfig } from "vite-plus/pack";

export default defineConfig({
  dts: true,
  format: ["cjs", "esm"],
  sourcemap: true,
  deps: { alwaysBundle: ["tailwind-variants", "tailwind-merge"] },
});
