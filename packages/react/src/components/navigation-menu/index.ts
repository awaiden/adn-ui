import NavigationMenuContent from "./navigation-menu-content";
import NavigationMenuIndicator from "./navigation-menu-indicator";
import NavigationMenuItem from "./navigation-menu-item";
import NavigationMenuLink from "./navigation-menu-link";
import NavigationMenuList from "./navigation-menu-list";
import NavigationMenuRoot from "./navigation-menu-root";
import NavigationMenuTrigger from "./navigation-menu-trigger";
import NavigationMenuViewport from "./navigation-menu-viewport";

export const NavigationMenu = {
  Content: NavigationMenuContent,
  Indicator: NavigationMenuIndicator,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Root: NavigationMenuRoot,
  Trigger: NavigationMenuTrigger,
  Viewport: NavigationMenuViewport,
};

export {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
};

export type NavigationMenuRootProps = React.ComponentProps<typeof NavigationMenuRoot>;
export type NavigationMenuContentProps = React.ComponentProps<typeof NavigationMenuContent>;
export type NavigationMenuIndicatorProps = React.ComponentProps<typeof NavigationMenuIndicator>;
export type NavigationMenuItemProps = React.ComponentProps<typeof NavigationMenuItem>;
export type NavigationMenuLinkProps = React.ComponentProps<typeof NavigationMenuLink>;
export type NavigationMenuListProps = React.ComponentProps<typeof NavigationMenuList>;
export type NavigationMenuTriggerProps = React.ComponentProps<typeof NavigationMenuTrigger>;
export type NavigationMenuViewportProps = React.ComponentProps<typeof NavigationMenuViewport>;
