import type { Meta, StoryObj } from "@storybook/react-vite";

import { Meter, meterVariants } from "@adn-ui/react";

const meta: Meta<typeof Meter> = {
  args: {
    size: "md",
    variant: "primary",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.keys(meterVariants.variants.size),
    },
    variant: {
      control: { type: "radio" },
      options: Object.keys(meterVariants.variants.variant),
    },
  },
  component: Meter,
  title: "Components/Meter",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
  },

  render: (args) => (
    <Meter
      {...args}
      value={24}
    >
      <Meter.Label>Progress</Meter.Label>
      <Meter.Value />
      <Meter.Track>
        <Meter.Indicator style={{ width: "60%" }} />
      </Meter.Track>
    </Meter>
  ),
};
