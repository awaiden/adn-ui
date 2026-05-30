import type { Preview } from "@storybook/react-vite";

import { withThemeByClassName } from "@storybook/addon-themes";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    layout: "centered",
  },
};

export const decorators = [
  withThemeByClassName({
    defaultTheme: "light", // Varsayılan tema
    themes: {
      dark: "dark", // Koyu tema için eklenecek class ismi
      light: "light", // Açık tema için eklenecek class ismi
    },
  }),
];

export default preview;
