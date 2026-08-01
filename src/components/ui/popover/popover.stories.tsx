"use client";

import React from "react";

import { Button } from "../button";
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
        <PopoverPopup className="max-w-xs space-y-2 p-4">
          <PopoverTitle className="text-sm font-semibold">Dimensions</PopoverTitle>
          <PopoverDescription className="text-muted-foreground text-xs">
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
