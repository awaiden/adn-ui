import { Menubar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useMenubarContext } from "./menubar.context";

export type MenubarLabelProps = React.ComponentProps<typeof Menubar.Label>;

export const MenubarLabel = ({ className, ...props }: MenubarLabelProps) => {
  const { slots } = useMenubarContext();

  return <Menubar.Label className={cn(slots.label(), className)} {...props} />;
};
