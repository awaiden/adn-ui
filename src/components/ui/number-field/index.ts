import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from "./number-field";

export const NumberField = {
  Decrement: NumberFieldDecrement,
  Group: NumberFieldGroup,
  Increment: NumberFieldIncrement,
  Input: NumberFieldInput,
  Root: NumberFieldRoot,
  ScrubArea: NumberFieldScrubArea,
  ScrubAreaCursor: NumberFieldScrubAreaCursor,
};

export {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
};

export type {
  NumberFieldDecrementProps,
  NumberFieldGroupProps,
  NumberFieldIncrementProps,
  NumberFieldInputProps,
  NumberFieldProps,
  NumberFieldScrubAreaCursorProps,
  NumberFieldScrubAreaProps,
} from "./number-field";
export { NumberFieldContext, useNumberFieldContext } from "./number-field.context";
export { type NumberFieldVariants, numberFieldVariants } from "./number-field.variants";
