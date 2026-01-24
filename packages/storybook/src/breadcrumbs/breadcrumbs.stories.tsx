import type { Meta, StoryObj } from "@storybook/react-vite";

import { Breadcrumbs } from "@adn-ui/react";

const meta: Meta<typeof Breadcrumbs> = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  args: {
    children: "This is a breadcrumbs text.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div>
      <Breadcrumbs {...args}>
        <Breadcrumbs.List>
          <Breadcrumbs.Item>Home</Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>Category</Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>Subcategory</Breadcrumbs.Item>
          <Breadcrumbs.Separator />
          <Breadcrumbs.Item>Product</Breadcrumbs.Item>
        </Breadcrumbs.List>
      </Breadcrumbs>
    </div>
  ),
};
