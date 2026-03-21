import { tv, type VariantProps } from "tailwind-variants";

export const alertVariants = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    content: "alert__content",
    description: "alert__description",
    icon: "alert__icon",
    root: "alert",
    title: "alert__title",
  },
  variants: {
    variant: {
      default: {
        root: "alert--default",
      },
      destructive: {
        root: "alert--destructive",
      },
    },
  },
});

export type AlertVariants = VariantProps<typeof alertVariants>;
