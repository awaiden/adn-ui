import { NavigationMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useNavigationMenuContext } from "./navigation-menu.context";

export type NavigationMenuListProps = React.ComponentProps<typeof NavigationMenu.List>;

export const NavigationMenuList = ({ className, ...props }: NavigationMenuListProps) => {
  const { slots } = useNavigationMenuContext();

  return <NavigationMenu.List className={cn(slots.list(), className)} {...props} />;
};
