import { cn } from "@adn-ui/core";
import { ContextMenu } from "radix-ui";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuSeparatorProps = React.ComponentProps<typeof ContextMenu.Separator>;

export default function ContextMenuSeparator({ className, ...props }: ContextMenuSeparatorProps) {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.Separator
      data-slot="context-menu-separator"
      className={cn(slots.separator(), className)}
      {...props}
    />
  );
}
