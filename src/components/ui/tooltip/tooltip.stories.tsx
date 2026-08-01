"use client";

import React from "react";

import { Button } from "../button";
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipPositioner,
  TooltipPopup,
  TooltipArrow,
} from "./tooltip";

export default {
  title: "Components/Tooltip",
  component: TooltipRoot,
};

export const Default = () => (
  <TooltipRoot>
    <TooltipTrigger>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipPositioner>
        <TooltipPopup className="bg-popover text-popover-foreground rounded border px-3 py-1.5 text-xs shadow">
          Add to library
          <TooltipArrow />
        </TooltipPopup>
      </TooltipPositioner>
    </TooltipPortal>
  </TooltipRoot>
);
