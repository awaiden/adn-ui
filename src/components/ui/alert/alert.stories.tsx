import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlertCircle, Terminal } from "lucide-react";

import { Alert } from ".";

const meta = {
  component: Alert.Root,
  title: "Components/Alert",
} satisfies Meta<typeof Alert.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert.Root {...args}>
      <Terminal className="size-4" />
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>You can add components to your app using the CLI.</Alert.Description>
    </Alert.Root>
  ),
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (args) => (
    <Alert.Root {...args}>
      <AlertCircle className="size-4" />
      <Alert.Title>Error</Alert.Title>
      <Alert.Description>Your session has expired. Please log in again.</Alert.Description>
    </Alert.Root>
  ),
};
