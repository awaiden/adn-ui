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

export { NavigationMenuContext, useNavigationMenuContext } from "./navigation-menu.context";

export { type NavigationMenuVariants, navigationMenuVariants } from "./navigation-menu.variants";
