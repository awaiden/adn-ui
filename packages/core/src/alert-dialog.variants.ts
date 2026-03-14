import { tv, type VariantProps } from "tailwind-variants";

export const alertDialogVariants = tv({
  slots: {
    action: "alert-dialog__action",
    cancel: "alert-dialog__cancel",
    content: "alert-dialog__content",
    description: "alert-dialog__description",
    footer: "alert-dialog__footer",
    header: "alert-dialog__header",
    overlay: "alert-dialog__overlay",
    title: "alert-dialog__title",
  },
});

export type AlertDialogVariants = VariantProps<typeof alertDialogVariants>;
