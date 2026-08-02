"use client";

import React from "react";

import { AspectRatio } from "./aspect-ratio";

export default {
  title: "Components/AspectRatio",
  component: AspectRatio,
};

export const SixteenByNine = () => (
  <div className="w-[400px]">
    <AspectRatio ratio={16 / 9} className="bg-muted flex items-center justify-center rounded-lg border">
      <span className="text-sm font-medium">16:9</span>
    </AspectRatio>
  </div>
);

export const Square = () => (
  <div className="w-[200px]">
    <AspectRatio ratio={1} className="bg-muted flex items-center justify-center rounded-lg border">
      <span className="text-sm font-medium">1:1</span>
    </AspectRatio>
  </div>
);
