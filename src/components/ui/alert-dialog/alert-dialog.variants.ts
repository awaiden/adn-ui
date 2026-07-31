/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const alertDialogVariants = tv({
  slots: {
    root: "alert-dialog",
    trigger: "alert-dialog__trigger",
    portal: "alert-dialog__portal",
    backdrop: "alert-dialog__backdrop",
    popup: "alert-dialog__popup",
    title: "alert-dialog__title",
    description: "alert-dialog__description",
    close: "alert-dialog__close",
  },
  variants: {
    variant: {
      default: {
        popup: "alert-dialog__popup--default",
      },
      destructive: {
        popup: "alert-dialog__popup--destructive",
      },
    },
    size: {
      sm: {
        popup: "alert-dialog__popup--sm",
      },
      md: {
        popup: "alert-dialog__popup--md",
      },
      lg: {
        popup: "alert-dialog__popup--lg",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type AlertDialogVariants = VariantProps<typeof alertDialogVariants>;
