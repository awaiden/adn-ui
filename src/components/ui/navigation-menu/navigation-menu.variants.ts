import { tv, type VariantProps } from "tailwind-variants";

export const navigationMenuVariants = tv({
  slots: {
    content: "navigation-menu__content",
    indicator: "navigation-menu__indicator",
    link: "navigation-menu__link",
    list: "navigation-menu__list",
    root: "navigation-menu",
    trigger: "navigation-menu__trigger",
    viewport: "navigation-menu__viewport",
    viewportWrapper: "navigation-menu__viewport-wrapper",
  },
});

export type NavigationMenuVariants = VariantProps<typeof navigationMenuVariants>;
