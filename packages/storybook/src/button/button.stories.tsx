import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, buttonVariants } from "@adn-ui/react";
import { LucideThumbsUp } from "lucide-react";

const meta: Meta<typeof Button> = {
  args: {
    children: "This is a button text.",
    size: "md",
    variant: "primary",
  },
  argTypes: {
    isIconOnly: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    size: {
      control: { type: "radio" },
      options: Object.keys(buttonVariants.variants.size),
    },
    variant: {
      control: { type: "radio" },
      options: Object.keys(buttonVariants.variants.variant),
    },
  },

  component: Button,
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const IconOnly: Story = {
  args: {
    isIconOnly: true,
  },
  render: (args) => (
    <Button {...args}>
      <LucideThumbsUp />
    </Button>
  ),
};

export const FullWidth: Story = {
  args: {
    className: "w-full",
  },
};
