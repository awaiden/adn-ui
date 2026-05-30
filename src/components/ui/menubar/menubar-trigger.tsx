import { Menubar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useMenubarContext } from "./menubar.context";

export type MenubarTriggerProps = React.ComponentProps<typeof Menubar.Trigger>;

export const MenubarTrigger = ({ className, ...props }: MenubarTriggerProps) => {
  const { slots } = useMenubarContext();

  return <Menubar.Trigger className={cn(slots.trigger(), className)} {...props} />;
};
