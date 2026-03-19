import { cn } from "@adn-ui/core";

import { useNavbarContext } from "./navbar-context";

export interface NavbarMenuProps extends React.HTMLAttributes<HTMLElement> {}

export default function NavbarMenu({ className, ...props }: NavbarMenuProps) {
  const { slots, isOpen } = useNavbarContext();

  return (
    <nav
      data-slot="navbar-menu"
      data-state={isOpen ? "open" : "closed"}
      className={cn(slots.menu(), className)}
      {...props}
    />
  );
}
