import type { Meta, StoryObj } from "@storybook/react-vite";

import { List } from "@adn-ui/react";

const meta: Meta<typeof List> = {
  args: {
    children: "This is a list text.",
  },
  component: List,
  title: "Components/List",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <List>
      <List.Item data-disabled>Item 1</List.Item>
      <List.Item>Item 2</List.Item>
      <List.Item>Item 3</List.Item>
    </List>
  ),
};
