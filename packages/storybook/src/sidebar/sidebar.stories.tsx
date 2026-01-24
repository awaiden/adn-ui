import type { Meta, StoryObj } from "@storybook/react-vite";

import { Link, Sidebar } from "@adn-ui/react";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Components/Sidebar",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sidebar.Root>
      <Sidebar.Panel>
        <Sidebar.Header>
          Sidebar Header
          <Sidebar.Trigger className='md:hidden' />
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Menu>
            <Sidebar.MenuLabel>Menu Label</Sidebar.MenuLabel>
            <Sidebar.MenuItem>
              <Link href='#'>Menu Item 1</Link>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Link href='#'>Menu Item 2</Link>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Link href='#'>Menu Item 3</Link>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Content>
        <Sidebar.Footer>Sidebar Footer</Sidebar.Footer>
      </Sidebar.Panel>
      <Sidebar.Outlet>
        <Sidebar.Trigger />
        Main Content Area
      </Sidebar.Outlet>
    </Sidebar.Root>
  ),
};
