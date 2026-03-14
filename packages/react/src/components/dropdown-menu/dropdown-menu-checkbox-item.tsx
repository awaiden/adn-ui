import { Check } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

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
      data-slot="dropdown-menu-checkbox-item"
      className={cn(slots.checkboxItem(), className)}
      checked={checked}
      {...props}
    >
      <DropdownMenu.ItemIndicator className={slots.itemIndicator()}>
        <Check className="size-4" />
      </DropdownMenu.ItemIndicator>
      {children}
    </DropdownMenu.CheckboxItem>
  );
}
