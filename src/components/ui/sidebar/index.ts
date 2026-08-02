import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRoot,
  SidebarTrigger,
} from "./sidebar";

/**
 * @see https://ui.awaiden.com/llms.mdx/docs/components/sidebar/content.md
 */
export const Sidebar = {
  Content: SidebarContent,
  Footer: SidebarFooter,
  Group: SidebarGroup,
  GroupContent: SidebarGroupContent,
  GroupLabel: SidebarGroupLabel,
  Header: SidebarHeader,
  Menu: SidebarMenu,
  MenuButton: SidebarMenuButton,
  MenuItem: SidebarMenuItem,
  Provider: SidebarProvider,
  Root: SidebarRoot,
  Trigger: SidebarTrigger,
};

export {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRoot,
  SidebarTrigger,
};

export type {
  SidebarContentProps,
  SidebarFooterProps,
  SidebarGroupContentProps,
  SidebarGroupLabelProps,
  SidebarGroupProps,
  SidebarHeaderProps,
  SidebarMenuButtonProps,
  SidebarMenuItemProps,
  SidebarMenuProps,
  SidebarProps,
  SidebarProviderProps,
  SidebarTriggerProps,
} from "./sidebar";

export { SidebarContext, useSidebar } from "./sidebar.context";
export { type SidebarVariants, sidebarVariants } from "./sidebar.variants";
