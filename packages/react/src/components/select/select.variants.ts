/** biome-ignore-all assist/source/useSortedKeys: believe me its better */
import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
  slots: {
    root: "select",
    trigger: "select__trigger",
    value: "select__value",
    icon: "select__icon",

    portal: "select__portal",
    backdrop: "select__backdrop",
    positioner: "select__positioner",
    popup: "select__popup",
    arrow: "select__arrow",

    list: "select__list",
    item: "select__item",
    itemText: "select__item-text",
    itemIndicator: "select__item-indicator",

    separator: "select__separator",

    group: "select__group",
    groupLabel: "select__group-label",
  },
});

export type SelectVariants = VariantProps<typeof selectVariants>;
