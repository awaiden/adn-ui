"use client";

import React from "react";

import { ToggleGroupRoot, ToggleItem } from "./toggle-group";

export default {
  title: "Components/ToggleGroup",
  component: ToggleGroupRoot,
};

export const Single = () => (
  <ToggleGroupRoot type="single" defaultValue="center" className="flex gap-1 rounded-md border p-1">
    <ToggleItem value="left" className="rounded px-3 py-1 text-sm">
      Left
    </ToggleItem>
    <ToggleItem value="center" className="rounded px-3 py-1 text-sm">
      Center
    </ToggleItem>
    <ToggleItem value="right" className="rounded px-3 py-1 text-sm">
      Right
    </ToggleItem>
  </ToggleGroupRoot>
);

export const Multiple = () => (
  <ToggleGroupRoot
    type="multiple"
    defaultValue={["bold"]}
    className="flex gap-1 rounded-md border p-1"
  >
    <ToggleItem value="bold" className="rounded px-3 py-1 text-sm">
      Bold
    </ToggleItem>
    <ToggleItem value="italic" className="rounded px-3 py-1 text-sm">
      Italic
    </ToggleItem>
  </ToggleGroupRoot>
);

export const Default = Single;
