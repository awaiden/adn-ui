/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const textareaVariants = tv({
  slots: {
    root: "textarea",
  },
  variants: {
    variant: {
      default: {
        root: "border border-input bg-background text-foreground shadow-xs placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring",
      },
      filled: {
        root: "border border-transparent bg-muted text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring",
      },
    },
    size: {
      sm: {
        root: "min-h-16 px-2.5 py-1.5 text-xs rounded-md",
      },
      md: {
        root: "min-h-20 px-3 py-2 text-sm rounded-md",
      },
      lg: {
        root: "min-h-28 px-4 py-3 text-base rounded-lg",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type TextareaVariants = VariantProps<typeof textareaVariants>;
