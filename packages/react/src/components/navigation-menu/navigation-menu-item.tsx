import { cn } from "@adn-ui/core";
import { NavigationMenu } from "radix-ui";

import { useNavigationMenuContext } from "./navigation-menu-context";

export type NavigationMenuItemProps = React.ComponentProps<typeof NavigationMenu.Item>;

export default function NavigationMenuItem({ className, ...props }: NavigationMenuItemProps) {
  const { slots } = useNavigationMenuContext();

  return (
    <NavigationMenu.Item
      data-slot="navigation-menu-item"
      className={cn(slots.item(), className)}
      {...props}
    />
  );
}
