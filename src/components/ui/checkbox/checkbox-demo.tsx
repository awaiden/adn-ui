"use client";

import { CheckboxIndicator, CheckboxRoot } from "./checkbox";

export function CheckboxDemo({
  defaultChecked = true,
  disabled = false,
  label = "Enable notifications",
  size = "md",
}: {
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <label className="text-foreground flex cursor-pointer items-center gap-2 text-sm font-medium select-none">
      <CheckboxRoot defaultChecked={defaultChecked} disabled={disabled} size={size}>
        <CheckboxIndicator />
      </CheckboxRoot>
      {label}
    </label>
  );
}
