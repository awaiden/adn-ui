import { Check } from "lucide-react";
import { ContextMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useContextMenuContext } from "./context-menu.context";

export type ContextMenuCheckboxItemProps = React.ComponentProps<typeof ContextMenu.CheckboxItem>;

export const ContextMenuCheckboxItem = ({
  children,
  className,
  ...props
}: ContextMenuCheckboxItemProps) => {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.CheckboxItem className={cn(slots.checkbox(), className)} {...props}>
      <ContextMenu.ItemIndicator className={slots.indicator()}>
        <Check />
      </ContextMenu.ItemIndicator>
      {children}
    </ContextMenu.CheckboxItem>
  );
};
