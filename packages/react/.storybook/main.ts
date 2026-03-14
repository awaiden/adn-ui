import type { StorybookConfig } from "@storybook/react-vite";

import { dirname } from "path";
import { fileURLToPath } from "url";

function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

const config: StorybookConfig = {
  addons: [
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-styling-webpack"),
  ],
  framework: getAbsolutePath("@storybook/react-vite"),
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
};
export default config;
