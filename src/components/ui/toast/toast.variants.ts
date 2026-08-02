/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const toastVariants = tv({
  slots: {
    viewport: "toast-viewport",
    root: "toast",
    content: "toast__content",
    title: "toast__title",
    description: "toast__description",
    action: "toast__action",
    close: "toast__close",
  },
  variants: {
    variant: {
      default: {
        root: "toast--default",
      },
      success: {
        root: "toast--success",
      },
      warning: {
        root: "toast--warning",
      },
      destructive: {
        root: "toast--destructive",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ToastVariants = VariantProps<typeof toastVariants>;
