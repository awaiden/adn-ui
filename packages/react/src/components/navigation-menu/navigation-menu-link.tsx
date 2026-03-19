import { cn } from "@adn-ui/core";
import { NavigationMenu } from "radix-ui";

import { useNavigationMenuContext } from "./navigation-menu-context";

export type NavigationMenuLinkProps = React.ComponentProps<typeof NavigationMenu.Link>;

export default function NavigationMenuLink({ className, ...props }: NavigationMenuLinkProps) {
  const { slots } = useNavigationMenuContext();

  return (
    <NavigationMenu.Link
      data-slot="navigation-menu-link"
      className={cn(slots.link(), className)}
      {...props}
    />
  );
}
