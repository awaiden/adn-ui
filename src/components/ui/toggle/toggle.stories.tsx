import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bold, Italic, Underline } from "lucide-react";

import { ToggleRoot } from "./toggle";

const meta = {
  component: ToggleRoot,
  title: "Components/Toggle",
} satisfies Meta<typeof ToggleRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ToggleRoot aria-label="Toggle italic">
      <Italic className="size-4" />
    </ToggleRoot>
  ),
};

export const Outline: Story = {
  render: () => (
    <ToggleRoot aria-label="Toggle bold" variant="outline">
      <Bold className="size-4" />
    </ToggleRoot>
  ),
};

export const Small: Story = {
  render: () => (
    <ToggleRoot aria-label="Toggle underline" size="sm">
      <Underline className="size-3.5" />
    </ToggleRoot>
  ),
};

export const Large: Story = {
  render: () => (
    <ToggleRoot aria-label="Toggle bold" size="lg">
      <Bold className="size-5" />
    </ToggleRoot>
  ),
};

export const Pressed: Story = {
  args: {
    defaultPressed: true,
  },
  render: (args) => (
    <ToggleRoot aria-label="Toggle italic" {...args}>
      <Italic className="size-4" />
    </ToggleRoot>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <ToggleRoot aria-label="Toggle italic" {...args}>
      <Italic className="size-4" />
    </ToggleRoot>
  ),
};
