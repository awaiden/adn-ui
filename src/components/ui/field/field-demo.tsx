"use client";

import { FieldControl, FieldDescription, FieldError, FieldLabel, FieldRoot } from "./field";

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
    <div className="w-72">
      <FieldRoot>
        <FieldLabel>{label}</FieldLabel>
        <FieldControl placeholder={placeholder} required={required} />
        <FieldError match="valueMissing">This field is required.</FieldError>
        <FieldDescription>{description}</FieldDescription>
      </FieldRoot>
    </div>
  );
}
