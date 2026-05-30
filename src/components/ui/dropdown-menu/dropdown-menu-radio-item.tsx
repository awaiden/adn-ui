import { Circle } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu.context";

export type DropdownMenuRadioItemProps = React.ComponentProps<typeof DropdownMenu.RadioItem>;

export const DropdownMenuRadioItem = ({
  children,
  className,
  ...props
}: DropdownMenuRadioItemProps) => {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.RadioItem className={cn(slots.radio(), className)} {...props}>
      <DropdownMenu.ItemIndicator className={slots.indicator()}>
        <Circle />
      </DropdownMenu.ItemIndicator>
      {children}
    </DropdownMenu.RadioItem>
  );
};
