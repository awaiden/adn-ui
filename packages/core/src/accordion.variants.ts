import { tv, type VariantProps } from "tailwind-variants";

export const accordionVariants = tv({
  slots: {
    chevron: "accordion__chevron",
    content: "accordion__content",
    header: "accordion__header",
    item: "accordion__item",
    root: "accordion",
    trigger: "accordion__trigger",
  },
});

export type AccordionVariants = VariantProps<typeof accordionVariants>;
