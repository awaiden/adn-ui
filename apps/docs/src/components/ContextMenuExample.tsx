"use client";

import { ContextMenu } from "@adn-ui/react";
import { useState } from "react";

function Default() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="text-muted-foreground flex h-36 w-72 items-center justify-center rounded-md border border-dashed text-sm">
          Right-click here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content className="w-64">
        <ContextMenu.Item>
          Back
          <ContextMenu.Shortcut>⌘[</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item>
          Forward
          <ContextMenu.Shortcut>⌘]</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item>
          Reload
          <ContextMenu.Shortcut>⌘R</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Item>Save As...</ContextMenu.Item>
        <ContextMenu.Item>Print...</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

function WithCheckbox() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showUrls, setShowUrls] = useState(false);

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="text-muted-foreground flex h-36 w-72 items-center justify-center rounded-md border border-dashed text-sm">
          Right-click here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content className="w-64">
        <ContextMenu.Label>Appearance</ContextMenu.Label>
        <ContextMenu.Separator />
        <ContextMenu.CheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
          Show Bookmarks
          <ContextMenu.Shortcut>⌘B</ContextMenu.Shortcut>
        </ContextMenu.CheckboxItem>
        <ContextMenu.CheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
          Show Full URLs
        </ContextMenu.CheckboxItem>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

function WithRadio() {
  const [person, setPerson] = useState("pedro");

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="text-muted-foreground flex h-36 w-72 items-center justify-center rounded-md border border-dashed text-sm">
          Right-click here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content className="w-64">
        <ContextMenu.Label>People</ContextMenu.Label>
        <ContextMenu.Separator />
        <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
          <ContextMenu.RadioItem value="pedro">Pedro Duarte</ContextMenu.RadioItem>
          <ContextMenu.RadioItem value="colm">Colm Tuite</ContextMenu.RadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

function WithSubmenu() {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <div className="text-muted-foreground flex h-36 w-72 items-center justify-center rounded-md border border-dashed text-sm">
          Right-click here
        </div>
      </ContextMenu.Trigger>
      <ContextMenu.Content className="w-64">
        <ContextMenu.Item>Back</ContextMenu.Item>
        <ContextMenu.Item>Forward</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>More Tools</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Save Page As...</ContextMenu.Item>
            <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Developer Tools</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
      </ContextMenu.Content>
    </ContextMenu.Root>
  );
}

export const ContextMenuExample = {
  Default,
  WithCheckbox,
  WithRadio,
  WithSubmenu,
};
