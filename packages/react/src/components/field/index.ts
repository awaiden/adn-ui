import { FieldControl, FieldDescription, FieldError, FieldLabel, FieldRoot } from "./field";

export const Field = Object.assign(FieldRoot, {
  Control: FieldControl,
  Description: FieldDescription,
  Error: FieldError,
  Label: FieldLabel,
  Root: FieldRoot,
});

export * from "./field";

export type { FieldVariants } from "./field.variants";
export { fieldVariants } from "./field.variants";
