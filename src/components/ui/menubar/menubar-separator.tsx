import { Menubar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useMenubarContext } from "./menubar.context";

export type MenubarSeparatorProps = React.ComponentProps<typeof Menubar.Separator>;

export const MenubarSeparator = ({ className, ...props }: MenubarSeparatorProps) => {
  const { slots } = useMenubarContext();

  return <Menubar.Separator className={cn(slots.separator(), className)} {...props} />;
};
