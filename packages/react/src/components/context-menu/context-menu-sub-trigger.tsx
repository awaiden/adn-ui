import { ChevronRight } from "lucide-react";
import { ContextMenu } from "radix-ui";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuSubTriggerProps = React.ComponentProps<typeof ContextMenu.SubTrigger> & {
  inset?: boolean;
};

export default function ContextMenuSubTrigger({
  children,
  className,
  inset,
  ...props
}: ContextMenuSubTriggerProps) {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.SubTrigger
      className={slots.subTrigger({ className })}
      data-inset={inset}
      {...props}
    >
      {children}
      <span className={slots.subTriggerIcon()}>
        <ChevronRight />
      </span>
    </ContextMenu.SubTrigger>
  );
}
