/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const comboboxVariants = tv({
  slots: {
    root: "combobox",
    inputGroup: "combobox__input-group",
    input: "combobox__input",
    trigger: "combobox__trigger",
    clear: "combobox__clear",
    chips: "combobox__chips",
    chip: "combobox__chip",
    chipRemove: "combobox__chip-remove",
    value: "combobox__value",
    portal: "combobox__portal",
    positioner: "combobox__positioner",
    popup: "combobox__popup",
    list: "combobox__list",
    item: "combobox__item",
    itemIndicator: "combobox__item-indicator",
    empty: "combobox__empty",
  },
  variants: {
    size: {
      sm: {
        inputGroup: "combobox__input-group--sm",
        input: "combobox__input--sm",
        item: "combobox__item--sm",
      },
      md: {
        inputGroup: "combobox__input-group--md",
        input: "combobox__input--md",
        item: "combobox__item--md",
      },
      lg: {
        inputGroup: "combobox__input-group--lg",
        input: "combobox__input--lg",
        item: "combobox__item--lg",
      },
    },
    variant: {
      default: {
        inputGroup: "combobox__input-group--default",
      },
      outline: {
        inputGroup: "combobox__input-group--outline",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export type ComboboxVariants = VariantProps<typeof comboboxVariants>;
