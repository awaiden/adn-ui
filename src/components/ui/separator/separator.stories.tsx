import type { Meta, StoryObj } from "@storybook/react-vite";

import { SeparatorRoot } from "./separator";

const meta = {
  component: SeparatorRoot,
  title: "Components/Separator",
} satisfies Meta<typeof SeparatorRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-full max-w-[300px]">
      <div className="text-sm font-medium">Radix Primitives</div>
      <p className="text-muted-foreground text-sm">An open-source UI component library.</p>
      <SeparatorRoot className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <SeparatorRoot decorative orientation="vertical" />
        <div>Docs</div>
        <SeparatorRoot decorative orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center gap-4 text-sm">
      <div>Item 1</div>
      <SeparatorRoot decorative orientation="vertical" />
      <div>Item 2</div>
      <SeparatorRoot decorative orientation="vertical" />
      <div>Item 3</div>
    </div>
  ),
};
