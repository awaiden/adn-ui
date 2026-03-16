import { cn } from "@adn-ui/core";
import { DropdownMenu } from "radix-ui";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuSubContentProps = React.ComponentProps<typeof DropdownMenu.SubContent>;

export default function DropdownMenuSubContent({
  className,
  ...props
}: DropdownMenuSubContentProps) {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent
        data-slot="dropdown-menu-sub-content"
        className={cn(slots.subContent(), className)}
        {...props}
      />
    </DropdownMenu.Portal>
  );
}
