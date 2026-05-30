import { tv, type VariantProps } from "tailwind-variants";

export const progressVariants = tv({
  slots: {
    indicator: "progress__indicator",
    root: "progress",
  },
});

export type ProgressVariants = VariantProps<typeof progressVariants>;
