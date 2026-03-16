import { cn } from "@adn-ui/core";
import { ContextMenu } from "radix-ui";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuItemProps = React.ComponentProps<typeof ContextMenu.Item>;

export default function ContextMenuItem({ className, ...props }: ContextMenuItemProps) {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.Item
      data-slot="context-menu-item"
      className={cn(slots.item(), className)}
      {...props}
    />
  );
}
