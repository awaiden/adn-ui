import { ContextMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useContextMenuContext } from "./context-menu.context";

export type ContextMenuContentProps = React.ComponentProps<typeof ContextMenu.Content>;

export const ContextMenuContent = ({ className, ...props }: ContextMenuContentProps) => {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.Portal>
      <ContextMenu.Content className={cn(slots.content(), className)} {...props} />
    </ContextMenu.Portal>
  );
};
