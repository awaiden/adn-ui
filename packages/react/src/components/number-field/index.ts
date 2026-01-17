import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
} from "./number-field";

export const NumberField = Object.assign(NumberFieldRoot, {
  Decrement: NumberFieldDecrement,
  Group: NumberFieldGroup,
  Increment: NumberFieldIncrement,
  Input: NumberFieldInput,
  Root: NumberFieldRoot,
  ScrubArea: NumberFieldScrubArea,
  ScrubAreaCursor: NumberFieldScrubAreaCursor,
});

export * from "./number-field";

export type { NumberFieldVariants } from "./number-field.variants";
export { numberFieldVariants } from "./number-field.variants";
