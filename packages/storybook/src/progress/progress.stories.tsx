import type { Meta, StoryObj } from "@storybook/react";

import { Progress, progressVariants } from "@adn-ui/react";
import { useEffect, useState } from "react";

const meta: Meta<typeof Progress> = {
  argTypes: {
    size: {
      control: "radio",
      options: Object.keys(progressVariants.variants.size),
    },
    variant: {
      control: "radio",
      options: Object.keys(progressVariants.variants.variant),
    },
  },
  component: Progress,
  title: "Components/Progress",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        const randomValue = Math.floor(Math.random() * 100) + 1;
        setValue(randomValue);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <Progress {...args} value={value}>
        <Progress.Label>Loading...</Progress.Label>
        <Progress.Value />
        <Progress.Track>
          <Progress.Indicator />
        </Progress.Track>
      </Progress>
    );
  },
};
