import { cn } from "@adn-ui/core";
import { NavigationMenu } from "radix-ui";

import { useNavigationMenuContext } from "./navigation-menu-context";

export type NavigationMenuContentProps = React.ComponentProps<typeof NavigationMenu.Content>;

export default function NavigationMenuContent({ className, ...props }: NavigationMenuContentProps) {
  const { slots } = useNavigationMenuContext();

  return (
    <NavigationMenu.Content
      data-slot="navigation-menu-content"
      className={cn(slots.content(), className)}
      {...props}
    />
  );
}
