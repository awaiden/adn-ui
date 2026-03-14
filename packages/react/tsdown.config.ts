import { defineConfig } from "vite-plus/pack";

export default defineConfig({
  dts: true,
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  platform: "neutral",
});
