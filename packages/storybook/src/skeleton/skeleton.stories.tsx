import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton, Surface } from "@adn-ui/react";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Surface className='w-64 p-4'>
      <Skeleton {...args} />
    </Surface>
  ),
};
