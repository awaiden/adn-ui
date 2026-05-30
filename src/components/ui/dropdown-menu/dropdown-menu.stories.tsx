import type { Meta, StoryObj } from "@storybook/react-vite";

import { Menu } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";

import { DropdownMenuCheckboxItem } from "./dropdown-menu-checkbox-item";
import { DropdownMenuContent } from "./dropdown-menu-content";
import { DropdownMenuItem } from "./dropdown-menu-item";
import { DropdownMenuLabel } from "./dropdown-menu-label";
import { DropdownMenuRadioItem } from "./dropdown-menu-radio-item";
import { DropdownMenuRoot } from "./dropdown-menu-root";
import { DropdownMenuSeparator } from "./dropdown-menu-separator";
import { DropdownMenuShortcut } from "./dropdown-menu-shortcut";
import {
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./dropdown-menu-sub";
import { DropdownMenuTrigger } from "./dropdown-menu-trigger";

const meta = {
  component: DropdownMenuRoot,
  title: "Components/DropdownMenu",
} satisfies Meta<typeof DropdownMenuRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <button className="inline-flex size-9 items-center justify-center rounded-md border">
          <Menu className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          New Tab <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          New Window <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          New Private Window <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              Save Page As… <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
            <DropdownMenuItem>Name Window…</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  ),
};

const WithCheckboxesRender = () => {
  const [bookmarks, setBookmarks] = useState(true);
  const [urls, setUrls] = useState(false);

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <button className="inline-flex size-9 items-center justify-center rounded-md border">
          <Menu className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
          Show Bookmarks <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={urls} onCheckedChange={setUrls}>
          Show Full URLs
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

export const WithCheckboxes: Story = {
  render: () => <WithCheckboxesRender />,
};

const WithRadioGroupRender = () => {
  const [person, setPerson] = useState("pedro");

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        <button className="inline-flex size-9 items-center justify-center rounded-md border">
          <Menu className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>People</DropdownMenuLabel>
        <DropdownMenu.RadioGroup onValueChange={setPerson} value={person}>
          <DropdownMenuRadioItem value="pedro">Pedro Duarte</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">Colm Tuite</DropdownMenuRadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
};

export const WithRadioGroup: Story = {
  render: () => <WithRadioGroupRender />,
};
