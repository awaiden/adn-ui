/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const sidebarVariants = tv({
  slots: {
    provider: "sidebar-provider",
    root: "sidebar",
    header: "sidebar__header",
    content: "sidebar__content",
    footer: "sidebar__footer",
    group: "sidebar__group",
    groupLabel: "sidebar__group-label",
    groupContent: "sidebar__group-content",
    menu: "sidebar__menu",
    menuItem: "sidebar__menu-item",
    menuButton: "sidebar__menu-button",
    trigger: "sidebar__trigger",
  },
  variants: {},
  defaultVariants: {},
});

export type SidebarVariants = VariantProps<typeof sidebarVariants>;
