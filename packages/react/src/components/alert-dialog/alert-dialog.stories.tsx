import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { AlertDialog } from "./index";

const meta: Meta<typeof AlertDialog.Root> = {
  component: AlertDialog.Root,
  title: "Components/AlertDialog",
};

export default meta;

type Story = StoryObj<typeof AlertDialog.Root>;

export const Default: Story = {
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button variant="outline">Delete Account</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action className="button--destructive">Continue</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};
