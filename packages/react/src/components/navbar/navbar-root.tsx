import { navbarVariants, type NavbarVariants } from "@adn-ui/core";
import { cn } from "@adn-ui/core";

import { NavbarContext } from "./navbar-context";

export interface NavbarRootProps extends React.HTMLAttributes<HTMLElement>, NavbarVariants {
  isOpen?: boolean;
}

export default function NavbarRoot({
  className,
  sticky,
  fixed,
  border,
  isOpen,
  children,
  ...props
}: NavbarRootProps) {
  const slots = navbarVariants({ sticky, fixed, border });

  return (
    <NavbarContext value={{ slots, isOpen }}>
      <header data-slot="navbar-root" className={cn(slots.root(), className)} {...props}>
        {children}
      </header>
    </NavbarContext>
  );
}
