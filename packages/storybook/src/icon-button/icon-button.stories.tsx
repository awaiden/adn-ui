import type { Meta, StoryObj } from "@storybook/react";

import { IconButton, iconButtonVariants } from "@adn-ui/react";
import { LucideThumbsUp } from "lucide-react";

const meta: Meta<typeof IconButton> = {
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.keys(iconButtonVariants.extend.variants.size),
    },
    variant: {
      control: { type: "radio" },
      options: Object.keys(iconButtonVariants.extend.variants.variant),
    },
  },
  component: IconButton,
  title: "Components/IconButton",
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (args) => (
    <IconButton {...args}>
      <LucideThumbsUp />
    </IconButton>
  ),
};
