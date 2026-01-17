import { defineConfig } from "tsdown";

export default defineConfig({
  banner: '"use client";',
  dts: true,
  entry: ["src/index.ts"],
  external: ["react", "react-dom", "react/jsx-runtime"],
  format: ["esm", "cjs"],
  sourcemap: true,
  treeshake: true,
  clean: true,
  target: "esnext",
  outDir: "dist",
  minify: true,
});
