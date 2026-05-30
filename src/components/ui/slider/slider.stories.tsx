import type { Meta, StoryObj } from "@storybook/react-vite";

import { SliderRoot } from "./slider";

const meta = {
  component: SliderRoot,
  title: "Components/Slider",
} satisfies Meta<typeof SliderRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
  render: (args) => (
    <div className="w-[200px]">
      <SliderRoot {...args} />
    </div>
  ),
};

export const WithMin: Story = {
  args: {
    defaultValue: [25],
    max: 100,
    min: 0,
    step: 5,
  },
  render: (args) => (
    <div className="w-[200px]">
      <SliderRoot {...args} />
    </div>
  ),
};

export const Small: Story = {
  args: {
    defaultValue: [10],
    max: 100,
    step: 1,
  },
  render: (args) => (
    <div className="w-[150px]">
      <SliderRoot {...args} />
    </div>
  ),
};
