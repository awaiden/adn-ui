import type { Meta, StoryObj } from "@storybook/react-vite";

import { buttonVariants, Drawer, drawerVariants } from "@adn-ui/react";

const meta: Meta<typeof Drawer> = {
  args: {
    position: "left",
  },
  argTypes: {
    position: {
      control: { type: "radio" },
      options: Object.keys(drawerVariants.variants.position),
    },
  },
  component: Drawer,
  title: "Components/Drawer",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Drawer {...args}>
      <Drawer.Trigger className={buttonVariants()}>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Viewport>
          <Drawer.Popup>
            <Drawer.Title>Drawer Title</Drawer.Title>
            <Drawer.Description>This is a description for the drawer component.</Drawer.Description>
            <div className='my-4'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi blanditiis placeat
              itaque! Corrupti amet rem explicabo iusto ducimus saepe molestiae esse illum eum,
              magni asperiores culpa voluptas mollitia odio blanditiis.
            </div>
            <Drawer.Close />
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer>
  ),
};
