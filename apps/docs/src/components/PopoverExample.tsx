"use client";

import { Button, Input, Label, Popover } from "@adn-ui/react";

const Default = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <Button variant="outline">Open Popover</Button>
    </Popover.Trigger>
    <Popover.Content className="w-80">
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="leading-none font-medium">Dimensions</h4>
          <p className="text-sm text-neutral-500">Set the dimensions for the layer.</p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
          </div>
        </div>
      </div>
    </Popover.Content>
  </Popover.Root>
);

const Placement = () => (
  <div className="flex gap-2">
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Top</Button>
      </Popover.Trigger>
      <Popover.Content side="top">Top Content</Popover.Content>
    </Popover.Root>
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Bottom</Button>
      </Popover.Trigger>
      <Popover.Content side="bottom">Bottom Content</Popover.Content>
    </Popover.Root>
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Right</Button>
      </Popover.Trigger>
      <Popover.Content side="right">Right Content</Popover.Content>
    </Popover.Root>
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Left</Button>
      </Popover.Trigger>
      <Popover.Content side="left">Left Content</Popover.Content>
    </Popover.Root>
  </div>
);

export const PopoverExample = {
  Default,
  Placement,
};
