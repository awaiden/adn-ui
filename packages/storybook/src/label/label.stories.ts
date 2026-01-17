import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@adn-ui/react";

const meta: Meta<typeof Label> = {
  args: {
    children: "This is a label text.",
  },
  component: Label,
  title: "Components/Label",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
