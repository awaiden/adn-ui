import { sveltekit } from "@sveltejs/kit/vite";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		browser: {
			enabled: true,
			// @ts-expect-error - Missing types for browser provider
			provider: playwright(),
			instances: [{ browser: "chromium" }],
		},
	},
});
