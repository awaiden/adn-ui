import { cn } from "@adn-ui/core";
import { NavigationMenu } from "radix-ui";

import { useNavigationMenuContext } from "./navigation-menu-context";

export type NavigationMenuListProps = React.ComponentProps<typeof NavigationMenu.List>;

export default function NavigationMenuList({ className, ...props }: NavigationMenuListProps) {
  const { slots } = useNavigationMenuContext();

  return (
    <NavigationMenu.List
      data-slot="navigation-menu-list"
      className={cn(slots.list(), className)}
      {...props}
    />
  );
}
