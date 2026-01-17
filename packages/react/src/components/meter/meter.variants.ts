import { tv, type VariantProps } from "tailwind-variants";

export const meterVariants = tv({
  slots: {
    indicator: "meter__indicator",
    label: "meter__label",
    root: "meter",
    track: "meter__track",
    value: "meter__value",
  },
  variants: {
    size: {
      lg: { root: "meter--lg" },
      md: { root: "meter--md" },
      sm: { root: "meter--sm" },
    },
    variant: {
      danger: { root: "meter--danger" },
      primary: { root: "meter--primary" },
      secondary: { root: "meter--secondary" },
      success: { root: "meter--success" },
    },
  },
});

export type MeterVariants = VariantProps<typeof meterVariants>;
