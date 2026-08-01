"use client";

import React from "react";

import { FieldRoot, FieldLabel, FieldControl } from "../field";
import { InputRoot } from "../input";
import { FieldsetRoot, FieldsetLegend } from "./fieldset";

export default {
  title: "Components/Fieldset",
  component: FieldsetRoot,
};

export const Default = () => (
  <FieldsetRoot className="max-w-md space-y-4 rounded-lg border p-4">
    <FieldsetLegend className="px-2 text-sm font-medium">Personal Information</FieldsetLegend>
    <FieldRoot className="space-y-1">
      <FieldLabel>Full Name</FieldLabel>
      <FieldControl>
        <InputRoot placeholder="John Doe" />
      </FieldControl>
    </FieldRoot>
  </FieldsetRoot>
);
