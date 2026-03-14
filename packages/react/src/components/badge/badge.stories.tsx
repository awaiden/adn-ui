import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "destructive", "outline"],
    },
  },
  component: Badge,
  tags: ["autodocs"],
  title: "Components/Badge",
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: "Badge",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Badge",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Badge",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Badge",
    variant: "outline",
  },
};
