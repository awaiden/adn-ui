"use client";

import { Alert } from "@adn-ui/react";
import { AlertCircle, Info, Terminal } from "lucide-react";

const Default = () => (
  <Alert.Root>
    <Alert.Icon>
      <Terminal />
    </Alert.Icon>
    <Alert.Title>Heads up!</Alert.Title>
    <Alert.Description>You can add components to your app using the CLI.</Alert.Description>
  </Alert.Root>
);

const Destructive = () => (
  <Alert.Root variant="destructive">
    <Alert.Icon>
      <AlertCircle />
    </Alert.Icon>
    <Alert.Title>Error</Alert.Title>
    <Alert.Description>Your session has expired. Please log in again.</Alert.Description>
  </Alert.Root>
);

const WithIcon = () => (
  <Alert.Root>
    <Alert.Icon>
      <Info />
    </Alert.Icon>
    <Alert.Title>Information</Alert.Title>
    <Alert.Description>This is an informational alert with an icon.</Alert.Description>
  </Alert.Root>
);

export const AlertExample = {
  Default,
  Destructive,
  WithIcon,
};
