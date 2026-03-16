import { cn } from "@adn-ui/core";
import { ContextMenu } from "radix-ui";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuSubContentProps = React.ComponentProps<typeof ContextMenu.SubContent>;

export default function ContextMenuSubContent({ className, ...props }: ContextMenuSubContentProps) {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.Portal>
      <ContextMenu.SubContent
        data-slot="context-menu-sub-content"
        className={cn(slots.subContent(), className)}
        {...props}
      />
    </ContextMenu.Portal>
  );
}
