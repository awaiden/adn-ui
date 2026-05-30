/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindAutoReference from "vite-plugin-tailwind-ref";

export default defineConfig({
  base: "/adn-ui/",
  plugins: [react(), tailwindAutoReference("src/index.css"), tailwindcss()],
  resolve: { tsconfigPaths: true },
  test: {
    environment: "happy-dom",
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["./vitest.setup.ts"],
  },
});
