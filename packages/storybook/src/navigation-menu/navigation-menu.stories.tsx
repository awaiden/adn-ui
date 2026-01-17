import type { Meta, StoryObj } from "@storybook/react";

import { NavigationMenu } from "@adn-ui/react";

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  title: "Components/NavigationMenu",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <div className="flex justify-center">
      <NavigationMenu {...args}>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Overview</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul className="grid grid-cols-2 gap-4">
                {overviewLinks.map((link) => (
                  <li key={link.href}>
                    <a className="link flex flex-col items-start" href={link.href}>
                      <h4 className="mb-1 font-medium">{link.title}</h4>
                      <p className="text-muted-foreground text-sm">{link.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Handbook</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <ul className="flex flex-col gap-4">
                {handbookLinks.map((link) => (
                  <li key={link.href}>
                    <a className="link flex flex-col items-start gap-2" href={link.href}>
                      <h4 className="mb-1 font-medium">{link.title}</h4>
                      <p className="text-muted-foreground text-sm">{link.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <a className="link" href=" #">
              Github
            </a>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.Portal>
          <NavigationMenu.Positioner
            collisionAvoidance={{ side: "none" }}
            collisionPadding={{ bottom: 5, left: 20, right: 20, top: 5 }}
            sideOffset={10}
          >
            <NavigationMenu.Popup>
              <NavigationMenu.Arrow />
              <NavigationMenu.Viewport />
            </NavigationMenu.Popup>
          </NavigationMenu.Positioner>
        </NavigationMenu.Portal>
      </NavigationMenu>
    </div>
  ),
};

const overviewLinks = [
  {
    description: "Install and assemble your first component.",
    href: "/react/overview/quick-start",
    title: "Quick Start",
  },
  {
    description: "Learn how we build accessible components.",
    href: "/react/overview/accessibility",
    title: "Accessibility",
  },
  {
    description: "See what’s new in the latest Base UI versions.",
    href: "/react/overview/releases",
    title: "Releases",
  },
  {
    description: "Learn more about Base UI and our mission.",
    href: "/react/overview/about",
    title: "About",
  },
] as const;

const handbookLinks = [
  {
    description:
      "Base UI components can be styled with plain CSS, Tailwind CSS, CSS-in-JS, or CSS Modules.",
    href: "/react/handbook/styling",
    title: "Styling",
  },
  {
    description:
      "Base UI components can be animated with CSS transitions, CSS animations, or JavaScript libraries.",
    href: "/react/handbook/animation",
    title: "Animation",
  },
  {
    description:
      "Base UI components can be replaced and composed with your own existing components.",
    href: "/react/handbook/composition",
    title: "Composition",
  },
] as const;
