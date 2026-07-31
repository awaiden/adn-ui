/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const tabsVariants = tv({
  slots: {
    root: "tabs",
    list: "tabs__list",
    tab: "tabs__tab",
    indicator: "tabs__indicator",
    panel: "tabs__panel",
  },
  variants: {
    variant: {
      default: {
        list: "border-b border-border gap-1",
        tab: "data-active:text-foreground pb-2 font-medium",
        indicator: "bottom-0 h-0.5 bg-primary transition-all duration-200",
      },
      pills: {
        list: "bg-muted p-1 rounded-lg gap-1",
        tab: "rounded-md px-3 py-1.5 data-active:bg-background data-active:text-foreground data-active:shadow-xs",
        indicator: "bg-background rounded-md shadow-xs transition-all duration-200",
      },
      underline: {
        list: "border-b border-border gap-4",
        tab: "pb-2 border-b-2 border-transparent data-active:border-primary data-active:text-primary font-medium",
      },
    },
    size: {
      sm: {
        tab: "text-xs px-2.5 py-1",
        panel: "p-3 text-xs",
      },
      md: {
        tab: "text-sm px-3.5 py-1.5",
        panel: "p-4 text-sm",
      },
      lg: {
        tab: "text-base px-4 py-2",
        panel: "p-6 text-base",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
