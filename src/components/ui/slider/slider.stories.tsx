"use client";

import React from "react";

import { SliderRoot, SliderTrack, SliderIndicator, SliderThumb } from "./slider";

export default {
  title: "Components/Slider",
  component: SliderRoot,
};

export const Default = () => (
  <SliderRoot defaultValue={50} className="w-full max-w-xs">
    <SliderTrack className="bg-muted h-1.5 w-full rounded-full">
      <SliderIndicator className="bg-primary h-full rounded-full" />
    </SliderTrack>
    <SliderThumb className="bg-primary h-4 w-4 rounded-full border shadow" />
  </SliderRoot>
);
