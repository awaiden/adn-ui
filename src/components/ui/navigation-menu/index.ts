import { NavigationMenuContent } from "./navigation-menu-content";
import { NavigationMenuItem } from "./navigation-menu-item";
import { NavigationMenuLink } from "./navigation-menu-link";
import { NavigationMenuList } from "./navigation-menu-list";
import { NavigationMenuRoot } from "./navigation-menu-root";
import { NavigationMenuTrigger } from "./navigation-menu-trigger";

export const NavigationMenu = {
  Content: NavigationMenuContent,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Root: NavigationMenuRoot,
  Trigger: NavigationMenuTrigger,
};

export {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
};

export type { NavigationMenuContentProps } from "./navigation-menu-content";

export type { NavigationMenuItemProps } from "./navigation-menu-item";

export type { NavigationMenuLinkProps } from "./navigation-menu-link";
export type { NavigationMenuListProps } from "./navigation-menu-list";
export type { NavigationMenuRootProps } from "./navigation-menu-root";
export type { NavigationMenuTriggerProps } from "./navigation-menu-trigger";
export { NavigationMenuContext, useNavigationMenuContext } from "./navigation-menu.context";
export { type NavigationMenuVariants, navigationMenuVariants } from "./navigation-menu.variants";
