"use client";

import {
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubArea,
} from "./number-field";

export function NumberFieldDemo({
  defaultValue = 100,
  label = "Quantity",
}: {
  defaultValue?: number;
  label?: string;
}) {
  return (
    <NumberFieldRoot defaultValue={defaultValue} min={0}>
      <NumberFieldScrubArea>
        <label className="cursor-ew-resize text-sm font-medium">{label}</label>
      </NumberFieldScrubArea>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberFieldRoot>
  );
}
