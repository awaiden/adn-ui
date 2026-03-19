import type { Meta, StoryObj } from "@storybook/react-vite";

import { NavigationMenu } from "./index";

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/NavigationMenu",
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  render: () => (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Item One</NavigationMenu.Trigger>
          <NavigationMenu.Content className="p-10 border rounded-lg bg-surface shadow-lg min-w-75">
            Content One
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/">Item Two</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  ),
};
