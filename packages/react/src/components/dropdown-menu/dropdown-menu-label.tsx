import { cn } from "@adn-ui/core";
import { DropdownMenu } from "radix-ui";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuLabelProps = React.ComponentProps<typeof DropdownMenu.Label>;

export default function DropdownMenuLabel({ className, ...props }: DropdownMenuLabelProps) {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.Label
      data-slot="dropdown-menu-label"
      className={cn(slots.label(), className)}
      {...props}
    />
  );
}
