import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu.context";

export type DropdownMenuShortcutProps = React.ComponentProps<"span">;

export const DropdownMenuShortcut = ({ className, ...props }: DropdownMenuShortcutProps) => {
  const { slots } = useDropdownMenuContext();

  return <span className={cn(slots.shortcut(), className)} {...props} />;
};
