"use client";

import {
  TooltipArrow,
  TooltipPopup,
  TooltipPortal,
  TooltipPositioner,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "./tooltip";

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex gap-4 items-center">
        <TooltipRoot>
          <TooltipTrigger className="inline-flex h-9 px-4 items-center justify-center rounded-md border border-input text-xs font-medium hover:bg-accent hover:text-accent-foreground">
            Hover Me
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipPositioner sideOffset={6}>
              <TooltipPopup>
                <TooltipArrow />
                Tooltip popup hint
              </TooltipPopup>
            </TooltipPositioner>
          </TooltipPortal>
        </TooltipRoot>
      </div>
    </TooltipProvider>
  );
}
