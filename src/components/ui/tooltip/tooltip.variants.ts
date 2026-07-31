/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const tooltipVariants = tv({
  slots: {
    provider: "tooltip-provider",
    root: "tooltip",
    trigger: "tooltip__trigger",
    positioner: "tooltip__positioner",
    popup: "tooltip__popup",
    arrow: "tooltip__arrow",
    viewport: "tooltip__viewport",
  },
  variants: {
    variant: {
      default: {
        popup: "bg-popover text-popover-foreground border border-border shadow-md",
        arrow: "fill-popover stroke-border",
      },
      dark: {
        popup: "bg-foreground text-background shadow-md",
        arrow: "fill-foreground stroke-transparent",
      },
    },
  },
  defaultVariants: {
    variant: "dark",
  },
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
