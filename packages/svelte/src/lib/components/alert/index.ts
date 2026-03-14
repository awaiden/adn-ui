import Description from "./alert-description.svelte";
import Root from "./alert-root.svelte";
import Title from "./alert-title.svelte";

export const Alert = {
	Root,
	Title,
	Description,
};

export {
	Root as AlertRoot,
	Title as AlertTitle,
	Description as AlertDescription,
};

export { type AlertVariants, alertVariants } from "@adn-ui/core";
