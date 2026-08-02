"use client";

import {
  OTPFieldInput,
  OTPFieldRoot,
  OTPFieldSeparator,
} from "./otp-field";

export function OTPFieldDemo({ length = 6 }: { length?: number }) {
  return (
    <OTPFieldRoot length={length}>
      {Array.from({ length: 3 }, (_, index) => (
        <OTPFieldInput key={index} aria-label={`Character ${index + 1} of ${length}`} />
      ))}
      <OTPFieldSeparator />
      {Array.from({ length: 3 }, (_, index) => (
        <OTPFieldInput key={index + 3} aria-label={`Character ${index + 4} of ${length}`} />
      ))}
    </OTPFieldRoot>
  );
}
