"use client";

import {
  DropdownMenuItem,
  DropdownMenuPopup,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuRoot,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export function DropdownMenuDemo() {
  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger className="border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors">
        Options Dropdown
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuPositioner sideOffset={4}>
          <DropdownMenuPopup>
            <DropdownMenuItem>Add to Library</DropdownMenuItem>
            <DropdownMenuItem>Add to Playlist</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Play Next</DropdownMenuItem>
            <DropdownMenuItem>Play Last</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Favorite</DropdownMenuItem>
          </DropdownMenuPopup>
        </DropdownMenuPositioner>
      </DropdownMenuPortal>
    </DropdownMenuRoot>
  );
}
