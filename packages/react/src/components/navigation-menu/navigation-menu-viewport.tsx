import { cn } from "@adn-ui/core";
import { NavigationMenu } from "radix-ui";

import { useNavigationMenuContext } from "./navigation-menu-context";

export type NavigationMenuViewportProps = React.ComponentProps<typeof NavigationMenu.Viewport>;

export default function NavigationMenuViewport({
  className,
  ...props
}: NavigationMenuViewportProps) {
  const { slots } = useNavigationMenuContext();

  return (
    <div className={slots.viewportWrapper()}>
      <NavigationMenu.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(slots.viewport(), className)}
        {...props}
      />
    </div>
  );
}
