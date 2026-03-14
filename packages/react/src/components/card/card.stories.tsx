import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./index";

const meta: Meta<typeof Card> = {
  tags: ["autodocs"],
  title: "Components/Card",
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card.Root {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>This is a description of the card.</Card.Description>
      </Card.Header>
      <Card.Content>
        This is the content of the card. It can contain any elements you like.
      </Card.Content>
    </Card.Root>
  ),
};
