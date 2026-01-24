import type { StorybookConfig } from "@storybook/react-vite";

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const config: StorybookConfig = {
  addons: [getAbsolutePath("@storybook/addon-themes"), getAbsolutePath("@storybook/addon-docs")],
  framework: getAbsolutePath("@storybook/react-vite"),
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  core: {
    disableTelemetry: true,
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
