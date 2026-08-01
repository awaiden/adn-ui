"use client";

import { RadioGroup, RadioIndicator, RadioRoot } from "./radio";

export function RadioDemo() {
  return (
    <RadioGroup defaultValue="fuji">
      <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
        <RadioRoot value="fuji">
          <RadioIndicator />
        </RadioRoot>
        Fuji Apple
      </label>
      <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
        <RadioRoot value="gala">
          <RadioIndicator />
        </RadioRoot>
        Gala Apple
      </label>
      <label className="flex cursor-pointer items-center gap-2 text-sm font-medium">
        <RadioRoot value="granny">
          <RadioIndicator />
        </RadioRoot>
        Granny Smith
      </label>
    </RadioGroup>
  );
}
