import { tv, type VariantProps } from "tailwind-variants";

export const tabsVariants = tv({
  slots: {
    content: "tabs__content",
    list: "tabs__list",
    root: "tabs",
    trigger: "tabs__trigger",
  },
});

export type TabsVariants = VariantProps<typeof tabsVariants>;
