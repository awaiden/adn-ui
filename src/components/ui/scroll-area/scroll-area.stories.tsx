import type { Meta, StoryObj } from "@storybook/react-vite";

import { ScrollAreaRoot } from "./scroll-area";

const meta = {
  component: ScrollAreaRoot,
  title: "Components/ScrollArea",
} satisfies Meta<typeof ScrollAreaRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export const Default: Story = {
  render: () => (
    <ScrollAreaRoot className="h-[225px] w-[200px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Tags</h4>
        {TAGS.map((tag) => (
          <div className="border-t py-2 text-sm" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </ScrollAreaRoot>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollAreaRoot className="w-[300px] rounded-md border">
      <div className="flex gap-4 p-4" style={{ width: "800px" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            className="flex size-24 shrink-0 items-center justify-center rounded-md border"
            key={i}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollAreaRoot>
  ),
};
