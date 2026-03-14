import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/sveltekit";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
	return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(js|ts|svelte)"],
	addons: [getAbsolutePath("@storybook/addon-svelte-csf")],
	framework: getAbsolutePath("@storybook/sveltekit"),
};
export default config;
