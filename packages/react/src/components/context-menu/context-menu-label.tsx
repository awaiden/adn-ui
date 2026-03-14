import { ContextMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuLabelProps = React.ComponentProps<typeof ContextMenu.Label>;

export default function ContextMenuLabel({ className, ...props }: ContextMenuLabelProps) {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.Label
      data-slot="context-menu-label"
      className={cn(slots.label(), className)}
      {...props}
    />
  );
}
