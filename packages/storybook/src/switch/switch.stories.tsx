import type { Meta, StoryObj } from "@storybook/react";

import { Switch, switchVariants } from "@adn-ui/react";

const meta: Meta<typeof Switch> = {
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.keys(switchVariants.variants.size),
    },
  },
  component: Switch,
  title: "Components/Switch",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Switch.Root {...args}>
      <Switch.Thumb />
    </Switch.Root>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Switch.Root {...args} disabled>
      <Switch.Thumb />
    </Switch.Root>
  ),
};
