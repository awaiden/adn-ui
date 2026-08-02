/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const commandVariants = tv({
  slots: {
    root: "command",
    dialogBackdrop: "command__dialog-backdrop",
    dialogPopup: "command__dialog-popup",
    inputWrapper: "command__input-wrapper",
    input: "command__input",
    list: "command__list",
    empty: "command__empty",
    group: "command__group",
    groupHeading: "command__group-heading",
    groupItems: "command__group-items",
    item: "command__item",
    shortcut: "command__shortcut",
    separator: "command__separator",
  },
  variants: {
    size: {
      sm: {
        root: "command--sm",
        inputWrapper: "px-3 py-2",
        item: "px-2 py-1.5 text-xs",
      },
      md: {
        root: "command--md",
      },
      lg: {
        root: "command--lg",
        inputWrapper: "px-4 py-3.5",
        item: "px-3 py-2.5 text-base",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CommandVariants = VariantProps<typeof commandVariants>;
