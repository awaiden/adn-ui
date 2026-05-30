import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "radix-ui";

import { SelectContent } from "./select-content";
import { SelectItem } from "./select-item";
import { SelectLabel } from "./select-label";
import { SelectRoot } from "./select-root";
import { SelectSeparator } from "./select-separator";
import { SelectTrigger } from "./select-trigger";

const meta = {
  component: SelectRoot,
  title: "Components/Select",
} satisfies Meta<typeof SelectRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SelectRoot>
      <SelectTrigger aria-label="Food" className="w-[180px]">
        <Select.Value placeholder="Select a fruit…" />
      </SelectTrigger>
      <SelectContent>
        <Select.Group>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </Select.Group>
        <SelectSeparator />
        <Select.Group>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="aubergine">Aubergine</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem disabled value="carrot">
            Carrot
          </SelectItem>
          <SelectItem value="courgette">Courgette</SelectItem>
          <SelectItem value="leek">Leek</SelectItem>
        </Select.Group>
      </SelectContent>
    </SelectRoot>
  ),
};
