import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./index";

const meta = {
  component: Avatar.Root,
  title: "Components/Avatar",
} satisfies Meta<typeof Avatar.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Image
        alt="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
      <Avatar.Fallback>CT</Avatar.Fallback>
    </Avatar.Root>
  ),
};

export const FallbackOnly: Story = {
  args: {
    size: "md",
  },
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Fallback>PD</Avatar.Fallback>
    </Avatar.Root>
  ),
};

export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Image
        alt="Pedro Duarte"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
      />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
  ),
};

export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Image
        alt="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />
      <Avatar.Fallback>CT</Avatar.Fallback>
    </Avatar.Root>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex gap-3">
      <Avatar.Root size="md">
        <Avatar.Image
          alt="Colm Tuite"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        />
        <Avatar.Fallback>CT</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root size="md">
        <Avatar.Image
          alt="Pedro Duarte"
          src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar.Root>
      <Avatar.Root size="md">
        <Avatar.Fallback>PD</Avatar.Fallback>
      </Avatar.Root>
    </div>
  ),
};
