import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, buttonVariants, Dialog, Field, Form } from "@adn-ui/react";

const meta: Meta<typeof Dialog> = {
  args: {
    children: "This is a dialog text.",
  },
  component: Dialog,
  title: "Components/Dialog",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Dialog.Root {...args}>
      <Dialog.Trigger className={buttonVariants()}>Open Dialog</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Popup>
          <Dialog.Content>
            <Dialog.Close />
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>This is the description of the dialog.</Dialog.Description>

            <Form
              className='my-4'
              onSubmit={(e) => e.preventDefault()}
            >
              <Field.Root required>
                <Field.Label>Email</Field.Label>
                <Field.Control
                  placeholder='Enter your email'
                  type='email'
                />
                <Field.Description>Please enter a valid email address.</Field.Description>
                <Field.Error />
              </Field.Root>

              <Button
                className='w-full'
                type='submit'
              >
                Submit
              </Button>
            </Form>
          </Dialog.Content>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};
