// @ts-check

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: ["./src/styles/global.css"],
      plugins: [starlightLlmsTxt({ rawContent: true })],
      sidebar: [
        {
          items: [
            { label: "Introduction", slug: "guides/introduction" },
            { label: "Installation", slug: "guides/installation" },
            { label: "Styling", slug: "guides/styling" },
            { label: "Composition", slug: "guides/composition" },
            { label: "References", slug: "guides/references" },
            { label: "Dark Mode", slug: "guides/dark-mode" },
            { label: "LLMS.txt", slug: "guides/llms" },
          ],
          label: "Getting Started",
        },
        {
          autogenerate: { directory: "components" },
          label: "Components",
        },
      ],
      social: [
        {
          href: "https://github.com/awaiden/adn-ui",
          icon: "github",
          label: "GitHub",
        },
      ],
      title: "Adn UI",
    }),
    react(),
  ],
  site: "https://ui.awaiden.com",

  vite: {
    plugins: [tailwindcss()],
  },
});
