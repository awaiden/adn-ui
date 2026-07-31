"use client";

import React from "react";
import {
  TooltipRoot,
  TooltipTrigger,
  TooltipPortal,
  TooltipPositioner,
  TooltipPopup,
  TooltipArrow,
} from "./tooltip";
import { Button } from "../button";

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
        <TooltipPopup className="px-3 py-1.5 text-xs border rounded bg-popover text-popover-foreground shadow">
          Add to library
          <TooltipArrow />
        </TooltipPopup>
      </TooltipPositioner>
    </TooltipPortal>
  </TooltipRoot>
);
