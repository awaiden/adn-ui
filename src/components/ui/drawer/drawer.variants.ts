/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const drawerVariants = tv({
  slots: {
    root: "drawer",
    trigger: "drawer__trigger",
    portal: "drawer__portal",
    backdrop: "drawer__backdrop",
    viewport: "drawer__viewport",
    popup: "drawer__popup",
    content: "drawer__content",
    title: "drawer__title",
    description: "drawer__description",
    close: "drawer__close",
  },
  variants: {
    side: {
      bottom: {
        viewport: "items-end justify-center",
        popup:
          "w-full max-h-[85vh] rounded-t-xl border-t border-border data-starting-style:translate-y-full data-ending-style:translate-y-full",
      },
      right: {
        viewport: "items-stretch justify-end",
        popup:
          "h-dvh w-full max-w-sm border-l border-border data-starting-style:translate-x-full data-ending-style:translate-x-full",
      },
      left: {
        viewport: "items-stretch justify-start",
        popup:
          "h-dvh w-full max-w-sm border-r border-border data-starting-style:-translate-x-full data-ending-style:-translate-x-full",
      },
      top: {
        viewport: "items-start justify-center",
        popup:
          "w-full max-h-[85vh] rounded-b-xl border-b border-border data-starting-style:-translate-y-full data-ending-style:-translate-y-full",
      },
    },
  },
  defaultVariants: {
    side: "bottom",
  },
});

export type DrawerVariants = VariantProps<typeof drawerVariants>;
