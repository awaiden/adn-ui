import { tv, type VariantProps } from "tailwind-variants";

export const progressVariants = tv({
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
  slots: {
    indicator: "progress__indicator",
    label: "progress__label",
    root: "progress",
    track: "progress__track",
    value: "progress__value",
  },
  variants: {
    size: {
      lg: { root: "progress--lg" },
      md: { root: "progress--md" },
      sm: { root: "progress--sm" },
    },
    variant: {
      danger: { root: "progress--danger" },
      primary: { root: "progress--primary" },
      secondary: { root: "progress--secondary" },
      success: { root: "progress--success" },
    },
  },
});

export type ProgressVariants = VariantProps<typeof progressVariants>;
