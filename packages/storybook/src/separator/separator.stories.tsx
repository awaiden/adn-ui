import type { Meta, StoryObj } from "@storybook/react-vite";

import { Separator } from "@adn-ui/react";

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: "Components/Separator",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <ul className='flex h-24 items-center gap-5'>
      <li>Item 1</li>
      <Separator {...args} />
      <li>Item 2</li>
    </ul>
  ),
};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: (args) => (
    <ul className='flex h-24 items-center gap-5'>
      <li>Item 1</li>
      <Separator {...args} />
      <li>Item 2</li>
    </ul>
  ),
};
