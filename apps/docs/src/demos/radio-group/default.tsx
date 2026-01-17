"use client";

import { Label, Radio, RadioGroup } from "@adn-ui/react";

export default function Default() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <Radio.Root id="option-one" value="option-one">
          <Radio.Indicator />
        </Radio.Root>
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Radio.Root id="option-two" value="option-two">
          <Radio.Indicator />
        </Radio.Root>
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  );
}
