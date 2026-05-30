import { ChevronRight } from "lucide-react";
import { ContextMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useContextMenuContext } from "./context-menu.context";

export type ContextMenuSubProps = React.ComponentProps<typeof ContextMenu.Sub>;

export const ContextMenuSub = (props: ContextMenuSubProps) => {
  return <ContextMenu.Sub {...props} />;
};

export type ContextMenuSubTriggerProps = React.ComponentProps<typeof ContextMenu.SubTrigger>;

export const ContextMenuSubTrigger = ({
  children,
  className,
  ...props
}: ContextMenuSubTriggerProps) => {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.SubTrigger className={cn(slots.subTrigger(), className)} {...props}>
      {children}
      <ChevronRight className={slots.shortcut()} />
    </ContextMenu.SubTrigger>
  );
};

export type ContextMenuSubContentProps = React.ComponentProps<typeof ContextMenu.SubContent>;

export const ContextMenuSubContent = ({ className, ...props }: ContextMenuSubContentProps) => {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.Portal>
      <ContextMenu.SubContent className={cn(slots.subContent(), className)} {...props} />
    </ContextMenu.Portal>
  );
};
