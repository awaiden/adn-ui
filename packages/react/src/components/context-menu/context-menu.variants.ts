/** biome-ignore-all assist/source/useSortedKeys: <> */
import { tv, type VariantProps } from "tailwind-variants";

export const contextMenuVariants = tv({
  slots: {
    root: "context-menu",

    trigger: "context-menu__trigger",

    portal: "context-menu__portal",
    backdrop: "context-menu__backdrop",
    positioner: "context-menu__positioner",
    popup: "context-menu__popup",
    arrow: "context-menu__arrow",

    item: "context-menu__item",
    separator: "context-menu__separator",

    group: "context-menu__group",
    groupLabel: "context-menu__group-label",

    submenu: "context-menu__submenu",
    submenuTrigger: "context-menu__submenu-trigger",
  },
});

export type ContextMenuVariants = VariantProps<typeof contextMenuVariants>;
