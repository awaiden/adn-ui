import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu.context";

export type DropdownMenuLabelProps = React.ComponentProps<typeof DropdownMenu.Label>;

export const DropdownMenuLabel = ({ className, ...props }: DropdownMenuLabelProps) => {
  const { slots } = useDropdownMenuContext();

  return <DropdownMenu.Label className={cn(slots.label(), className)} {...props} />;
};
