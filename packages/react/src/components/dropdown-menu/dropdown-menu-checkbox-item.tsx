import { cn } from "@adn-ui/core";
import { Check } from "lucide-react";
import { DropdownMenu } from "radix-ui";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuCheckboxItemProps = React.ComponentProps<typeof DropdownMenu.CheckboxItem>;

export default function DropdownMenuCheckboxItem({
  checked,
  children,
  className,
  ...props
}: DropdownMenuCheckboxItemProps) {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.CheckboxItem
      checked={checked}
      className={slots.checkboxItem({ className })}
      {...props}
    >
      <span className={slots.itemIndicator()}>
        <DropdownMenu.ItemIndicator>
          <Check className={cn(slots.itemIndicatorIcon(), "check")} />
        </DropdownMenu.ItemIndicator>
      </span>
      {children}
    </DropdownMenu.CheckboxItem>
  );
}
