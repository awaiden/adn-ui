import { tv, type VariantProps } from "tailwind-variants";

export const alertDialogVariants = tv({
  slots: {
    backdrop: "alert-dialog__backdrop",
    close: "alert-dialog__close",
    description: "alert-dialog__description",
    popup: "alert-dialog__popup",
    portal: "alert-dialog__portal",
    root: "alert-dialog",
    title: "alert-dialog__title",
    trigger: "alert-dialog__trigger",
    viewport: "alert-dialog__viewport",
    content: "alert-dialog__content",
  },
});

export type AlertDialogVariants = VariantProps<typeof alertDialogVariants>;
