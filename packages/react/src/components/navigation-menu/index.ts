import {
  NavigationMenuArrow,
  NavigationMenuBackdrop,
  NavigationMenuContent,
  NavigationMenuIcon,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuPopup,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./navigation-menu";

export const NavigationMenu = Object.assign(NavigationMenuRoot, {
  Arrow: NavigationMenuArrow,
  Backdrop: NavigationMenuBackdrop,
  Content: NavigationMenuContent,
  Icon: NavigationMenuIcon,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Popup: NavigationMenuPopup,
  Portal: NavigationMenuPortal,
  Positioner: NavigationMenuPositioner,
  Root: NavigationMenuRoot,
  Trigger: NavigationMenuTrigger,
  Viewport: NavigationMenuViewport,
});

export * from "./navigation-menu";

export type { NavigationMenuVariants } from "./navigation-menu.variants";
export { navigationMenuVariants } from "./navigation-menu.variants";
