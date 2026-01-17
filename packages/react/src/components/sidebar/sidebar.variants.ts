import { tv, type VariantProps } from "tailwind-variants";

export const sidebarVariants = tv({
  slots: {
    content: "sidebar__content",
    footer: "sidebar__footer",
    header: "sidebar__header",
    menu: "sidebar__menu",
    menuItem: "sidebar__menu-item",
    menuLabel: "sidebar__menu-label",
    outlet: "sidebar__outlet",
    panel: "sidebar__panel",
    root: "sidebar",
    trigger: "sidebar__trigger",
  },
});

export type SidebarVariants = VariantProps<typeof sidebarVariants>;
