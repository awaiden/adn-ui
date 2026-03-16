import { defineConfig } from "vite-plus/pack";

export default defineConfig({
  entry: {
    index: "./src/index.ts",
  },
  dts: true,
  format: ["esm", "cjs"],
  platform: "neutral",
  deps: {
    neverBundle: ["react", "react-dom", "react/jsx-runtime"],
  },
});
