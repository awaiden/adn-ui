"use client";

import { Alert } from "@adn-ui/react";

export default function Default() {
  return (
    <Alert.Root>
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
  );
}
