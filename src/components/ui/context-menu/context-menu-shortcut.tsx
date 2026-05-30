import { cn } from "tailwind-variants";

import { useContextMenuContext } from "./context-menu.context";

export type ContextMenuShortcutProps = React.ComponentProps<"span">;

export const ContextMenuShortcut = ({ className, ...props }: ContextMenuShortcutProps) => {
  const { slots } = useContextMenuContext();

  return <span className={cn(slots.shortcut(), className)} {...props} />;
};
