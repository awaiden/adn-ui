import { Circle } from "lucide-react";
import { Menubar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useMenubarContext } from "./menubar.context";

export type MenubarRadioItemProps = React.ComponentProps<typeof Menubar.RadioItem>;

export const MenubarRadioItem = ({ children, className, ...props }: MenubarRadioItemProps) => {
  const { slots } = useMenubarContext();

  return (
    <Menubar.RadioItem className={cn(slots.radio(), className)} {...props}>
      <Menubar.ItemIndicator className={slots.indicator()}>
        <Circle />
      </Menubar.ItemIndicator>
      {children}
    </Menubar.RadioItem>
  );
};
