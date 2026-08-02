/* eslint-disable perfectionist/sort-objects */

import { tv, type VariantProps } from "tailwind-variants";

export const otpFieldVariants = tv({
  slots: {
    root: "otp-field",
    input: "otp-field__input",
    separator: "otp-field__separator",
  },
  variants: {
    size: {
      sm: {
        input: "otp-field__input--sm",
      },
      md: {
        input: "otp-field__input--md",
      },
      lg: {
        input: "otp-field__input--lg",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type OTPFieldVariants = VariantProps<typeof otpFieldVariants>;
