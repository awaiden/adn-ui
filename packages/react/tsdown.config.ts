import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
  sourcemap: true,
  clean: true,
  target: "esnext",
  outDir: "dist",
  unbundle: true,
  minify: false,
  treeshake: true,
});
