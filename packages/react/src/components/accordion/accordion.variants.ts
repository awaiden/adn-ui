import { tv, type VariantProps } from "tailwind-variants";

export const accordionVariants = tv({
  slots: {
    content: "accordion__content",
    header: "accordion__header",
    item: "accordion__item",
    panel: "accordion__panel",
    root: "accordion",
    trigger: "accordion__trigger",
    triggerIcon: "accordion__trigger-icon",
  },
});

export type AccordionVariants = VariantProps<typeof accordionVariants>;
