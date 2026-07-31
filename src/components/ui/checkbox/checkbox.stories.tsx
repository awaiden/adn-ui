"use client";

import React from "react";
import { CheckboxRoot, CheckboxIndicator } from "./checkbox";

export default {
  title: "Components/Checkbox",
  component: CheckboxRoot,
};

export const Default = () => (
  <CheckboxRoot id="terms">
    <CheckboxIndicator />
  </CheckboxRoot>
);

export const WithLabel = () => (
  <div className="flex items-center gap-2">
    <CheckboxRoot id="terms-label">
      <CheckboxIndicator />
    </CheckboxRoot>
    <label htmlFor="terms-label" className="text-sm font-medium">Accept terms and conditions</label>
  </div>
);
