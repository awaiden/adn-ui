import { ChevronRight } from "lucide-react";
import { DropdownMenu } from "radix-ui";

import { useDropdownMenuContext } from "./dropdown-menu-context";

export type DropdownMenuSubTriggerProps = React.ComponentProps<typeof DropdownMenu.SubTrigger> & {
  inset?: boolean;
};

export default function DropdownMenuSubTrigger({
  children,
  className,
  inset,
  ...props
}: DropdownMenuSubTriggerProps) {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.SubTrigger
      className={slots.subTrigger({ className })}
      data-inset={inset}
      {...props}
    >
      {children}
      <span className={slots.subTriggerIcon()}>
        <ChevronRight />
      </span>
    </DropdownMenu.SubTrigger>
  );
}
