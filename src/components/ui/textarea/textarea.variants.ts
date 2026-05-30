import { tv, type VariantProps } from "tailwind-variants";

export const textareaVariants = tv({
  base: "textarea",
});

export type TextareaVariants = VariantProps<typeof textareaVariants>;
