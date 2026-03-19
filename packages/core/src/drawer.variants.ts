import { tv, type VariantProps } from "tailwind-variants";

export const drawerVariants = tv({
  defaultVariants: {
    side: "right",
  },
  slots: {
    close: "drawer__close",
    closeIcon: "drawer__close-icon",
    srOnly: "sr-only",
    content: "drawer__content",
    description: "drawer__description",
    footer: "drawer__footer",
    header: "drawer__header",
    overlay: "drawer__overlay",
    title: "drawer__title",
  },
  variants: {
    side: {
      bottom: {
        content: "drawer__content--bottom",
      },
      left: {
        content: "drawer__content--left",
      },
      right: {
        content: "drawer__content--right",
      },
      top: {
        content: "drawer__content--top",
      },
    },
  },
});

export type DrawerVariants = VariantProps<typeof drawerVariants>;
