import { tv, type VariantProps } from "tailwind-variants";

export const numberFieldVariants = tv({
  slots: {
    decrement: "number-field__decrement",
    group: "number-field__group",
    increment: "number-field__increment",
    input: "number-field__input",
    root: "number-field",
    scrubArea: "number-field__scrub-area",
    scrubAreaCursor: "number-field__scrub-area-cursor",
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldVariants>;
