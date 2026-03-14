import type { Meta, StoryObj } from "@storybook/react-vite";

import { Surface } from "./index";

const meta: Meta<typeof Surface> = {
  component: Surface,
  tags: ["autodocs"],
  title: "Components/Surface",
};

export default meta;

type Story = StoryObj<typeof Surface>;

export const Default: Story = {
  args: {
    children: "Surface",
  },
};
