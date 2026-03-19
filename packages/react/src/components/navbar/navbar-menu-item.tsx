import { cn } from "@adn-ui/core";

import { useNavbarContext } from "./navbar-context";

export interface NavbarMenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function NavbarMenuItem({ className, ...props }: NavbarMenuItemProps) {
  const { slots } = useNavbarContext();

  return <a data-slot="navbar-menu-item" className={cn(slots.menuItem(), className)} {...props} />;
}
