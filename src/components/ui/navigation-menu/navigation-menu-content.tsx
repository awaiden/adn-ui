import { NavigationMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useNavigationMenuContext } from "./navigation-menu.context";

export type NavigationMenuContentProps = React.ComponentProps<typeof NavigationMenu.Content>;

export const NavigationMenuContent = ({ className, ...props }: NavigationMenuContentProps) => {
  const { slots } = useNavigationMenuContext();

  return <NavigationMenu.Content className={cn(slots.content(), className)} {...props} />;
};
