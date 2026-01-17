/** biome-ignore-all assist/source/useSortedKeys: believe me its better */
import { tv, type VariantProps } from "tailwind-variants";

export const comboboxVariants = tv({
  slots: {
    root: "combobox",
    input: "combobox__input",
    trigger: "combobox__trigger",
    icon: "combobox__icon",
    clear: "combobox__clear",
    value: "combobox__value",

    chips: "combobox__chips",
    chip: "combobox__chip",
    chipRemove: "combobox__chip-remove",

    portal: "combobox__portal",
    backdrop: "combobox__backdrop",
    positioner: "combobox__positioner",
    popup: "combobox__popup",
    arrow: "combobox__arrow",
    status: "combobox__status",
    empty: "combobox__empty",
    list: "combobox__list",
    row: "combobox__row",
    item: "combobox__item",
    itemIndicator: "combobox__item-indicator",

    separator: "combobox__separator",

    group: "combobox__group",
    groupLabel: "combobox__group-label",
  },
});

export type ComboboxVariants = VariantProps<typeof comboboxVariants>;
