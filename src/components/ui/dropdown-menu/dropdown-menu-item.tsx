import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu.context";

export type DropdownMenuItemProps = React.ComponentProps<typeof DropdownMenu.Item>;

export const DropdownMenuItem = ({ className, ...props }: DropdownMenuItemProps) => {
  const { slots } = useDropdownMenuContext();

  return <DropdownMenu.Item className={cn(slots.item(), className)} {...props} />;
};
