import { tv, type VariantProps } from "tailwind-variants";

export const dialogVariants = tv({
  slots: {
    root: "dialog",
    trigger: "dialog__trigger",

    title: "dialog__title",
    description: "dialog__description",
    close: "dialog__close",

    portal: "dialog__portal",
    backdrop: "dialog__backdrop",
    popup: "dialog__popup",
    viewport: "dialog__viewport",
    content: "dialog__content",
  },
});

export type DialogVariants = VariantProps<typeof dialogVariants>;
