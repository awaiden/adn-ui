"use client";

import React from "react";

import {
  OTPFieldInput,
  OTPFieldRoot,
  OTPFieldSeparator,
} from "./otp-field";

export default {
  title: "Components/OTPField",
  component: OTPFieldRoot,
};

export const Default = () => (
  <OTPFieldRoot length={6}>
    {Array.from({ length: 6 }, (_, index) => (
      <OTPFieldInput key={index} aria-label={`Character ${index + 1} of 6`} />
    ))}
  </OTPFieldRoot>
);

export const WithSeparator = () => (
  <OTPFieldRoot length={6}>
    <OTPFieldInput aria-label="Character 1 of 6" />
    <OTPFieldInput aria-label="Character 2 of 6" />
    <OTPFieldInput aria-label="Character 3 of 6" />
    <OTPFieldSeparator />
    <OTPFieldInput aria-label="Character 4 of 6" />
    <OTPFieldInput aria-label="Character 5 of 6" />
    <OTPFieldInput aria-label="Character 6 of 6" />
  </OTPFieldRoot>
);
