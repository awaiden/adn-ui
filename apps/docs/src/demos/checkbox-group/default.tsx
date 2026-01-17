"use client";

import { Checkbox, CheckboxGroup, Label } from "@adn-ui/react";

export default function Default() {
  return (
    <CheckboxGroup className="space-y-2">
      <Label>
        <Checkbox.Root>
          <Checkbox.Indicator />
        </Checkbox.Root>
        This is a checkbox-group text.
      </Label>
      <Label>
        <Checkbox.Root defaultChecked>
          <Checkbox.Indicator />
        </Checkbox.Root>
        This is a checked checkbox.
      </Label>
    </CheckboxGroup>
  );
}
