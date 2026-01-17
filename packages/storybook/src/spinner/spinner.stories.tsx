import type { Meta, StoryObj } from "@storybook/react";

import { Container, Spinner, spinnerVariants } from "@adn-ui/react";

const meta: Meta<typeof Spinner> = {
  args: {
    size: "md",
    variant: "primary",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: Object.keys(spinnerVariants.variants.size),
    },
    variant: {
      control: { type: "radio" },
      options: Object.keys(spinnerVariants.variants.variant),
    },
  },
  component: Spinner,
  title: "Components/Spinner",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Container className="center">
      <Spinner {...args} />
    </Container>
  ),
};
