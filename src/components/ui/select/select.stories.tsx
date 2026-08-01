"use client";

import React from "react";

import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectPositioner,
  SelectPopup,
  SelectList,
  SelectItem,
} from "./select";

export default {
  title: "Components/Select",
  component: SelectRoot,
};

export const Default = () => (
  <SelectRoot defaultValue="apple">
    <SelectTrigger className="flex w-48 items-center justify-between rounded-md border px-3 py-1.5 text-sm">
      <SelectValue placeholder="Select fruit..." />
    </SelectTrigger>
    <SelectPortal>
      <SelectPositioner>
        <SelectPopup className="bg-popover text-popover-foreground rounded-md border shadow-md">
          <SelectList>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectList>
        </SelectPopup>
      </SelectPositioner>
    </SelectPortal>
  </SelectRoot>
);
