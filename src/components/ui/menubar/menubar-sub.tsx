import { ChevronRight } from "lucide-react";
import { Menubar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useMenubarContext } from "./menubar.context";

export type MenubarSubProps = React.ComponentProps<typeof Menubar.Sub>;

export const MenubarSub = (props: MenubarSubProps) => {
  return <Menubar.Sub {...props} />;
};

export type MenubarSubTriggerProps = React.ComponentProps<typeof Menubar.SubTrigger>;

export const MenubarSubTrigger = ({ children, className, ...props }: MenubarSubTriggerProps) => {
  const { slots } = useMenubarContext();

  return (
    <Menubar.SubTrigger className={cn(slots.subTrigger(), className)} {...props}>
      {children}
      <ChevronRight className={slots.shortcut()} />
    </Menubar.SubTrigger>
  );
};

export type MenubarSubContentProps = React.ComponentProps<typeof Menubar.SubContent>;

export const MenubarSubContent = ({ className, ...props }: MenubarSubContentProps) => {
  const { slots } = useMenubarContext();

  return (
    <Menubar.Portal>
      <Menubar.SubContent className={cn(slots.subContent(), className)} {...props} />
    </Menubar.Portal>
  );
};
