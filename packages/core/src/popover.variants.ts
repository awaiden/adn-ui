import { tv, type VariantProps } from "tailwind-variants";

export const popoverVariants = tv({
  slots: {
    arrow: "popover__arrow",
    close: "popover__close",
    closeIcon: "popover__close-icon",
    srOnly: "sr-only",
    content: "popover__content",
  },
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
