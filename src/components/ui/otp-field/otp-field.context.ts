"use client";

import { createContext, useContext } from "react";

import { otpFieldVariants } from "./otp-field.variants";

export type OTPFieldContext = {
  slots: ReturnType<typeof otpFieldVariants>;
};

export const OTPFieldContext = createContext<OTPFieldContext | null>(null);

export const useOTPFieldContext = () => {
  const context = useContext(OTPFieldContext);
  return context ?? { slots: otpFieldVariants() };
};
