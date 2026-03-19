import { NavigationMenu } from "radix-ui";

import { useNavigationMenuContext } from "./navigation-menu-context";

export type NavigationMenuIndicatorProps = React.ComponentProps<typeof NavigationMenu.Indicator>;

export default function NavigationMenuIndicator({
  className,
  ...props
}: NavigationMenuIndicatorProps) {
  const { slots } = useNavigationMenuContext();

  return (
    <NavigationMenu.Indicator
      className={slots.indicator({ className })}
      data-slot="navigation-menu-indicator"
      {...props}
    >
      <div className={slots.indicatorInner()} />
    </NavigationMenu.Indicator>
  );
}
