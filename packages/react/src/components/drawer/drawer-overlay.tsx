import { cn } from "@adn-ui/core";
import { Dialog } from "radix-ui";

import { useDrawerContext } from "./drawer-context";

export type DrawerOverlayProps = React.ComponentProps<typeof Dialog.Overlay>;

export default function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
  const { slots } = useDrawerContext();

  return (
    <Dialog.Overlay
      data-slot="drawer-overlay"
      className={cn(slots.overlay(), className)}
      {...props}
    />
  );
}
