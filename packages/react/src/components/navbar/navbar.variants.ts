import { tv, type VariantProps } from "tailwind-variants";

export const navbarVariants = tv({
  slots: {
    container: "navbar__container",
    content: "navbar__content",
    list: "navbar__list",
    listItem: "navbar__list-item",
    menu: "navbar__menu",
    menuItem: "navbar__menu-item",
    root: "navbar",
    toggle: "navbar__toggle",
  },
});

export type NavbarVariants = VariantProps<typeof navbarVariants>;
