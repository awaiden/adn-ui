import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "../input";
import { Group } from "./index";

const meta: Meta = {
  tags: ["autodocs"],
  title: "Components/Group",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Group.Root className="w-full max-w-sm">
      <Group.Prefix>
        <span className="text-muted-foreground pl-3">@</span>
      </Group.Prefix>
      <Input className="pl-8" placeholder="username" />
    </Group.Root>
  ),
};

export const WithSuffix: Story = {
  render: () => (
    <Group.Root className="w-full max-w-sm">
      <Input className="pr-12" placeholder="Search..." />
      <Group.Suffix>
        <span className="text-muted-foreground pr-3">⌘K</span>
      </Group.Suffix>
    </Group.Root>
  ),
};

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <Group.Root className="w-full max-w-sm">
      <Group.Prefix>
        <span className="text-muted-foreground pl-3">$</span>
      </Group.Prefix>
      <Input className="px-8" placeholder="0.00" type="number" />
      <Group.Suffix>
        <span className="text-muted-foreground pr-3">USD</span>
      </Group.Suffix>
    </Group.Root>
  ),
};

export const PrefixOnly: Story = {
  render: () => (
    <Group.Root className="w-full max-w-sm">
      <Group.Prefix>
        <span className="text-muted-foreground pl-3">https://</span>
      </Group.Prefix>
      <Input className="pl-16" placeholder="example.com" />
    </Group.Root>
  ),
};
