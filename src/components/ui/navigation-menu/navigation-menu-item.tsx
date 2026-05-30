import { NavigationMenu } from "radix-ui";

export type NavigationMenuItemProps = React.ComponentProps<typeof NavigationMenu.Item>;

export const NavigationMenuItem = (props: NavigationMenuItemProps) => {
  return <NavigationMenu.Item {...props} />;
};
