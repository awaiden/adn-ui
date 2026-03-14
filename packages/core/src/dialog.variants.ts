import { tv, type VariantProps } from "tailwind-variants";

export const dialogVariants = tv({
  slots: {
    close: "dialog__close",
    content: "dialog__content",
    description: "dialog__description",
    footer: "dialog__footer",
    header: "dialog__header",
    overlay: "dialog__overlay",
    title: "dialog__title",
  },
});

export type DialogVariants = VariantProps<typeof dialogVariants>;
