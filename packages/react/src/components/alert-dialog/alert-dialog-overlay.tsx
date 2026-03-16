import { cn } from "@adn-ui/core";
import { AlertDialog } from "radix-ui";

import { useAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogOverlayProps = React.ComponentProps<typeof AlertDialog.Overlay>;

export default function AlertDialogOverlay({ className, ...props }: AlertDialogOverlayProps) {
  const { slots } = useAlertDialogContext();

  return (
    <AlertDialog.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(slots.overlay(), className)}
      {...props}
    />
  );
}
