"use client";

import React from "react";
import { FieldsetRoot, FieldsetLegend } from "./fieldset";
import { FieldRoot, FieldLabel, FieldControl } from "../field";
import { InputRoot } from "../input";

export default {
  title: "Components/Fieldset",
  component: FieldsetRoot,
};

export const Default = () => (
  <FieldsetRoot className="border p-4 rounded-lg space-y-4 max-w-md">
    <FieldsetLegend className="px-2 font-medium text-sm">Personal Information</FieldsetLegend>
    <FieldRoot className="space-y-1">
      <FieldLabel>Full Name</FieldLabel>
      <FieldControl><InputRoot placeholder="John Doe" /></FieldControl>
    </FieldRoot>
  </FieldsetRoot>
);
