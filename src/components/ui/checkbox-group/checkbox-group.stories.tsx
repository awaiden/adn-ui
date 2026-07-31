"use client";

import React from "react";
import { CheckboxGroupRoot } from "./checkbox-group";
import { CheckboxRoot, CheckboxIndicator } from "../checkbox";

export default {
  title: "Components/CheckboxGroup",
  component: CheckboxGroupRoot,
};

export const Default = () => (
  <CheckboxGroupRoot className="space-y-2">
    <div className="flex items-center gap-2">
      <CheckboxRoot id="opt-1" value="opt-1"><CheckboxIndicator /></CheckboxRoot>
      <label htmlFor="opt-1" className="text-sm">Option 1</label>
    </div>
    <div className="flex items-center gap-2">
      <CheckboxRoot id="opt-2" value="opt-2"><CheckboxIndicator /></CheckboxRoot>
      <label htmlFor="opt-2" className="text-sm">Option 2</label>
    </div>
  </CheckboxGroupRoot>
);
