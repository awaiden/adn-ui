import { tv, type VariantProps } from "tailwind-variants";

export const navigationMenuVariants = tv({
  slots: {
    root: "navigation-menu",
    list: "navigation-menu__list group",
    item: "navigation-menu__item",
    trigger: "navigation-menu__trigger group",
    triggerIcon: "navigation-menu__trigger-icon",
    content: "navigation-menu__content",
    link: "navigation-menu__link group",
    viewport: "navigation-menu__viewport",
    indicator: "navigation-menu__indicator",
    indicatorInner: "navigation-menu__indicator-inner",
    viewportWrapper: "navigation-menu__viewport-wrapper",
  },
});

export type NavigationMenuVariants = VariantProps<typeof navigationMenuVariants>;
