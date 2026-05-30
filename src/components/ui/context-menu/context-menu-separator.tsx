import { ContextMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useContextMenuContext } from "./context-menu.context";

export type ContextMenuSeparatorProps = React.ComponentProps<typeof ContextMenu.Separator>;

export const ContextMenuSeparator = ({ className, ...props }: ContextMenuSeparatorProps) => {
  const { slots } = useContextMenuContext();

  return <ContextMenu.Separator className={cn(slots.separator(), className)} {...props} />;
};
