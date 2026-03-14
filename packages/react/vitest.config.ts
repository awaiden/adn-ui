import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		browser: {
			enabled: true,
			// @ts-expect-error - Missing types for browser provider
			provider: playwright(),
			// https://vitest.dev/config/browser/playwright
			instances: [{ browser: "chromium" }],
		},
	},
});
