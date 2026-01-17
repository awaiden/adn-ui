"use client";

import { Label, Radio, RadioGroup } from "@adn-ui/react";

export default function Default() {
  return (
    <RadioGroup defaultValue="default">
      <div className="flex items-center space-x-2">
        <Radio.Root id="r1" value="default">
          <Radio.Indicator />
        </Radio.Root>
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Radio.Root id="r2" value="comfortable">
          <Radio.Indicator />
        </Radio.Root>
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Radio.Root id="r3" value="compact">
          <Radio.Indicator />
        </Radio.Root>
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}
