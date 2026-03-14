import svelte from "rollup-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess";
import { defineConfig } from "tsdown";

export default defineConfig({
	entry: ["./src/lib/index.ts"],
	platform: "neutral",
	dts: true,
	plugins: [svelte({ preprocess: sveltePreprocess() })],
});
