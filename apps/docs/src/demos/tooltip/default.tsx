"use client";

import { buttonVariants, Tooltip } from "@adn-ui/react";
import { Plus } from "lucide-react";

export default function Default() {
  return (
    <Tooltip>
      <Tooltip.Trigger
        className={`${buttonVariants({ variant: "outline" })} w-10 rounded-full p-0`}
      >
        <Plus className="h-4 w-4" />
        <span className="sr-only">Add</span>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner>
          <Tooltip.Popup>
            <Tooltip.Arrow />
            <p>Add to library</p>
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip>
  );
}
