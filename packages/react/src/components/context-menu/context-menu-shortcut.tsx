import { cn } from "tailwind-variants";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuShortcutProps = React.ComponentProps<"span">;

export default function ContextMenuShortcut({ className, ...props }: ContextMenuShortcutProps) {
  const { slots } = useContextMenuContext();

  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(slots.shortcut(), className)}
      {...props}
    />
  );
}
