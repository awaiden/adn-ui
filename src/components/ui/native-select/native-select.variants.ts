/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const nativeSelectVariants = tv({
  slots: {
    root: "native-select__root",
    select: "native-select",
    icon: "native-select__icon",
    option: "native-select__option",
    optgroup: "native-select__optgroup",
  },
  variants: {
    size: {
      sm: {
        root: "native-select__root--sm",
        select: "native-select--sm",
        icon: "native-select__icon--sm",
      },
      md: {
        root: "native-select__root--md",
        select: "native-select--md",
        icon: "native-select__icon--md",
      },
      lg: {
        root: "native-select__root--lg",
        select: "native-select--lg",
        icon: "native-select__icon--lg",
      },
    },
    variant: {
      default: {
        select: "native-select--default",
      },
      outline: {
        select: "native-select--outline",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
});

export type NativeSelectVariants = VariantProps<typeof nativeSelectVariants>;
