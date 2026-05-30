import { X } from "lucide-react";
import { Popover } from "radix-ui";
import { cn } from "tailwind-variants";

import { popoverVariants } from "./popover.variants";

export type PopoverContentProps = React.ComponentProps<typeof Popover.Content>;

export const PopoverContent = ({
  children,
  className,
  sideOffset = 4,
  ...props
}: PopoverContentProps) => {
  const { close, content } = popoverVariants();

  return (
    <Popover.Portal>
      <Popover.Content className={cn(content(), className)} sideOffset={sideOffset} {...props}>
        {children}
        <Popover.Close aria-label="Close" className={close()}>
          <X />
        </Popover.Close>
      </Popover.Content>
    </Popover.Portal>
  );
};
