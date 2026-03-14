import { FieldDescription } from "./field-description";
import { FieldError } from "./field-error";
import { FieldLabel } from "./field-label";
import { FieldRoot } from "./field-root";

export const Field = {
	Description: FieldDescription,
	Error: FieldError,
	Label: FieldLabel,
	Root: FieldRoot,
};

export { FieldDescription, FieldError, FieldLabel, FieldRoot };

export { type FieldVariants, fieldVariants } from "@adn-ui/core";
export type { FieldDescriptionProps } from "./field-description";
export type { FieldErrorProps } from "./field-error";
export type { FieldLabelProps } from "./field-label";
export type { FieldRootProps } from "./field-root";
