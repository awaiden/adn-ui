import { tv, type VariantProps } from "tailwind-variants";

export const drawerVariants = tv({
  defaultVariants: {
    position: "left",
  },
  slots: {
    backdrop: "drawer__backdrop",
    close: "drawer__close",
    description: "drawer__description",
    popup: "drawer__popup",
    portal: "drawer__portal",
    root: "drawer",
    title: "drawer__title",
    trigger: "drawer__trigger",
    viewport: "drawer__viewport",
  },
  variants: {
    position: {
      bottom: { popup: "drawer--bottom" },
      left: { popup: "drawer--left" },
      right: { popup: "drawer--right" },
      top: { popup: "drawer--top" },
    },
  },
});

export type DrawerVariants = VariantProps<typeof drawerVariants>;
