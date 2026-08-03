"use client";

import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldPrefix,
  FieldRoot,
  FieldSuffix,
} from "./field";

export function FieldDemo({
  description = "Visible on your public profile.",
  label = "Username",
  placeholder = "Enter your username",
  required = true,
}: {
  description?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex w-72 flex-col gap-6">
      <FieldRoot>
        <FieldLabel>{label}</FieldLabel>
        <FieldControl placeholder={placeholder} required={required} />
        <FieldError match="valueMissing">This field is required.</FieldError>
        <FieldDescription>{description}</FieldDescription>
      </FieldRoot>

      <FieldRoot>
        <FieldLabel>Website URL</FieldLabel>
        <FieldGroup>
          <FieldPrefix>https://</FieldPrefix>
          <FieldControl placeholder="example" required={required} />
          <FieldSuffix>.com</FieldSuffix>
        </FieldGroup>
        <FieldError match="valueMissing">Website domain is required.</FieldError>
        <FieldDescription>Enter your website domain address.</FieldDescription>
      </FieldRoot>
    </div>
  );
}
