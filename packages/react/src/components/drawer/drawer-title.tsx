import { cn } from "@adn-ui/core";
import { Dialog } from "radix-ui";

import { useDrawerContext } from "./drawer-context";

export type DrawerTitleProps = React.ComponentProps<typeof Dialog.Title>;

export default function DrawerTitle({ className, ...props }: DrawerTitleProps) {
  const { slots } = useDrawerContext();

  return (
    <Dialog.Title data-slot="drawer-title" className={cn(slots.title(), className)} {...props} />
  );
}
