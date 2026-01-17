import "../src/styles.css";
import type { Preview, ReactRenderer } from "@storybook/react-vite";

import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: "light",
      themes: {
        dark: "dark",
        light: "light",
      },
    }),
  ],
};

export default preview;
