"use client";

import React from "react";
import { SliderRoot, SliderTrack, SliderIndicator, SliderThumb } from "./slider";

export default {
  title: "Components/Slider",
  component: SliderRoot,
};

export const Default = () => (
  <SliderRoot defaultValue={50} className="w-full max-w-xs">
    <SliderTrack className="h-1.5 w-full bg-muted rounded-full">
      <SliderIndicator className="h-full bg-primary rounded-full" />
    </SliderTrack>
    <SliderThumb className="h-4 w-4 rounded-full bg-primary shadow border" />
  </SliderRoot>
);
