/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const alertDialogVariants = tv({
  slots: {
    overlay: "alert-dialog__overlay",
    content: "alert-dialog__content",
    title: "alert-dialog__title",
    description: "alert-dialog__description",
    actions: "alert-dialog__actions",
    cancel: "alert-dialog__cancel",
    action: "alert-dialog__action",
  },
});

export type AlertDialogVariants = VariantProps<typeof alertDialogVariants>;
