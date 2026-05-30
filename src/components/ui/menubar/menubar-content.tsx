import { Menubar } from "radix-ui";
import { cn } from "tailwind-variants";

import { useMenubarContext } from "./menubar.context";

export type MenubarContentProps = React.ComponentProps<typeof Menubar.Content>;

export const MenubarContent = ({
  align = "start",
  alignOffset = -4,
  className,
  sideOffset = 8,
  ...props
}: MenubarContentProps) => {
  const { slots } = useMenubarContext();

  return (
    <Menubar.Portal>
      <Menubar.Content
        align={align}
        alignOffset={alignOffset}
        className={cn(slots.content(), className)}
        sideOffset={sideOffset}
        {...props}
      />
    </Menubar.Portal>
  );
};
