import type { Meta, StoryObj } from "@storybook/react-vite";

import { Alert, alertVariants } from "@adn-ui/react";

const meta: Meta<typeof Alert> = {
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: Object.keys(alertVariants.variants.variant),
    },
  },
  component: Alert,
  title: "Components/Alert",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert.Root {...args}>
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>This is an alert title</Alert.Title>
        <Alert.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia praesentium a iure
          inventore atque illum facilis quam doloremque. Impedit illum porro quaerat odio aliquam,
          laborum nobis deserunt rerum ducimus sapiente?.
        </Alert.Description>
      </Alert.Content>
    </Alert.Root>
  ),
};
