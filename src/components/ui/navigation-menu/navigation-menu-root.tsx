import "./navigation-menu.css";

import { NavigationMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { NavigationMenuContext, useNavigationMenuContext } from "./navigation-menu.context";
import { navigationMenuVariants } from "./navigation-menu.variants";

export type NavigationMenuRootProps = React.ComponentProps<typeof NavigationMenu.Root>;

export const NavigationMenuRoot = ({ children, className, ...props }: NavigationMenuRootProps) => {
  const slots = navigationMenuVariants();

  return (
    <NavigationMenuContext value={{ slots }}>
      <NavigationMenu.Root className={cn(slots.root(), className)} {...props}>
        {children}
        <NavigationMenuViewport />
      </NavigationMenu.Root>
    </NavigationMenuContext>
  );
};

const NavigationMenuViewport = () => {
  const { slots } = useNavigationMenuContext();

  return (
    <div className={slots.viewportWrapper()}>
      <NavigationMenu.Viewport className={slots.viewport()} />
    </div>
  );
};
