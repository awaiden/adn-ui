import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@adn-ui/react";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Components/Avatar",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar.Root>
      <Avatar.Image src="https://avatars.githubusercontent.com/u/84444757?s=96&v=4" />
      <Avatar.Fallback>HA</Avatar.Fallback>
    </Avatar.Root>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Avatar.Root>
      <Avatar.Fallback>HA</Avatar.Fallback>
    </Avatar.Root>
  ),
};
