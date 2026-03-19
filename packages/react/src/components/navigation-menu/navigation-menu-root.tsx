import { navigationMenuVariants } from "@adn-ui/core";
import { cn } from "@adn-ui/core";
import { NavigationMenu } from "radix-ui";

import { NavigationMenuContext } from "./navigation-menu-context";

export type NavigationMenuRootProps = React.ComponentProps<typeof NavigationMenu.Root>;

export default function NavigationMenuRoot({
  className,
  children,
  ...props
}: NavigationMenuRootProps) {
  const slots = navigationMenuVariants();

  return (
    <NavigationMenuContext value={{ slots }}>
      <NavigationMenu.Root
        data-slot="navigation-menu-root"
        className={cn(slots.root(), className)}
        {...props}
      >
        {children}
      </NavigationMenu.Root>
    </NavigationMenuContext>
  );
}
