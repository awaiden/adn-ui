import { cn } from "@adn-ui/core";
import { Circle } from "lucide-react";
import { ContextMenu } from "radix-ui";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuRadioItemProps = React.ComponentProps<typeof ContextMenu.RadioItem>;

export default function ContextMenuRadioItem({
  children,
  className,
  ...props
}: ContextMenuRadioItemProps) {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(slots.radioItem(), className)}
      {...props}
    >
      <ContextMenu.ItemIndicator className={slots.itemIndicator()}>
        <Circle className="size-2 fill-current" />
      </ContextMenu.ItemIndicator>
      {children}
    </ContextMenu.RadioItem>
  );
}
