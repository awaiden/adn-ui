import { cn } from "tailwind-variants";

import { useMenubarContext } from "./menubar.context";

export type MenubarShortcutProps = React.ComponentProps<"span">;

export const MenubarShortcut = ({ className, ...props }: MenubarShortcutProps) => {
  const { slots } = useMenubarContext();

  return <span className={cn(slots.shortcut(), className)} {...props} />;
};
