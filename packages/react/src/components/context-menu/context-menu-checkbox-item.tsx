import { cn } from "@adn-ui/core";
import { Check } from "lucide-react";
import { ContextMenu } from "radix-ui";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuCheckboxItemProps = React.ComponentProps<typeof ContextMenu.CheckboxItem>;

export default function ContextMenuCheckboxItem({
  checked,
  children,
  className,
  ...props
}: ContextMenuCheckboxItemProps) {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(slots.checkboxItem(), className)}
      checked={checked}
      {...props}
    >
      <ContextMenu.ItemIndicator className={slots.itemIndicator()}>
        <Check className="size-4" />
      </ContextMenu.ItemIndicator>
      {children}
    </ContextMenu.CheckboxItem>
  );
}
