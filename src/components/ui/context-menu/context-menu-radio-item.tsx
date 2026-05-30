import { Circle } from "lucide-react";
import { ContextMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useContextMenuContext } from "./context-menu.context";

export type ContextMenuRadioItemProps = React.ComponentProps<typeof ContextMenu.RadioItem>;

export const ContextMenuRadioItem = ({
  children,
  className,
  ...props
}: ContextMenuRadioItemProps) => {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.RadioItem className={cn(slots.radio(), className)} {...props}>
      <ContextMenu.ItemIndicator className={slots.indicator()}>
        <Circle />
      </ContextMenu.ItemIndicator>
      {children}
    </ContextMenu.RadioItem>
  );
};
