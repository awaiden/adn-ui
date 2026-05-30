import { Check } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu.context";

export type DropdownMenuCheckboxItemProps = React.ComponentProps<typeof DropdownMenu.CheckboxItem>;

export const DropdownMenuCheckboxItem = ({
  children,
  className,
  ...props
}: DropdownMenuCheckboxItemProps) => {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.CheckboxItem className={cn(slots.checkbox(), className)} {...props}>
      <DropdownMenu.ItemIndicator className={slots.indicator()}>
        <Check />
      </DropdownMenu.ItemIndicator>
      {children}
    </DropdownMenu.CheckboxItem>
  );
};
