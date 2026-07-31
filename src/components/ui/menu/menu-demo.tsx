"use client";

import {
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "./menu";

export function MenuDemo() {
  return (
    <MenuRoot>
      <MenuTrigger className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer">
        Options Dropdown
      </MenuTrigger>
      <MenuPortal>
        <MenuPositioner sideOffset={4}>
          <MenuPopup>
            <MenuItem>Add to Library</MenuItem>
            <MenuItem>Add to Playlist</MenuItem>
            <MenuSeparator />
            <MenuItem>Play Next</MenuItem>
            <MenuItem>Play Last</MenuItem>
            <MenuSeparator />
            <MenuItem>Favorite</MenuItem>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </MenuRoot>
  );
}
