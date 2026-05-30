import { NavigationMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useNavigationMenuContext } from "./navigation-menu.context";

export type NavigationMenuLinkProps = React.ComponentProps<typeof NavigationMenu.Link>;

export const NavigationMenuLink = ({ className, ...props }: NavigationMenuLinkProps) => {
  const { slots } = useNavigationMenuContext();

  return <NavigationMenu.Link className={cn(slots.link(), className)} {...props} />;
};
