import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu.context";

export type DropdownMenuSeparatorProps = React.ComponentProps<typeof DropdownMenu.Separator>;

export const DropdownMenuSeparator = ({ className, ...props }: DropdownMenuSeparatorProps) => {
  const { slots } = useDropdownMenuContext();

  return <DropdownMenu.Separator className={cn(slots.separator(), className)} {...props} />;
};
