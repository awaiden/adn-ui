import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Card, cardVariants, Field, Form } from "@adn-ui/react";
import { LucideUser } from "lucide-react";

const meta: Meta<typeof Card> = {
  args: {
    children: "This is a card text.",
  },
  argTypes: {
    variant: {
      control: "radio",
      options: Object.keys(cardVariants.variants.variant),
    },
  },
  component: Card,
  title: "Components/Card",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card Description</Card.Description>
      </Card.Header>
      <Card.Content>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Field.Root required>
            <Field.Label>Username</Field.Label>
            <Field.Group>
              <Button variant='field'>
                <LucideUser />
              </Button>
              <Field.Control placeholder='Enter your username' />
            </Field.Group>
            <Field.Description>This is a description text.</Field.Description>
            <Field.Error />
          </Field.Root>

          <Field.Root required>
            <Field.Label>Password</Field.Label>
            <Field.Control
              placeholder='Enter your password'
              type='password'
            />
            <Field.Description>This is a description text.</Field.Description>
            <Field.Error />
          </Field.Root>

          <Button
            className='w-full'
            type='submit'
          >
            Submit
          </Button>
        </Form>
      </Card.Content>
      <Card.Content className='flex justify-end'>
        <Button variant='danger'>Cancel</Button>
      </Card.Content>
    </Card>
  ),
};
