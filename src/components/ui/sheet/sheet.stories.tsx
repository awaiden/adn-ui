import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sheet } from ".";

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
        <button className="rounded-md border px-4 py-2 text-sm">Open Sheet</button>
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>Make changes to your profile here.</Sheet.Description>
        </Sheet.Header>
        <div className="py-4">Sheet content goes here.</div>
        <Sheet.Footer>
          <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm">Save changes</button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <button className="rounded-md border px-4 py-2 text-sm">Open Left</button>
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
