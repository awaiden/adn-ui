import { ChevronRight } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDropdownMenuContext } from "./dropdown-menu.context";

export type DropdownMenuSubProps = React.ComponentProps<typeof DropdownMenu.Sub>;

export const DropdownMenuSub = (props: DropdownMenuSubProps) => {
  return <DropdownMenu.Sub {...props} />;
};

export type DropdownMenuSubTriggerProps = React.ComponentProps<typeof DropdownMenu.SubTrigger>;

export const DropdownMenuSubTrigger = ({
  children,
  className,
  ...props
}: DropdownMenuSubTriggerProps) => {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.SubTrigger className={cn(slots.subTrigger(), className)} {...props}>
      {children}
      <ChevronRight className={slots.shortcut()} />
    </DropdownMenu.SubTrigger>
  );
};

export type DropdownMenuSubContentProps = React.ComponentProps<typeof DropdownMenu.SubContent>;

export const DropdownMenuSubContent = ({ className, ...props }: DropdownMenuSubContentProps) => {
  const { slots } = useDropdownMenuContext();

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.SubContent className={cn(slots.subContent(), className)} {...props} />
    </DropdownMenu.Portal>
  );
};
