"use client";

import { ToggleRoot } from "../toggle";
import { ToggleGroupRoot } from "./toggle-group";

export function ToggleGroupDemo() {
  return (
    <ToggleGroupRoot defaultValue={["left"]} aria-label="Text Alignment">
      <ToggleRoot value="left" aria-label="Align Left">
        Left
      </ToggleRoot>
      <ToggleRoot value="center" aria-label="Align Center">
        Center
      </ToggleRoot>
      <ToggleRoot value="right" aria-label="Align Right">
        Right
      </ToggleRoot>
    </ToggleGroupRoot>
  );
}
