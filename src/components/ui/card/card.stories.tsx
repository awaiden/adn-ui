import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from ".";

const meta = {
  component: Card.Root,
  title: "Components/Card",
} satisfies Meta<typeof Card.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Card.Root {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card content area.</p>
      </Card.Content>
    </Card.Root>
  ),
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => (
    <Card.Root {...args}>
      <Card.Header>
        <Card.Title>Outline Card</Card.Title>
        <Card.Description>An outline variant card.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card content area.</p>
      </Card.Content>
    </Card.Root>
  ),
};
