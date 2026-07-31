/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const badgeVariants = tv({
  slots: {
    root: "badge",
  },
  variants: {
    variant: {
      default: {
        root: "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent",
      },
      secondary: {
        root: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
      },
      destructive: {
        root: "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent",
      },
      outline: {
        root: "text-foreground border-border bg-background hover:bg-accent hover:text-accent-foreground",
      },
    },
    size: {
      sm: {
        root: "px-2 py-0.5 text-xs font-semibold",
      },
      md: {
        root: "px-2.5 py-0.5 text-xs font-semibold",
      },
      lg: {
        root: "px-3 py-1 text-sm font-semibold",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type BadgeVariants = VariantProps<typeof badgeVariants>;
