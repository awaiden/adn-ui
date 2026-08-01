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

export function DrawerDemo({ side = "bottom" }: { side?: "bottom" | "top" | "left" | "right" }) {
  const sideLabels: Record<string, string> = {
    bottom: "Open Bottom Drawer",
    right: "Open Right Drawer",
    left: "Open Left Drawer",
    top: "Open Top Drawer",
  };

  return (
    <DrawerRoot side={side}>
      <DrawerTrigger className="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 items-center justify-center rounded-md border px-4 text-xs font-medium">
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
              <div className="mt-4 flex justify-end gap-2">
                <DrawerClose className="bg-secondary text-secondary-foreground inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-medium">
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
