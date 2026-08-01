"use client";

import React from "react";
import { ToggleGroupRoot, ToggleItem } from "./toggle-group";

export default {
  title: "Components/ToggleGroup",
  component: ToggleGroupRoot,
};

export const Single = () => (
  <ToggleGroupRoot type="single" defaultValue="center" className="flex border rounded-md p-1 gap-1">
    <ToggleItem value="left" className="px-3 py-1 text-sm rounded">
      Left
    </ToggleItem>
    <ToggleItem value="center" className="px-3 py-1 text-sm rounded">
      Center
    </ToggleItem>
    <ToggleItem value="right" className="px-3 py-1 text-sm rounded">
      Right
    </ToggleItem>
  </ToggleGroupRoot>
);

export const Multiple = () => (
  <ToggleGroupRoot
    type="multiple"
    defaultValue={["bold"]}
    className="flex border rounded-md p-1 gap-1"
  >
    <ToggleItem value="bold" className="px-3 py-1 text-sm rounded">
      Bold
    </ToggleItem>
    <ToggleItem value="italic" className="px-3 py-1 text-sm rounded">
      Italic
    </ToggleItem>
  </ToggleGroupRoot>
);

export const Default = Single;
