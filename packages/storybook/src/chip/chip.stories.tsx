import type { Meta, StoryObj } from "@storybook/react";

import { Chip, chipVariants } from "@adn-ui/react";

const meta: Meta<typeof Chip> = {
  args: {
    children: "This is a chip text.",
    size: "md",
    variant: "primary",
  },
  argTypes: {
    size: {
      control: "radio",
      options: Object.keys(chipVariants.variants.size),
    },
    variant: {
      control: "radio",
      options: Object.keys(chipVariants.variants.variant),
    },
  },
  component: Chip,
  title: "Components/Chip",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
