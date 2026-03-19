import { cn } from "@adn-ui/core";

import { useNavbarContext } from "./navbar-context";

export interface NavbarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function NavbarContent({ className, ...props }: NavbarContentProps) {
  const { slots } = useNavbarContext();

  return <div data-slot="navbar-content" className={cn(slots.content(), className)} {...props} />;
}
