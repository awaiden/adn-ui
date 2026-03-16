import { cn } from "@adn-ui/core";
import { DropdownMenu } from "radix-ui";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuItemProps = React.ComponentProps<typeof DropdownMenu.Item>;

export default function DropdownMenuItem({ className, ...props }: DropdownMenuItemProps) {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.Item
      data-slot="dropdown-menu-item"
      className={cn(slots.item(), className)}
      {...props}
    />
  );
}
