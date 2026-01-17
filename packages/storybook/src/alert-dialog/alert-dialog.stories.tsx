import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialog, buttonVariants } from "@adn-ui/react";

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  title: "Components/AlertDialog",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <AlertDialog.Root {...args}>
      <AlertDialog.Trigger className={buttonVariants({ variant: "danger" })}>
        Open Alert Dialog
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop />
        <AlertDialog.Popup>
          <AlertDialog.Content>
            <AlertDialog.Title>Alert Dialog Title</AlertDialog.Title>
            <AlertDialog.Description>
              This is an example of an alert dialog description.
            </AlertDialog.Description>
            <div className="my-4">
              <p>This is some additional content inside the alert dialog popup.</p>
            </div>
            <AlertDialog.Close />
          </AlertDialog.Content>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};
