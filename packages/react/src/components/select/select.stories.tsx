import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { Label } from "../label";
import { Select } from "./index";

const meta: Meta = {
  tags: ["autodocs"],
  title: "Components/Select",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger className="w-56">
        <Select.Value placeholder="Select a fruit..." />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes">Grapes</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Select.Root defaultValue="banana">
      <Select.Trigger className="w-56">
        <Select.Value placeholder="Select a fruit..." />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes">Grapes</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger className="w-56">
        <Select.Value placeholder="Select a food..." />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="broccoli">Broccoli</Select.Item>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="leek">Leek</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Select.Root>
      <Select.Trigger className="w-56">
        <Select.Value placeholder="Select a fruit..." />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana" disabled>
          Banana
        </Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes" disabled>
          Grapes
        </Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select.Root disabled>
      <Select.Trigger className="w-56">
        <Select.Value placeholder="Select a fruit..." />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
      </Select.Content>
    </Select.Root>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="fruit">Favorite fruit</Label>
      <Select.Root>
        <Select.Trigger id="fruit" className="w-56">
          <Select.Value placeholder="Select a fruit..." />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
          <Select.Item value="grapes">Grapes</Select.Item>
          <Select.Item value="pineapple">Pineapple</Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="flex flex-col gap-2">
        <Select.Root value={value} onValueChange={setValue}>
          <Select.Trigger className="w-56">
            <Select.Value placeholder="Select a fruit..." />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="apple">Apple</Select.Item>
            <Select.Item value="banana">Banana</Select.Item>
            <Select.Item value="blueberry">Blueberry</Select.Item>
          </Select.Content>
        </Select.Root>
        <p className="text-muted-foreground text-sm">Selected: {value || "none"}</p>
      </div>
    );
  },
};
