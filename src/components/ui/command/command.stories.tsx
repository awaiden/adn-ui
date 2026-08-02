import type { Meta, StoryObj } from "@storybook/react";

import { CommandDemo } from "./command-demo";

const meta: Meta<typeof CommandDemo> = {
  title: "Components/Command",
  component: CommandDemo,
};

export default meta;
type Story = StoryObj<typeof CommandDemo>;

export const Default: Story = {};
