"use client";

import { Checkbox, Label } from "@adn-ui/react";

export default function Default() {
  return (
    <Label>
      <Checkbox.Root>
        <Checkbox.Indicator />
      </Checkbox.Root>
      Accept terms
    </Label>
  );
}
