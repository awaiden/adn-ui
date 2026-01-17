import { tv, type VariantProps } from "tailwind-variants";

export const menuVariants = tv({
  slots: {
    arrow: "menu__arrow",
    backdrop: "menu__backdrop",
    checkboxItem: "menu__checkbox-item",
    group: "menu__group",
    groupLabel: "menu__group-label",
    item: "menu__item",
    popup: "menu__popup",
    portal: "menu__portal",
    positioner: "menu__positioner",
    radioGroup: "menu__radio-group",
    radioItem: "menu__radio-item",
    root: "menu",
    separator: "menu__separator",
    submenu: "menu__submenu",
    submenuTrigger: "menu__submenu__trigger",
    trigger: "menu__trigger",
  },
});

export type MenuVariants = VariantProps<typeof menuVariants>;
