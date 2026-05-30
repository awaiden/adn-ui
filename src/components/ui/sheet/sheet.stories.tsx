import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sheet } from ".";
import { Button } from "../button";

const meta = {
  component: Sheet.Root,
  title: "Components/Sheet",
} satisfies Meta<typeof Sheet.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: () => (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>Make changes to your profile here.</Sheet.Description>
        </Sheet.Header>
        <div className="py-4">Sheet content goes here.</div>
        <Sheet.Footer>
          <Button>Save changes</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open Left</Button>
      </Sheet.Trigger>
      <Sheet.Content side="left">
        <Sheet.Header>
          <Sheet.Title>Navigation</Sheet.Title>
          <Sheet.Description>Browse sections.</Sheet.Description>
        </Sheet.Header>
        <div className="py-4">Navigation content.</div>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const Top: Story = {
  render: () => (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open Top</Button>
      </Sheet.Trigger>
      <Sheet.Content side="top">
        <Sheet.Header>
          <Sheet.Title>Notifications</Sheet.Title>
          <Sheet.Description>Your recent notifications.</Sheet.Description>
        </Sheet.Header>
        <div className="py-4">Notification content goes here.</div>
        <Sheet.Footer>
          <Button>Mark all as read</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open Bottom</Button>
      </Sheet.Trigger>
      <Sheet.Content side="bottom">
        <Sheet.Header>
          <Sheet.Title>Actions</Sheet.Title>
          <Sheet.Description>Choose an action to perform.</Sheet.Description>
        </Sheet.Header>
        <div className="flex flex-col gap-2 py-4">
          <Button className="justify-start" variant="ghost">
            Share
          </Button>
          <Button className="justify-start" variant="ghost">
            Download
          </Button>
          <Button className="justify-start" variant="destructive">
            Delete
          </Button>
        </div>
      </Sheet.Content>
    </Sheet.Root>
  ),
};
