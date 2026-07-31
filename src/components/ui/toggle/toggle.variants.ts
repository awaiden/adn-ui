/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const toggleVariants = tv({
  slots: {
    root: "toggle",
  },
  variants: {
    variant: {
      default: {
        root: "bg-transparent hover:bg-muted hover:text-muted-foreground data-pressed:bg-accent data-pressed:text-accent-foreground",
      },
      outline: {
        root: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground data-pressed:bg-accent data-pressed:text-accent-foreground",
      },
    },
    size: {
      sm: {
        root: "h-8 px-2 min-w-8 text-xs gap-1.5",
      },
      md: {
        root: "h-9 px-2.5 min-w-9 text-sm gap-2",
      },
      lg: {
        root: "h-10 px-3 min-w-10 text-base gap-2.5",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type ToggleVariants = VariantProps<typeof toggleVariants>;
