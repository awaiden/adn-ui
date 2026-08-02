"use client";

import "./otp-field.css";
import { OTPField as BaseOTPField } from "@base-ui/react/otp-field";
import type React from "react";
import { cn } from "tailwind-variants";

import { OTPFieldContext, useOTPFieldContext } from "./otp-field.context";
import { otpFieldVariants, type OTPFieldVariants } from "./otp-field.variants";

export type OTPFieldRootProps = OTPFieldVariants &
  React.ComponentProps<typeof BaseOTPField.Root>;

export const OTPFieldRoot = ({ children, className, size, ...props }: OTPFieldRootProps) => {
  const slots = otpFieldVariants({ size });

  return (
    <OTPFieldContext.Provider value={{ slots }}>
      <BaseOTPField.Root className={cn(slots.root(), className)} {...props}>
        {children}
      </BaseOTPField.Root>
    </OTPFieldContext.Provider>
  );
};

export type OTPFieldInputProps = React.ComponentProps<typeof BaseOTPField.Input>;

export const OTPFieldInput = ({ className, ...props }: OTPFieldInputProps) => {
  const { slots } = useOTPFieldContext();
  return <BaseOTPField.Input className={cn(slots.input(), className)} {...props} />;
};

export type OTPFieldSeparatorProps = React.ComponentProps<typeof BaseOTPField.Separator>;

export const OTPFieldSeparator = ({ className, ...props }: OTPFieldSeparatorProps) => {
  const { slots } = useOTPFieldContext();
  return <BaseOTPField.Separator className={cn(slots.separator(), className)} {...props} />;
};
