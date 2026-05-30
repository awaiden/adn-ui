import type { Meta, StoryObj } from "@storybook/react-vite";

import { Menubar } from "radix-ui";
import { useState } from "react";

import { MenubarCheckboxItem } from "./menubar-checkbox-item";
import { MenubarContent } from "./menubar-content";
import { MenubarItem } from "./menubar-item";
import { MenubarMenu } from "./menubar-menu";
import { MenubarRadioItem } from "./menubar-radio-item";
import { MenubarRoot } from "./menubar-root";
import { MenubarSeparator } from "./menubar-separator";
import { MenubarShortcut } from "./menubar-shortcut";
import { MenubarSub, MenubarSubContent, MenubarSubTrigger } from "./menubar-sub";
import { MenubarTrigger } from "./menubar-trigger";

const meta = {
  component: MenubarRoot,
  title: "Components/Menubar",
} satisfies Meta<typeof MenubarRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

const MenubarDemo = () => {
  const [bookmarks, setBookmarks] = useState(true);
  const [urls, setUrls] = useState(false);
  const [person, setPerson] = useState("andy");

  return (
    <MenubarRoot>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email Link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print… <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked={bookmarks} onCheckedChange={setBookmarks}>
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked={urls} onCheckedChange={setUrls}>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <Menubar.RadioGroup onValueChange={setPerson} value={person}>
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoît</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </Menubar.RadioGroup>
          <MenubarSeparator />
          <MenubarItem>Edit…</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Add Profile…</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </MenubarRoot>
  );
};

export const Default: Story = {
  render: () => <MenubarDemo />,
};
