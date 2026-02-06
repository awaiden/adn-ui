import {
  FieldRoot,
  FieldLabel,
  FieldDescription,
  FieldErrorMessage,
  FieldPrefix,
  FieldSuffix,
  FieldGroup,
} from "./field";

export * from "./use-field";
export * from "./context";
export * from "./field.variants";
export * from "./field";

export const Field = Object.assign(FieldRoot, {
  Description: FieldDescription,
  ErrorMessage: FieldErrorMessage,
  Label: FieldLabel,
  Root: FieldRoot,
  Prefix: FieldPrefix,
  Suffix: FieldSuffix,
  Group: FieldGroup,
});
