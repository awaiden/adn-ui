import { tv, type VariantProps } from "tailwind-variants";

export const progressVariants = tv({
  defaultVariants: {
    size: "md",
  },
  slots: {
    indicator: "progress__indicator",
    root: "progress",
  },
  variants: {
    size: {
      lg: {
        root: "progress--lg",
      },
      md: {
        root: "progress--md",
      },
      sm: {
        root: "progress--sm",
      },
    },
  },
});

export type ProgressVariants = VariantProps<typeof progressVariants>;
