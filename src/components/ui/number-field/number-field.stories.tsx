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
  <NumberFieldRoot defaultValue={1} className="flex max-w-xs items-center gap-1">
    <NumberFieldDecrement />
    <NumberFieldInput className="w-16 rounded border py-1 text-center text-sm" />
    <NumberFieldIncrement />
  </NumberFieldRoot>
);
