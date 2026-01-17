import { tv, type VariantProps } from "tailwind-variants";

export const tabsVariants = tv({
  slots: {
    indicator: "tabs__indicator",
    list: "tabs__list",
    panel: "tabs__panel",
    root: "tabs",
    tab: "tabs__tab",
  },
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
