import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: "https://github.com/aydinthefirst/adn-ui",
    links: [
      {
        text: "Docs",
        url: "/docs",
      },
    ],
    nav: {
      title: "FeaUI",
    },
  };
}
