import type { Meta, StoryObj } from "@storybook/react-vite";

import { NavigationMenuContent } from "./navigation-menu-content";
import { NavigationMenuItem } from "./navigation-menu-item";
import { NavigationMenuLink } from "./navigation-menu-link";
import { NavigationMenuList } from "./navigation-menu-list";
import { NavigationMenuRoot } from "./navigation-menu-root";
import { NavigationMenuTrigger } from "./navigation-menu-trigger";

const meta = {
  component: NavigationMenuRoot,
  title: "Components/NavigationMenu",
} satisfies Meta<typeof NavigationMenuRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenuRoot>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li>
                <NavigationMenuLink href="/docs">
                  <div className="mb-1 font-medium">Introduction</div>
                  <p className="text-muted-foreground text-sm">
                    Build high-quality, accessible design systems.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/docs/getting-started">
                  <div className="mb-1 font-medium">Getting Started</div>
                  <p className="text-muted-foreground text-sm">
                    A quick tutorial to get you up and running.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/docs/styling">
                  <div className="mb-1 font-medium">Styling</div>
                  <p className="text-muted-foreground text-sm">
                    Unstyled and compatible with any styling solution.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/docs/animation">
                  <div className="mb-1 font-medium">Animation</div>
                  <p className="text-muted-foreground text-sm">
                    Use CSS keyframes or any animation library.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <li>
                <NavigationMenuLink href="/docs/accessibility">
                  <div className="mb-1 font-medium">Accessibility</div>
                  <p className="text-muted-foreground text-sm">
                    Tested in a range of browsers and assistive technologies.
                  </p>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="/docs/releases">
                  <div className="mb-1 font-medium">Releases</div>
                  <p className="text-muted-foreground text-sm">
                    Radix Primitives releases and their changelogs.
                  </p>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="https://github.com/radix-ui">Github</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenuRoot>
  ),
};
