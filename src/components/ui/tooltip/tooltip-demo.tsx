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
      <div className="flex items-center gap-4">
        <TooltipRoot>
          <TooltipTrigger className="border-input hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center rounded-md border px-4 text-xs font-medium">
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
