import "@adn-ui/styles";

import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";

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
