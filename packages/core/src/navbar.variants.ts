import { tv, type VariantProps } from "tailwind-variants";

export const navbarVariants = tv({
  slots: {
    root: "navbar",
    brand: "navbar__brand",
    content: "navbar__content",
    item: "navbar__item",
    menu: "navbar__menu",
    menuItem: "navbar__menu-item",
    toggle: "navbar__toggle",
    toggleIcon: "navbar__toggle-icon",
    srOnly: "sr-only",
  },
  variants: {
    sticky: {
      true: {
        root: "navbar--sticky",
      },
    },
    fixed: {
      true: {
        root: "navbar--fixed",
      },
    },
    border: {
      true: {
        root: "navbar--border",
      },
    },
  },
});

export type NavbarVariants = VariantProps<typeof navbarVariants>;
