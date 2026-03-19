import { cn } from "@adn-ui/core";

import { useNavbarContext } from "./navbar-context";

export interface NavbarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function NavbarItem({ className, ...props }: NavbarItemProps) {
  const { slots } = useNavbarContext();

  return <a data-slot="navbar-item" className={cn(slots.item(), className)} {...props} />;
}
