/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const accordionVariants = tv({
  slots: {
    root: "accordion",
    item: "accordion__item",
    header: "accordion__header",
    trigger: "accordion__trigger",
    chevron: "accordion__chevron",
    content: "accordion__content",
    contentText: "accordion__content-text",
  },
});

export type AccordionVariants = VariantProps<typeof accordionVariants>;
