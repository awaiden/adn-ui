import { tv, type VariantProps } from "tailwind-variants";

import { buttonVariants } from "../button";

export const iconButtonVariants = tv({
  base: "icon-button",
  defaultVariants: {
    isIconOnly: true,
  },
  extend: buttonVariants,
});

export type IconButtonVariants = VariantProps<typeof iconButtonVariants>;
