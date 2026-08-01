"use client";

import React from "react";
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPortal,
  PopoverPositioner,
  PopoverPopup,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
} from "./popover";
import { Button } from "../button";

export default {
  title: "Components/Popover",
  component: PopoverRoot,
};

export const Default = () => (
  <PopoverRoot>
    <PopoverTrigger>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverPositioner>
        <PopoverPopup className="p-4 space-y-2 max-w-xs">
          <PopoverTitle className="font-semibold text-sm">Dimensions</PopoverTitle>
          <PopoverDescription className="text-xs text-muted-foreground">
            Set the dimensions for the layer.
          </PopoverDescription>
          <PopoverClose>
            <Button size="sm" variant="ghost">
              Close
            </Button>
          </PopoverClose>
        </PopoverPopup>
      </PopoverPositioner>
    </PopoverPortal>
  </PopoverRoot>
);
