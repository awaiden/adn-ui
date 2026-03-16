import { cn } from "@adn-ui/core";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuShortcutProps = React.ComponentProps<"span">;

export default function DropdownMenuShortcut({ className, ...props }: DropdownMenuShortcutProps) {
  const { slots } = useDropdownMenuContext();

  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(slots.shortcut(), className)}
      {...props}
    />
  );
}
