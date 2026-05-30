import { Menubar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useMenubarContext } from "./menubar.context";

export type MenubarItemProps = React.ComponentProps<typeof Menubar.Item>;

export const MenubarItem = ({ className, ...props }: MenubarItemProps) => {
  const { slots } = useMenubarContext();

  return <Menubar.Item className={cn(slots.item(), className)} {...props} />;
};
