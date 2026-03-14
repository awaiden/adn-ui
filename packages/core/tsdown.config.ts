import { defineConfig } from "vite-plus/pack";

export default defineConfig({
  dts: true,
  format: ["cjs", "esm"],
  sourcemap: true,
});
