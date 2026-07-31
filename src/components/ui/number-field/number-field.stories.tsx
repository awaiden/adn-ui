"use client";

import React from "react";
import {
  NumberFieldRoot,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
} from "./number-field";

export default {
  title: "Components/NumberField",
  component: NumberFieldRoot,
};

export const Default = () => (
  <NumberFieldRoot defaultValue={1} className="flex items-center gap-1 max-w-xs">
    <NumberFieldDecrement />
    <NumberFieldInput className="w-16 text-center border rounded py-1 text-sm" />
    <NumberFieldIncrement />
  </NumberFieldRoot>
);
