"use client";

import { Label, NumberField } from "@adn-ui/react";

export default function Default() {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="quantity">Quantity</Label>
      <NumberField defaultValue={10} id="quantity">
        <NumberField.Group>
          <NumberField.Decrement />
          <NumberField.Input />
          <NumberField.Increment />
        </NumberField.Group>
      </NumberField>
    </div>
  );
}
