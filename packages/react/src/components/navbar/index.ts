import {
  NavbarContainer,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarRoot,
  NavbarToggle,
} from "./navbar";

export const Navbar = Object.assign(NavbarRoot, {
  Container: NavbarContainer,
  Content: NavbarContent,
  Item: NavbarItem,
  Menu: NavbarMenu,
  MenuItem: NavbarMenuItem,
  Root: NavbarRoot,
  Toggle: NavbarToggle,
});

export * from "./navbar";

export type { NavbarVariants } from "./navbar.variants";
export { navbarVariants } from "./navbar.variants";
