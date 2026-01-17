"use client";

import { Collapsible } from "@adn-ui/react";

export default function Default() {
  return (
    <Collapsible.Root className="w-75">
      <div className="mb-2 flex items-center justify-between space-x-4 rounded-md border px-4 py-2">
        <h4>@peduarte starred 3 repositories</h4>
        <Collapsible.Trigger>
          <div className="hover:bg-muted cursor-pointer rounded-md p-2">
            <Collapsible.TriggerIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </div>
        </Collapsible.Trigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
      <Collapsible.Panel>
        <Collapsible.Content className="mt-2 space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
        </Collapsible.Content>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
