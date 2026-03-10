import { defineConfig } from "tsdown";
export default defineConfig({
	entry: "src/index.ts",
	platform: "neutral",
	outDir: "dist",
	dts: true,
	format: ["esm", "cjs"],
	deps: { neverBundle: ["react", "react-dom", "react/jsx-runtime"] },
});
