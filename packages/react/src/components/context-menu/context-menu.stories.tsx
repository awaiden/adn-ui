import type { Meta, StoryObj } from "@storybook/react-vite";

import { useState } from "react";

import { ContextMenu } from "./index";

const meta: Meta = {
  tags: ["autodocs"],
  title: "Components/ContextMenu",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
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
        <ContextMenu.Item>
          Save As...
          <ContextMenu.Shortcut>⌘S</ContextMenu.Shortcut>
        </ContextMenu.Item>
        <ContextMenu.Item>Print...</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => {
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
  },
};

export const WithRadioItems: Story = {
  render: () => {
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
  },
};

export const WithSubmenu: Story = {
  render: () => (
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
        <ContextMenu.Item disabled>Reload</ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Sub>
          <ContextMenu.SubTrigger>More Tools</ContextMenu.SubTrigger>
          <ContextMenu.SubContent>
            <ContextMenu.Item>Save Page As...</ContextMenu.Item>
            <ContextMenu.Item>Create Shortcut...</ContextMenu.Item>
            <ContextMenu.Item>Name Window...</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item>Developer Tools</ContextMenu.Item>
          </ContextMenu.SubContent>
        </ContextMenu.Sub>
        <ContextMenu.Separator />
        <ContextMenu.Item>
          Quit
          <ContextMenu.Shortcut>⌘Q</ContextMenu.Shortcut>
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};
