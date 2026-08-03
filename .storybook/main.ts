import type { StorybookConfig } from "@storybook/nextjs-vite";
import fs from "node:fs";
import path from "node:path";

const getStaticDirs = () => {
  const publicDir = path.resolve(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) return [];

  const entries = fs.readdirSync(publicDir, { withFileTypes: true });
  const dirs: { from: string; to: string }[] = [];

  for (const entry of entries) {
    if (entry.name === "sb" || entry.name === "storybook") continue;
    dirs.push({
      from: `../public/${entry.name}`,
      to: `/${entry.name}`,
    });
  }

  return dirs;
};

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: "@storybook/nextjs-vite",
  staticDirs: getStaticDirs(),
};
export default config;

