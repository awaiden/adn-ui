"use client";

import {
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuPortal,
  ContextMenuPositioner,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "./context-menu";

export function ContextMenuDemo() {
  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className="flex h-32 w-full max-w-sm items-center justify-center rounded-md border border-dashed border-border bg-muted/30 text-sm text-muted-foreground select-none font-medium">
        Right click inside this box
      </ContextMenuTrigger>
      <ContextMenuPortal>
        <ContextMenuPositioner>
          <ContextMenuPopup>
            <ContextMenuItem>Add to Library</ContextMenuItem>
            <ContextMenuItem>Add to Playlist</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Play Next</ContextMenuItem>
            <ContextMenuItem>Play Last</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Favorite</ContextMenuItem>
            <ContextMenuItem>Share</ContextMenuItem>
          </ContextMenuPopup>
        </ContextMenuPositioner>
      </ContextMenuPortal>
    </ContextMenuRoot>
  );
}
