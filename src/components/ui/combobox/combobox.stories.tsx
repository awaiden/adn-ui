"use client";

import React from "react";

import {
  ComboboxRoot,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxPopup,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "./combobox";

export default {
  title: "Components/Combobox",
  component: ComboboxRoot,
};

export const Default = () => (
  <ComboboxRoot className="w-full max-w-xs">
    <div className="flex gap-1">
      <ComboboxInput placeholder="Select item..." />
      <ComboboxTrigger />
    </div>
    <ComboboxPortal>
      <ComboboxPositioner>
        <ComboboxPopup>
          <ComboboxList>
            <ComboboxItem value="apple">Apple</ComboboxItem>
            <ComboboxItem value="banana">Banana</ComboboxItem>
            <ComboboxItem value="orange">Orange</ComboboxItem>
          </ComboboxList>
          <ComboboxEmpty>No match found.</ComboboxEmpty>
        </ComboboxPopup>
      </ComboboxPositioner>
    </ComboboxPortal>
  </ComboboxRoot>
);
