import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu.context";

export type DropdownMenuContentProps = React.ComponentProps<typeof DropdownMenu.Content>;

export const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) => {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className={cn(slots.content(), className)}
        sideOffset={sideOffset}
        {...props}
      />
    </DropdownMenu.Portal>
  );
};
