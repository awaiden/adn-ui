import { tv, type VariantProps } from "tailwind-variants";

export const alertVariants = tv({
  defaultVariants: {
    variant: "info",
  },
  slots: {
    content: "alert__content",
    description: "alert__description",
    indicator: "alert__indicator",
    root: "alert",
    title: "alert__title",
  },
  variants: {
    variant: {
      danger: { root: "alert--danger" },
      info: { root: "alert--info" },
      primary: { root: "alert--primary" },
      success: { root: "alert--success" },
      warning: { root: "alert--warning" },
    },
  },
});

export type AlertVariants = VariantProps<typeof alertVariants>;
