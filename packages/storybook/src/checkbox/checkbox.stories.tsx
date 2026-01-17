import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, Label } from "@adn-ui/react";

const meta: Meta<typeof Checkbox> = {
  args: {
    children: "This is a checkbox text.",
  },
  component: Checkbox,
  title: "Components/Checkbox",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Label>
      <Checkbox.Root {...args}>
        <Checkbox.Indicator />
      </Checkbox.Root>
      Accept terms
    </Label>
  ),
};
