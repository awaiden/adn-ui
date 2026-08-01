"use client";

import React from "react";
import { RadioGroupRoot, RadioItem, RadioIndicator } from "./radio";

export default {
  title: "Components/Radio",
  component: RadioGroupRoot,
};

export const Default = () => (
  <RadioGroupRoot defaultValue="option-1" className="space-y-2">
    <div className="flex items-center gap-2">
      <RadioItem value="option-1" id="r1">
        <RadioIndicator />
      </RadioItem>
      <label htmlFor="r1" className="text-sm">
        Option 1
      </label>
    </div>
    <div className="flex items-center gap-2">
      <RadioItem value="option-2" id="r2">
        <RadioIndicator />
      </RadioItem>
      <label htmlFor="r2" className="text-sm">
        Option 2
      </label>
    </div>
  </RadioGroupRoot>
);
