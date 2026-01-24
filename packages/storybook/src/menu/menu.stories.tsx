import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Menu } from "@adn-ui/react";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "Components/Menu",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className='flex h-screen items-center justify-center'>
      <Menu {...args}>
        <Menu.Trigger>
          <Button>Open Menu</Button>
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={8}>
            <Menu.Popup>
              <Menu.Arrow />
              <Menu.Item>Item 1</Menu.Item>
              <Menu.Item>Item 2</Menu.Item>
              <Menu.Separator />
              <Menu.Item>Item 3</Menu.Item>
              <Menu.Separator />
              <Menu.Group>
                <Menu.GroupLabel>Group 1</Menu.GroupLabel>
                <Menu.Item>Item 6</Menu.Item>
              </Menu.Group>
              <Menu.Separator />
              <Menu.Submenu>
                <Menu.SubmenuTrigger>Open Submenu</Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner>
                    <Menu.Popup>
                      <Menu.Item>Submenu Item 1</Menu.Item>
                      <Menu.Item>Submenu Item 2</Menu.Item>
                      <Menu.Item>Submenu Item 3</Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Submenu>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu>
    </div>
  ),
};
