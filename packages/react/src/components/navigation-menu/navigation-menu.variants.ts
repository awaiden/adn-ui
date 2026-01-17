/** biome-ignore-all assist/source/useSortedKeys: <> */
import { tv, type VariantProps } from "tailwind-variants";

export const navigationMenuVariants = tv({
  slots: {
    root: "navigation-menu",

    list: "navigation-menu__list",
    item: "navigation-menu__item",
    trigger: "navigation-menu__trigger",
    icon: "navigation-menu__icon",
    content: "navigation-menu__content",
    link: "navigation-menu__link",

    portal: "navigation-menu__portal",
    backdrop: "navigation-menu__backdrop",
    positioner: "navigation-menu__positioner",
    popup: "navigation-menu__popup",
    arrow: "navigation-menu__arrow",
    viewport: "navigation-menu__viewport",
  },
});

export type NavigationMenuVariants = VariantProps<typeof navigationMenuVariants>;
