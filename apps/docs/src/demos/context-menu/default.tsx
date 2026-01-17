"use client";

import { ContextMenu } from "@adn-ui/react";

export default function Default() {
  return (
    <div className="flex items-center justify-center rounded-md border p-8">
      <ContextMenu>
        <ContextMenu.Trigger className="block rounded-md border-2 border-dashed border-gray-300 p-8 hover:border-gray-400">
          Right Click Me
        </ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Positioner>
            <ContextMenu.Popup>
              <ContextMenu.Arrow />
              <ContextMenu.Item onSelect={() => alert("Cut selected")}>Cut</ContextMenu.Item>
              <ContextMenu.Item onSelect={() => alert("Copy selected")}>Copy</ContextMenu.Item>
              <ContextMenu.Item onSelect={() => alert("Paste selected")}>Paste</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item onSelect={() => alert("Delete selected")}>Delete</ContextMenu.Item>
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu>
    </div>
  );
}
