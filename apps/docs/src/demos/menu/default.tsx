"use client";

import { Button, Menu } from "@adn-ui/react";

export default function Default() {
  return (
    <div className="flex w-full items-center justify-center p-20">
      <Menu>
        <Menu.Trigger>
          <Button>Open Menu</Button>
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={8}>
            <Menu.Popup>
              <Menu.Arrow />
              <Menu.Item>Profile</Menu.Item>
              <Menu.Item>Billing</Menu.Item>
              <Menu.Item>Settings</Menu.Item>
              <Menu.Separator />
              <Menu.Item>Log out</Menu.Item>

              <Menu.Separator />
              <Menu.Submenu>
                <Menu.SubmenuTrigger>More Options</Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner>
                    <Menu.Popup>
                      <Menu.Item>Option 1</Menu.Item>
                      <Menu.Item>Option 2</Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Submenu>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu>
    </div>
  );
}
