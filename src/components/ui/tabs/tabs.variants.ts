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
        list: "tabs__list--default",
        tab: "tabs__tab--default",
        indicator: "tabs__indicator--default",
      },
      pills: {
        list: "tabs__list--pills",
        tab: "tabs__tab--pills",
        indicator: "tabs__indicator--pills",
      },
      underline: {
        list: "tabs__list--underline",
        tab: "tabs__tab--underline",
        indicator: "tabs__indicator--underline",
      },
      segmented: {
        list: "tabs__list--segmented",
        tab: "tabs__tab--segmented",
        indicator: "tabs__indicator--segmented",
      },
      outline: {
        list: "tabs__list--outline",
        tab: "tabs__tab--outline",
        indicator: "tabs__indicator--outline",
      },
      line: {
        list: "tabs__list--line",
        tab: "tabs__tab--line",
        indicator: "tabs__indicator--line",
      },
    },
    size: {
      sm: {
        tab: "tabs__tab--sm",
        panel: "tabs__panel--sm",
      },
      md: {
        tab: "tabs__tab--md",
        panel: "tabs__panel--md",
      },
      lg: {
        tab: "tabs__tab--lg",
        panel: "tabs__panel--lg",
      },
    },
    isFitted: {
      true: {
        list: "tabs__list--fitted",
        tab: "tabs__tab--fitted",
      },
      false: {},
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    isFitted: false,
  },
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
