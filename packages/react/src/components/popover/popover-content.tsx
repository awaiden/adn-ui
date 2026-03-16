import { cn } from "@adn-ui/core";
import { Popover } from "radix-ui";

import { usePopoverContext } from "./popover-context";

export type PopoverContentProps = React.ComponentProps<typeof Popover.Content>;

export default function PopoverContent({
  align = "center",
  children,
  className,
  sideOffset = 4,
  ...props
}: PopoverContentProps) {
  const { slots } = usePopoverContext();

  return (
    <Popover.Portal>
      <Popover.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(slots.content(), className)}
        {...props}
      >
        {children}
      </Popover.Content>
    </Popover.Portal>
  );
}
