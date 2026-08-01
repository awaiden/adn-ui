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
      <ContextMenuTrigger className="border-border bg-muted/30 text-muted-foreground flex h-32 w-full max-w-sm items-center justify-center rounded-md border border-dashed text-sm font-medium select-none">
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
