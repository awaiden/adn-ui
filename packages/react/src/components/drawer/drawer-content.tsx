import { X } from "lucide-react";
import { Dialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useDrawerContext } from "./drawer-context";
import DrawerOverlay from "./drawer-overlay";
import DrawerPortal from "./drawer-portal";

export type DrawerContentProps = React.ComponentProps<typeof Dialog.Content>;

export default function DrawerContent({ children, className, ...props }: DrawerContentProps) {
  const { slots } = useDrawerContext();

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <Dialog.Content
        data-slot="drawer-content"
        className={cn(slots.content(), className)}
        {...props}
      >
        {children}
        <Dialog.Close data-slot="drawer-close" className={slots.close()}>
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </Dialog.Close>
      </Dialog.Content>
    </DrawerPortal>
  );
}
