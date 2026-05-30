import type { Meta, StoryObj } from "@storybook/react-vite";

import { useEffect, useState } from "react";

import { ProgressRoot } from "./progress";

const meta = {
  component: ProgressRoot,
  title: "Components/Progress",
} satisfies Meta<typeof ProgressRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
  },
  render: (args) => (
    <div className="w-[300px]">
      <ProgressRoot {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <div className="w-[300px]">
      <ProgressRoot {...args} />
    </div>
  ),
};

export const Full: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <div className="w-[300px]">
      <ProgressRoot {...args} />
    </div>
  ),
};

const AnimatedProgress = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-[300px]">
      <ProgressRoot value={progress} />
    </div>
  );
};

export const Animated: Story = {
  render: () => <AnimatedProgress />,
};
