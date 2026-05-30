import type { Meta, StoryObj } from "@storybook/react-vite";

import { ContextMenu } from "radix-ui";
import { useState } from "react";

import { ContextMenuCheckboxItem } from "./context-menu-checkbox-item";
import { ContextMenuContent } from "./context-menu-content";
import { ContextMenuItem } from "./context-menu-item";
import { ContextMenuLabel } from "./context-menu-label";
import { ContextMenuRadioItem } from "./context-menu-radio-item";
import { ContextMenuRoot } from "./context-menu-root";
import { ContextMenuSeparator } from "./context-menu-separator";
import { ContextMenuShortcut } from "./context-menu-shortcut";
import { ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger } from "./context-menu-sub";
import { ContextMenuTrigger } from "./context-menu-trigger";

const meta = {
  component: ContextMenuRoot,
  title: "Components/ContextMenu",
} satisfies Meta<typeof ContextMenuRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenuRoot>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              Save Page As… <ContextMenuShortcut>⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut…</ContextMenuItem>
            <ContextMenuItem>Name Window…</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenuRoot>
  ),
};

const WithCheckboxesRender = () => {
  const [bookmarks, setBookmarks] = useState(true);
  const [urls, setUrls] = useState(false);

  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
          Show Bookmarks <ContextMenuShortcut>⌘B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={urls} onCheckedChange={setUrls}>
          Show Full URLs
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenuRoot>
  );
};

export const WithCheckboxes: Story = {
  render: () => <WithCheckboxesRender />,
};

const WithRadioGroupRender = () => {
  const [person, setPerson] = useState("pedro");

  return (
    <ContextMenuRoot>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>People</ContextMenuLabel>
        <ContextMenu.RadioGroup onValueChange={setPerson} value={person}>
          <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenu.RadioGroup>
      </ContextMenuContent>
    </ContextMenuRoot>
  );
};

export const WithRadioGroup: Story = {
  render: () => <WithRadioGroupRender />,
};
