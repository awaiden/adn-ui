// @ts-check

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ui.awaiden.com",
  integrations: [
    starlight({
      plugins: [starlightLlmsTxt({ rawContent: true })],
      title: "Adn UI",
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/awaiden/adn-ui",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "guides/introduction" },
            { label: "Installation", slug: "guides/installation" },
            { label: "Styling", slug: "guides/styling" },
            { label: "Composition", slug: "guides/composition" },
            { label: "References", slug: "guides/references" },
          ],
        },
        {
          label: "Components",
          autogenerate: { directory: "components" },
        },
      ],
    }),
    react(),
  ],

  vite: {
    plugins: [
      // @ts-expect-error - tailwindcss vite version mismatch
      tailwindcss(),
    ],
  },
});
