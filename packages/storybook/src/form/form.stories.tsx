import type { Meta, StoryObj } from "@storybook/react";

import { Button, Field, Form } from "@adn-ui/react";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
      <Field.Root required>
        <Field.Label>Email</Field.Label>
        <Field.Control placeholder="Enter your email" type="email" />
        <Field.Description>Please enter a valid email address.</Field.Description>
        <Field.Error />
      </Field.Root>

      <Field.Root required>
        <Field.Label>Password</Field.Label>
        <Field.Control placeholder="Enter your password" type="password" />
        <Field.Description>Your password must be at least 8 characters long.</Field.Description>
        <Field.Error />
      </Field.Root>

      <Button className="w-full" type="submit">
        Submit
      </Button>
    </Form>
  ),
};
