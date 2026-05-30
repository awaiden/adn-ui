import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlertDialog } from "./index";

const meta = {
  component: AlertDialog.Root,
  title: "Components/AlertDialog",
} satisfies Meta<typeof AlertDialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button className="bg-destructive text-primary-foreground inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium">
          Delete account
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialog.Description>
        <div className="flex justify-end gap-2">
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Yes, delete account</AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};
