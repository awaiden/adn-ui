import { Circle } from "lucide-react";
import { ContextMenu } from "radix-ui";

import { useContextMenuContext } from "./context-menu-context";

export type ContextMenuRadioItemProps = React.ComponentProps<typeof ContextMenu.RadioItem>;

export default function ContextMenuRadioItem({
  children,
  className,
  ...props
}: ContextMenuRadioItemProps) {
  const { slots } = useContextMenuContext();

  return (
    <ContextMenu.RadioItem className={slots.radioItem({ className })} {...props}>
      <span className={slots.itemIndicator()}>
        <ContextMenu.ItemIndicator>
          <Circle className={slots.itemIndicatorIcon()} />
        </ContextMenu.ItemIndicator>
      </span>
      {children}
    </ContextMenu.RadioItem>
  );
}
