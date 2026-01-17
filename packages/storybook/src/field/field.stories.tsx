import type { Meta, StoryObj } from "@storybook/react";

import { Field } from "@adn-ui/react";

const meta: Meta<typeof Field> = {
  component: Field,
  title: "Components/Field",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Field.Root {...args}>
      <Field.Label>Username</Field.Label>
      <Field.Control placeholder="Enter your username" />
      <Field.Description>This is a description text.</Field.Description>
      <Field.Error />
    </Field.Root>
  ),
};
