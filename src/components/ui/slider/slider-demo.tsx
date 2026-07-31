"use client";

import {
  SliderControl,
  SliderIndicator,
  SliderLabel,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "./slider";

export function SliderDemo() {
  return (
    <SliderRoot defaultValue={50}>
      <SliderLabel>Volume Level</SliderLabel>
      <SliderValue />
      <SliderControl>
        <SliderTrack>
          <SliderIndicator />
          <SliderThumb aria-label="Volume Level" />
        </SliderTrack>
      </SliderControl>
    </SliderRoot>
  );
}
