import NavbarBrand from "./navbar-brand";
import NavbarContent from "./navbar-content";
import NavbarItem from "./navbar-item";
import NavbarMenu from "./navbar-menu";
import NavbarMenuItem from "./navbar-menu-item";
import NavbarRoot from "./navbar-root";
import NavbarToggle from "./navbar-toggle";

export const Navbar = {
  Brand: NavbarBrand,
  Content: NavbarContent,
  Item: NavbarItem,
  Menu: NavbarMenu,
  MenuItem: NavbarMenuItem,
  Root: NavbarRoot,
  Toggle: NavbarToggle,
};

export {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarRoot,
  NavbarToggle,
};

export type NavbarRootProps = React.ComponentProps<typeof NavbarRoot>;
export type NavbarBrandProps = React.ComponentProps<typeof NavbarBrand>;
export type NavbarContentProps = React.ComponentProps<typeof NavbarContent>;
export type NavbarItemProps = React.ComponentProps<typeof NavbarItem>;
export type NavbarMenuProps = React.ComponentProps<typeof NavbarMenu>;
export type NavbarMenuItemProps = React.ComponentProps<typeof NavbarMenuItem>;
export type NavbarToggleProps = React.ComponentProps<typeof NavbarToggle>;
