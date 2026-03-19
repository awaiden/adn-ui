import { tv, type VariantProps } from "tailwind-variants";

export const selectVariants = tv({
  slots: {
    content: "select__content",
    icon: "select__icon",
    item: "select__item",
    itemIndicator: "select__item-indicator",
    itemIndicatorIcon: "select__item-indicator-icon",
    label: "select__label",
    scrollButton: "select__scroll-button",
    scrollButtonIcon: "select__scroll-button-icon",
    separator: "select__separator",
    trigger: "select__trigger",
    viewport: "select__viewport",
  },
  variants: {
    viewport: {
      popper: {
        viewport: "select__viewport--popper",
      },
    },
  },
});

export type SelectVariants = VariantProps<typeof selectVariants>;
