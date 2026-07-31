"use client";

import React from "react";
import { SeparatorRoot } from "./separator";

export default {
  title: "Components/Separator",
  component: SeparatorRoot,
};

export const Horizontal = () => (
  <div className="w-full max-w-sm space-y-4">
    <div className="text-sm">Header Content</div>
    <SeparatorRoot orientation="horizontal" />
    <div className="text-sm">Footer Content</div>
  </div>
);

export const Vertical = () => (
  <div className="flex h-5 items-center gap-4 text-sm">
    <div>Blog</div>
    <SeparatorRoot orientation="vertical" />
    <div>Docs</div>
    <SeparatorRoot orientation="vertical" />
    <div>Source</div>
  </div>
);

export const Default = Horizontal;
