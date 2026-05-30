import type { Meta, StoryObj } from "@storybook/react-vite";

import { AspectRatioRoot } from "./aspect-ratio";

const meta = {
  component: AspectRatioRoot,
  title: "Components/AspectRatio",
} satisfies Meta<typeof AspectRatioRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Landscape: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatioRoot {...args}>
        <img
          alt="Landscape photograph by Tobias Tullius"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        />
      </AspectRatioRoot>
    </div>
  ),
};

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatioRoot {...args}>
        <img
          alt="Square photograph"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        />
      </AspectRatioRoot>
    </div>
  ),
};

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
  },
  render: (args) => (
    <div className="w-[300px]">
      <AspectRatioRoot {...args}>
        <img
          alt="Portrait photograph"
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        />
      </AspectRatioRoot>
    </div>
  ),
};
