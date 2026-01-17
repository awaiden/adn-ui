import type { Meta, StoryObj } from "@storybook/react";

import { Slider } from "@adn-ui/react";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Components/Slider",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <Slider.Root {...args} defaultValue={25}>
        <Slider.Control>
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
    </div>
  ),
};

export const RangeSlider: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <Slider.Root {...args} defaultValue={[25, 75]}>
        <Slider.Control>
          <Slider.Track>
            <Slider.Indicator />
            <Slider.Thumb index={0} />
            <Slider.Thumb index={1} />
          </Slider.Track>
        </Slider.Control>
      </Slider.Root>
    </div>
  ),
};
