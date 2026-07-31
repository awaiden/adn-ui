"use client";

import {
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerPopup,
  DrawerPortal,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
} from "./drawer";

export function DrawerDemo({
  side = "bottom",
}: {
  side?: "bottom" | "top" | "left" | "right";
}) {
  const sideLabels: Record<string, string> = {
    bottom: "Open Bottom Drawer",
    right: "Open Right Drawer",
    left: "Open Left Drawer",
    top: "Open Top Drawer",
  };

  return (
    <DrawerRoot side={side}>
      <DrawerTrigger className="inline-flex h-9 px-4 items-center justify-center rounded-md border border-input bg-background text-xs font-medium hover:bg-accent hover:text-accent-foreground">
        {sideLabels[side] || "Open Drawer"}
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerBackdrop />
        <DrawerViewport>
          <DrawerPopup>
            <DrawerContent className="p-4">
              <DrawerTitle className="capitalize">{side} Drawer</DrawerTitle>
              <DrawerDescription>
                This panel slides in smoothly from the {side} edge of the screen.
              </DrawerDescription>
              <div className="flex justify-end gap-2 mt-4">
                <DrawerClose className="inline-flex h-8 px-3 items-center justify-center rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                  Close
                </DrawerClose>
              </div>
            </DrawerContent>
          </DrawerPopup>
        </DrawerViewport>
      </DrawerPortal>
    </DrawerRoot>
  );
}
