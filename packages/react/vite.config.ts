import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

import tsdownConfig from "./tsdown.config.js";

// https://vite.dev/config/
export default defineConfig({
  pack: tsdownConfig,
  plugins: [tailwindcss(), react()],
});
