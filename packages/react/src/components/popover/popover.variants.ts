import { tv, type VariantProps } from "tailwind-variants";

export const popoverVariants = tv({
  slots: {
    arrow: "popover__arrow",
    backdrop: "popover__backdrop",
    close: "popover__close",
    content: "popover__content",
    description: "popover__description",
    popup: "popover__popup",
    portal: "popover__portal",
    positioner: "popover__positioner",
    root: "popover",
    title: "popover__title",
    trigger: "popover__trigger",
    viewport: "popover__viewport",
  },
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
