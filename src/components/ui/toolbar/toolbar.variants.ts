import { tv, type VariantProps } from "tailwind-variants";

export const toolbarVariants = tv({
  slots: {
    button: "toolbar__button",
    link: "toolbar__link",
    root: "toolbar",
    separator: "toolbar__separator",
    toggleItem: "toolbar__toggle-item",
  },
});

export type ToolbarVariants = VariantProps<typeof toolbarVariants>;
