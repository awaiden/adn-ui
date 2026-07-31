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
    <SelectTrigger className="w-48 flex justify-between items-center px-3 py-1.5 border rounded-md text-sm">
      <SelectValue placeholder="Select fruit..." />
    </SelectTrigger>
    <SelectPortal>
      <SelectPositioner>
        <SelectPopup className="border rounded-md shadow-md bg-popover text-popover-foreground">
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
