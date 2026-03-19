import { ChevronDown } from "lucide-react";
import { NavigationMenu } from "radix-ui";

import { useNavigationMenuContext } from "./navigation-menu-context";

export type NavigationMenuTriggerProps = React.ComponentProps<typeof NavigationMenu.Trigger>;

export default function NavigationMenuTrigger({
  children,
  className,
  ...props
}: NavigationMenuTriggerProps) {
  const { slots } = useNavigationMenuContext();

  return (
    <NavigationMenu.Trigger
      className={slots.trigger({ className })}
      data-slot="navigation-menu-trigger"
      {...props}
    >
      {children}
      <span className={slots.triggerIcon()} aria-hidden="true">
        <ChevronDown />
      </span>
    </NavigationMenu.Trigger>
  );
}
