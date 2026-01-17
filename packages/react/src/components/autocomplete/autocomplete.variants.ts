/** biome-ignore-all assist/source/useSortedKeys: <> */
import { tv, type VariantProps } from "tailwind-variants";

export const autocompleteVariants = tv({
  slots: {
    root: "autcomplete",
    input: "autocomplete__input",
    trigger: "autocomplete__trigger",
    icon: "autocomplete__icon",
    clear: "autocomplete__clear",
    value: "autocomplete__value",

    portal: "autocomplete__portal",
    backdrop: "autocomplete__backdrop",
    positioner: "autocomplete__positioner",
    popup: "autocomplete__popup",
    arrow: "autocomplete__arrow",

    status: "autocomplete__status",
    empty: "autocomplete__empty",

    list: "autocomplete__list",
    row: "autocomplete__row",
    item: "autocomplete__item",

    separator: "autocomplete__separator",

    group: "autocomplete__group",
    groupLabel: "autocomplete__group-label",
  },
});

export type AutocompleteVariants = VariantProps<typeof autocompleteVariants>;
