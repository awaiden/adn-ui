import { tv, type VariantProps } from "tailwind-variants";

export const fieldsetVariants = tv({
  slots: {
    legend: "fieldset__legend",
    root: "fieldset",
  },
});

export type FieldsetVariants = VariantProps<typeof fieldsetVariants>;
