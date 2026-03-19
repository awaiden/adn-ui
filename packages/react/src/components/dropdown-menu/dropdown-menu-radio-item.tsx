import { Circle } from "lucide-react";
import { DropdownMenu } from "radix-ui";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuRadioItemProps = React.ComponentProps<typeof DropdownMenu.RadioItem>;

export default function DropdownMenuRadioItem({
  children,
  className,
  ...props
}: DropdownMenuRadioItemProps) {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.RadioItem className={slots.radioItem({ className })} {...props}>
      <span className={slots.itemIndicator()}>
        <DropdownMenu.ItemIndicator>
          <Circle className={slots.itemIndicatorIcon()} />
        </DropdownMenu.ItemIndicator>
      </span>
      {children}
    </DropdownMenu.RadioItem>
  );
}
