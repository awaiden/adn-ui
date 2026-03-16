import { cn } from "@adn-ui/core";
import { ChevronRight } from "lucide-react";
import { ContextMenu } from "radix-ui";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuSubTriggerProps = React.ComponentProps<typeof ContextMenu.SubTrigger>;

export default function ContextMenuSubTrigger({
  children,
  className,
  ...props
}: ContextMenuSubTriggerProps) {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.SubTrigger
      data-slot="context-menu-sub-trigger"
      className={cn(slots.subTrigger(), className)}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto size-4" />
    </ContextMenu.SubTrigger>
  );
}
