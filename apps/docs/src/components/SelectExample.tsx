"use client";

import { Select } from "@adn-ui/react";

const Default = () => (
  <Select.Root>
    <Select.Trigger className="w-[180px]">
      <Select.Value placeholder="Select a fruit" />
    </Select.Trigger>
    <Select.Content>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="banana">Banana</Select.Item>
      <Select.Item value="blueberry">Blueberry</Select.Item>
      <Select.Item value="grapes">Grapes</Select.Item>
      <Select.Item value="pineapple">Pineapple</Select.Item>
    </Select.Content>
  </Select.Root>
);

const Groups = () => (
  <Select.Root>
    <Select.Trigger className="w-[180px]">
      <Select.Value placeholder="Select a food" />
    </Select.Trigger>
    <Select.Content>
      <Select.Group>
        <Select.Label>Fruits</Select.Label>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
      </Select.Group>
      <Select.Group>
        <Select.Label>Vegetables</Select.Label>
        <Select.Item value="carrot">Carrot</Select.Item>
        <Select.Item value="broccoli">Broccoli</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select.Root>
);

export const SelectExample = {
  Default,
  Groups,
};
