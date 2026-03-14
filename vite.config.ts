import { defineConfig } from "vite-plus";

export default defineConfig({
	lint: {
		jsPlugins: ["eslint-plugin-perfectionist"],
		options: { typeAware: true, typeCheck: true },
		rules: {
			"perfectionist/sort-classes": "error",
			"perfectionist/sort-exports": "error",
			"perfectionist/sort-imports": "error",
			"perfectionist/sort-objects": "error",
		},
	},
	staged: {
		"*.{ts,tsx}": ["biome check . --write"],
	},
});
