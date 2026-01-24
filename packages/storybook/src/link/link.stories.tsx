import type { Meta, StoryObj } from "@storybook/react-vite";

import { Link } from "@adn-ui/react";

const meta: Meta<typeof Link> = {
  args: {
    children: "This is a link text.",
    href: "#",
  },
  component: Link,
  title: "Components/Link",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const NoUnderline: Story = {
  args: {
    variant: "no-underline",
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Link
      {...args}
      data-disabled
    />
  ),
};
