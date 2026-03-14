import Description from "./field-description.svelte";
import ErrorMessage from "./field-error.svelte";
import Label from "./field-label.svelte";
import Root from "./field-root.svelte";

export const Field = {
	Root,
	Label,
	Description,
	ErrorMessage,
};

export {
	Root as FieldRoot,
	Label as FieldLabel,
	Description as FieldDescription,
	ErrorMessage as FieldErrorMessage,
};

export { type FieldVariants, fieldVariants } from "@adn-ui/core";
