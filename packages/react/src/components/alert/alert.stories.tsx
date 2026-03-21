import type { Meta, StoryObj } from "@storybook/react-vite";

import { AlertCircle, Info, Terminal } from "lucide-react";

import { Alert } from "./index";

const meta: Meta = {
  tags: ["autodocs"],
  title: "Components/Alert",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Alert.Root>
      <Alert.Icon>
        <Terminal />
      </Alert.Icon>
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>You can add components to your app using the CLI.</Alert.Description>
    </Alert.Root>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert.Root variant="destructive">
      <Alert.Icon>
        <AlertCircle />
      </Alert.Icon>
      <Alert.Title>Error</Alert.Title>
      <Alert.Description>Your session has expired. Please log in again.</Alert.Description>
    </Alert.Root>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Alert.Root>
      <Alert.Icon>
        <Info />
      </Alert.Icon>
      <Alert.Title>Information</Alert.Title>
      <Alert.Description>This is an informational alert with an icon.</Alert.Description>
    </Alert.Root>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <Alert.Root>
      <Alert.Icon>
        <Terminal />
      </Alert.Icon>
      <Alert.Title>Everything is up to date!</Alert.Title>
    </Alert.Root>
  ),
};
