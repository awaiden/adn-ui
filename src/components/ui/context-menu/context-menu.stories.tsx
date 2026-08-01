"use client";

import React from "react";

import {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuPopup,
  ContextMenuItem,
} from "./context-menu";

export default {
  title: "Components/ContextMenu",
  component: ContextMenuRoot,
};

export const Default = () => (
  <ContextMenuRoot>
    <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuPositioner>
        <ContextMenuPopup>
          <ContextMenuItem>Back</ContextMenuItem>
          <ContextMenuItem>Reload</ContextMenuItem>
          <ContextMenuItem>Inspect</ContextMenuItem>
        </ContextMenuPopup>
      </ContextMenuPositioner>
    </ContextMenuPortal>
  </ContextMenuRoot>
);
