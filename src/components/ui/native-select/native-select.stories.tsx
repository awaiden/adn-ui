"use client";

import React from "react";

import { NativeSelect, NativeSelectOption, NativeSelectRoot } from "./index";

export default {
  title: "Components/NativeSelect",
  component: NativeSelectRoot,
};

export const Default = () => (
  <NativeSelectRoot className="w-64">
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
    <NativeSelectOption value="orange">Orange</NativeSelectOption>
  </NativeSelectRoot>
);

export const Sizes = () => (
  <div className="flex flex-col gap-4 w-64">
    <NativeSelect size="sm">
      <NativeSelect.Option value="sm">Small</NativeSelect.Option>
    </NativeSelect>
    <NativeSelect size="md">
      <NativeSelect.Option value="md">Medium</NativeSelect.Option>
    </NativeSelect>
    <NativeSelect size="lg">
      <NativeSelect.Option value="lg">Large</NativeSelect.Option>
    </NativeSelect>
  </div>
);
