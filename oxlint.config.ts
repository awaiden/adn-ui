import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "oxlint";

export default defineConfig({
  jsPlugins: ["eslint-plugin-perfectionist"],
  options: {
    typeAware: true,
  },
  rules: {
    ...perfectionist.configs["recommended-natural"].rules,
  },
});
