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
      <MenuTrigger className="border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex cursor-pointer items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors">
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
