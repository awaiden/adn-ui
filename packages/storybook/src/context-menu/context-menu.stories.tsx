import type { Meta, StoryObj } from "@storybook/react-vite";

import { ContextMenu } from "@adn-ui/react";

const meta: Meta<typeof ContextMenu> = {
  component: ContextMenu,
  title: "Components/ContextMenu",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className='flex h-screen items-center justify-center'>
      <ContextMenu {...args}>
        <ContextMenu.Trigger className='btn'>Right Click Me</ContextMenu.Trigger>
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
  ),
};
