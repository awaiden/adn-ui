import {
  OTPFieldInput,
  OTPFieldRoot,
  OTPFieldSeparator,
} from "./otp-field";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/otp-field/content.md
 */
export const OTPField = {
  Input: OTPFieldInput,
  Root: OTPFieldRoot,
  Separator: OTPFieldSeparator,
};

export {
  OTPFieldInput,
  OTPFieldRoot,
  OTPFieldSeparator,
};

export type {
  OTPFieldInputProps,
  OTPFieldRootProps,
  OTPFieldSeparatorProps,
} from "./otp-field";
export { OTPFieldContext, useOTPFieldContext } from "./otp-field.context";
export { type OTPFieldVariants, otpFieldVariants } from "./otp-field.variants";
