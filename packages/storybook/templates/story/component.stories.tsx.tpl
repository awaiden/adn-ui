import type { Meta, StoryObj } from "@storybook/react";

import { {{Pascal}} } from "@adn-ui/react";

const meta: Meta<typeof {{Pascal}}> = {
  title: "Components/{{Pascal}}",
  component: {{Pascal}},
  args: {
    children: "This is a {{kebab}} text.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
