import { tv, type VariantProps } from "tailwind-variants";

import { buttonVariants } from "../button";

export const toggleButtonVariants = tv({
  base: "toggle-button",
  extend: buttonVariants,
});

export type ToggleButtonVariants = VariantProps<typeof toggleButtonVariants>;
