"use client";

import { Collapsible } from "@adn-ui/react";

const Default = () => (
  <Collapsible.Root className="w-full max-w-sm">
    <Collapsible.Trigger className="w-full">Toggle content</Collapsible.Trigger>
    <Collapsible.Content>
      <div className="py-2">
        This is the collapsible content. It can be toggled open and closed.
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
);

const DefaultOpen = () => (
  <Collapsible.Root defaultOpen className="w-full max-w-sm">
    <Collapsible.Trigger className="w-full">Toggle content</Collapsible.Trigger>
    <Collapsible.Content>
      <div className="py-2">
        This content is visible by default because defaultOpen is set to true.
      </div>
    </Collapsible.Content>
  </Collapsible.Root>
);

export const CollapsibleExample = {
  Default,
  DefaultOpen,
};
