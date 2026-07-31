"use client";

import { CollapsiblePanel, CollapsibleRoot, CollapsibleTrigger } from "./collapsible";

export function CollapsibleDemo({ title = "Toggle Recovery Keys" }: { title?: string }) {
  return (
    <div className="w-64">
      <CollapsibleRoot>
        <CollapsibleTrigger>{title}</CollapsibleTrigger>
        <CollapsiblePanel>
          <div className="flex flex-col gap-1 text-xs">
            <div>alien-bean-pasta</div>
            <div>wild-irish-burrito</div>
            <div>horse-battery-staple</div>
          </div>
        </CollapsiblePanel>
      </CollapsibleRoot>
    </div>
  );
}
