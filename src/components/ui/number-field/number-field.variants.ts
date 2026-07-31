/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const numberFieldVariants = tv({
  slots: {
    root: "number-field",
    group: "number-field__group",
    input: "number-field__input",
    decrement: "number-field__decrement",
    increment: "number-field__increment",
    scrubArea: "number-field__scrub-area",
    scrubAreaCursor: "number-field__scrub-area-cursor",
  },
  variants: {
    size: {
      sm: {
        group: "number-field__group--sm",
        input: "number-field__input--sm",
        decrement: "number-field__decrement--sm",
        increment: "number-field__increment--sm",
      },
      md: {
        group: "number-field__group--md",
        input: "number-field__input--md",
        decrement: "number-field__decrement--md",
        increment: "number-field__increment--md",
      },
      lg: {
        group: "number-field__group--lg",
        input: "number-field__input--lg",
        decrement: "number-field__decrement--lg",
        increment: "number-field__increment--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldVariants>;
