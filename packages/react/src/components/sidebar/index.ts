import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuLabel,
  SidebarOutlet,
  SidebarPanel,
  SidebarRoot,
  SidebarTrigger,
} from "./sidebar";

export const Sidebar = Object.assign(SidebarRoot, {
  Content: SidebarContent,
  Footer: SidebarFooter,
  Header: SidebarHeader,
  Menu: SidebarMenu,
  MenuItem: SidebarMenuItem,
  MenuLabel: SidebarMenuLabel,
  Outlet: SidebarOutlet,
  Panel: SidebarPanel,
  Root: SidebarRoot,
  Trigger: SidebarTrigger,
});

export * from "./sidebar";

export type { SidebarVariants } from "./sidebar.variants";
export { sidebarVariants } from "./sidebar.variants";
