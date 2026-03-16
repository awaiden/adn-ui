import "@adn-ui/styles";

import type { Preview } from "@storybook/react-vite";

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;

export const decorators = [
  withThemeByClassName({
    defaultTheme: "light",
    themes: {
      dark: "dark",
      light: "light",
    },
  }),
];
