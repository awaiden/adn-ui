import {
  NavbarContainer,
  NavbarContent,
  NavbarList,
  NavbarListItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarRoot,
  NavbarToggle,
} from "./navbar";

export const Navbar = Object.assign(NavbarRoot, {
  Container: NavbarContainer,
  Content: NavbarContent,
  List: NavbarList,
  ListItem: NavbarListItem,
  Menu: NavbarMenu,
  MenuItem: NavbarMenuItem,
  Root: NavbarRoot,
  Toggle: NavbarToggle,
});

export * from "./navbar";

export type { NavbarVariants } from "./navbar.variants";
export { navbarVariants } from "./navbar.variants";
