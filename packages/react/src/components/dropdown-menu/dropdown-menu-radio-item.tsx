import { cn } from "@adn-ui/core";
import { Circle } from "lucide-react";
import { DropdownMenu } from "radix-ui";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuRadioItemProps = React.ComponentProps<typeof DropdownMenu.RadioItem>;

export default function DropdownMenuRadioItem({
  children,
  className,
  ...props
}: DropdownMenuRadioItemProps) {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(slots.radioItem(), className)}
      {...props}
    >
      <DropdownMenu.ItemIndicator className={slots.itemIndicator()}>
        <Circle className="size-2 fill-current" />
      </DropdownMenu.ItemIndicator>
      {children}
    </DropdownMenu.RadioItem>
  );
}
