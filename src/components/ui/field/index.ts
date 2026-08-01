import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  FieldRoot,
  FieldValidity,
} from "./field";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/field/content.md
 */
export const Field = {
  Control: FieldControl,
  Description: FieldDescription,
  Error: FieldError,
  Item: FieldItem,
  Label: FieldLabel,
  Root: FieldRoot,
  Validity: FieldValidity,
};

export {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  FieldRoot,
  FieldValidity,
};

export type {
  FieldControlProps,
  FieldDescriptionProps,
  FieldErrorProps,
  FieldItemProps,
  FieldLabelProps,
  FieldProps,
  FieldValidityProps,
} from "./field";
export { FieldContext, useFieldContext } from "./field.context";
export { type FieldVariants, fieldVariants } from "./field.variants";
