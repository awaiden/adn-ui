"use client";

import { Meter } from "@adn-ui/react";

export default function Default() {
  return (
    <Meter className="w-[60%]" value={60}>
      <div className="mb-2 flex justify-between">
        <Meter.Label>Storage</Meter.Label>
        <Meter.Value />
      </div>
      <Meter.Track>
        <Meter.Indicator />
      </Meter.Track>
    </Meter>
  );
}
