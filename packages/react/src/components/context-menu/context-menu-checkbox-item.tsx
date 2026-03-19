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
      checked={checked}
      className={slots.checkboxItem({ className })}
      {...props}
    >
      <span className={slots.itemIndicator()}>
        <ContextMenu.ItemIndicator>
          <Check className={cn(slots.itemIndicatorIcon(), "check")} />
        </ContextMenu.ItemIndicator>
      </span>
      {children}
    </ContextMenu.CheckboxItem>
  );
}
