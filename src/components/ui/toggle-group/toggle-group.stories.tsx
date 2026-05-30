import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from "lucide-react";

import { ToggleGroupItem } from "./toggle-group-item";
import { ToggleGroupRoot } from "./toggle-group-root";

const meta = {
  component: ToggleGroupRoot,
  title: "Components/ToggleGroup",
} satisfies Meta<typeof ToggleGroupRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    defaultValue: "center",
    type: "single",
  },
  render: () => (
    <ToggleGroupRoot aria-label="Text alignment" defaultValue="center" type="single">
      <ToggleGroupItem aria-label="Left aligned" value="left">
        <AlignLeft className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Center aligned" value="center">
        <AlignCenter className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Right aligned" value="right">
        <AlignRight className="size-4" />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};

export const Multiple: Story = {
  args: {
    defaultValue: ["bold"],
    type: "multiple",
  },
  render: () => (
    <ToggleGroupRoot aria-label="Text formatting" defaultValue={["bold"]} type="multiple">
      <ToggleGroupItem aria-label="Bold" value="bold">
        <Bold className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Italic" value="italic">
        <Italic className="size-4" />
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Underline" value="underline">
        <Underline className="size-4" />
      </ToggleGroupItem>
    </ToggleGroupRoot>
  ),
};
