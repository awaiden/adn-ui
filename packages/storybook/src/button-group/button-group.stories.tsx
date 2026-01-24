import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, ButtonGroup } from "@adn-ui/react";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  title: "Components/ButtonGroup",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
};
