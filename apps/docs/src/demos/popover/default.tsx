"use client";

import { buttonVariants, Input, Label, Popover } from "@adn-ui/react";

export default function Default() {
  return (
    <Popover>
      <Popover.Trigger className={buttonVariants({ variant: "outline" })}>
        Open Popover
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Popup className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="leading-none font-medium">Dimensions</h4>
                <p className="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input className="col-span-2 h-8" defaultValue="100%" id="width" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input className="col-span-2 h-8" defaultValue="300px" id="maxWidth" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input className="col-span-2 h-8" defaultValue="25px" id="height" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input className="col-span-2 h-8" defaultValue="none" id="maxHeight" />
                </div>
              </div>
            </div>
            <Popover.Close />
            <Popover.Arrow />
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover>
  );
}
