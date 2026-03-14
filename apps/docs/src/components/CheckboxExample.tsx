"use client";

import { Checkbox, CheckboxIndicator, Label } from "@adn-ui/react";

const WithLabel = () => (
  <div className="flex items-center gap-2">
    <Checkbox.Root id="terms">
      <CheckboxIndicator />
    </Checkbox.Root>
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
);

const Sizes = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <Checkbox.Root size="sm" id="sm">
        <CheckboxIndicator />
      </Checkbox.Root>
      <Label htmlFor="sm">Small Checkbox</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox.Root size="md" id="md">
        <CheckboxIndicator />
      </Checkbox.Root>
      <Label htmlFor="md">Medium Checkbox</Label>
    </div>
    <div className="flex items-center gap-2">
      <Checkbox.Root size="lg" id="lg">
        <CheckboxIndicator />
      </Checkbox.Root>
      <Label htmlFor="lg">Large Checkbox</Label>
    </div>
  </div>
);

export const CheckboxExample = {
  Sizes,
  WithLabel,
};
