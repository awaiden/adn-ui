import Indicator from "./progress-indicator.svelte";
import Root from "./progress-root.svelte";

export const Progress = {
	Root,
	Indicator,
};

export { Root as ProgressRoot, Indicator as ProgressIndicator };

export { type ProgressVariants, progressVariants } from "@adn-ui/core";
