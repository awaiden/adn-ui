"use client";

import { Slider } from "@adn-ui/react";

export default function Default() {
  return (
    <Slider className="w-[60%]" defaultValue={[50]} max={100} step={1}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Indicator />
          <Slider.Thumb />
        </Slider.Track>
      </Slider.Control>
    </Slider>
  );
}
