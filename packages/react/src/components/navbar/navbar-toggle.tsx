import { cn } from "@adn-ui/core";
import { Menu, X } from "lucide-react";

import { useNavbarContext } from "./navbar-context";

export interface NavbarToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function NavbarToggle({ className, ...props }: NavbarToggleProps) {
  const { slots, isOpen } = useNavbarContext();

  return (
    <button
      type="button"
      data-slot="navbar-toggle"
      data-state={isOpen ? "open" : "closed"}
      className={cn(slots.toggle(), className)}
      {...props}
    >
      {isOpen ? <X className={slots.toggleIcon()} /> : <Menu className={slots.toggleIcon()} />}
      <span className={slots.srOnly()}>Toggle menu</span>
    </button>
  );
}
