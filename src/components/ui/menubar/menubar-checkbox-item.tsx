import { Check } from "lucide-react";
import { Menubar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useMenubarContext } from "./menubar.context";

export type MenubarCheckboxItemProps = React.ComponentProps<typeof Menubar.CheckboxItem>;

export const MenubarCheckboxItem = ({
  children,
  className,
  ...props
}: MenubarCheckboxItemProps) => {
  const { slots } = useMenubarContext();

  return (
    <Menubar.CheckboxItem className={cn(slots.checkbox(), className)} {...props}>
      <Menubar.ItemIndicator className={slots.indicator()}>
        <Check />
      </Menubar.ItemIndicator>
      {children}
    </Menubar.CheckboxItem>
  );
};
