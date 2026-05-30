import "./menubar.css";

import { Menubar } from "radix-ui";
import { cn } from "tailwind-variants";

import { MenubarContext } from "./menubar.context";
import { menubarVariants } from "./menubar.variants";

export type MenubarRootProps = React.ComponentProps<typeof Menubar.Root>;

export const MenubarRoot = ({ className, ...props }: MenubarRootProps) => {
  const slots = menubarVariants();

  return (
    <MenubarContext value={{ slots }}>
      <Menubar.Root className={cn(slots.root(), className)} {...props} />
    </MenubarContext>
  );
};
