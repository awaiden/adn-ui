import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldItem,
  FieldLabel,
  FieldPrefix,
  FieldRoot,
  FieldSuffix,
  FieldValidity,
} from "./field";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/field/content.md
 */
export const Field = {
  Control: FieldControl,
  Description: FieldDescription,
  Error: FieldError,
  Group: FieldGroup,
  Item: FieldItem,
  Label: FieldLabel,
  Prefix: FieldPrefix,
  Root: FieldRoot,
  Suffix: FieldSuffix,
  Validity: FieldValidity,
};

export {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldItem,
  FieldLabel,
  FieldPrefix,
  FieldRoot,
  FieldSuffix,
  FieldValidity,
};

export type {
  FieldControlProps,
  FieldDescriptionProps,
  FieldErrorProps,
  FieldGroupProps,
  FieldItemProps,
  FieldLabelProps,
  FieldPrefixProps,
  FieldProps,
  FieldSuffixProps,
  FieldValidityProps,
} from "./field";
export { FieldContext, useFieldContext } from "./field.context";
export { type FieldVariants, fieldVariants } from "./field.variants";


