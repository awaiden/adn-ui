import { ChevronDown } from "lucide-react";
import { NavigationMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useNavigationMenuContext } from "./navigation-menu.context";

export type NavigationMenuTriggerProps = React.ComponentProps<typeof NavigationMenu.Trigger>;

export const NavigationMenuTrigger = ({
  children,
  className,
  ...props
}: NavigationMenuTriggerProps) => {
  const { slots } = useNavigationMenuContext();

  return (
    <NavigationMenu.Trigger className={cn(slots.trigger(), className)} {...props}>
      {children}
      <ChevronDown aria-hidden className="navigation-menu__chevron" />
    </NavigationMenu.Trigger>
  );
};
