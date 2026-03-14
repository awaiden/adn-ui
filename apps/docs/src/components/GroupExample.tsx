"use client";

import { Group, Input } from "@adn-ui/react";

const WithPrefix = () => (
  <Group.Root className="w-full max-w-sm">
    <Group.Prefix>
      <span className="text-muted-foreground pl-3">@</span>
    </Group.Prefix>
    <Input className="pl-8" placeholder="username" />
  </Group.Root>
);

const WithSuffix = () => (
  <Group.Root className="w-full max-w-sm">
    <Input className="pr-12" placeholder="Search..." />
    <Group.Suffix>
      <span className="text-muted-foreground pr-3">⌘K</span>
    </Group.Suffix>
  </Group.Root>
);

const WithPrefixAndSuffix = () => (
  <Group.Root className="w-full max-w-sm">
    <Group.Prefix>
      <span className="text-muted-foreground pl-3">$</span>
    </Group.Prefix>
    <Input className="px-8" placeholder="0.00" type="number" />
    <Group.Suffix>
      <span className="text-muted-foreground pr-3">USD</span>
    </Group.Suffix>
  </Group.Root>
);

export const GroupExample = {
  WithPrefix,
  WithPrefixAndSuffix,
  WithSuffix,
};
