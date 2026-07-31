"use client";

import { CheckboxIndicator, CheckboxRoot } from "../checkbox";
import { CheckboxGroupRoot } from "./checkbox-group";

export function CheckboxGroupDemo({
  orientation = "vertical",
}: {
  orientation?: "vertical" | "horizontal";
}) {
  return (
    <CheckboxGroupRoot defaultValue={["fuji"]} orientation={orientation}>
      <div className="text-sm font-semibold mb-1">Select Apples</div>
      <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
        <CheckboxRoot value="fuji">
          <CheckboxIndicator />
        </CheckboxRoot>
        Fuji
      </label>
      <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
        <CheckboxRoot value="gala">
          <CheckboxIndicator />
        </CheckboxRoot>
        Gala
      </label>
      <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
        <CheckboxRoot value="granny">
          <CheckboxIndicator />
        </CheckboxRoot>
        Granny Smith
      </label>
    </CheckboxGroupRoot>
  );
}
