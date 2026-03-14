import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAlertDialogContext } from "./alert-dialog-context";
import AlertDialogOverlay from "./alert-dialog-overlay";

export type AlertDialogContentProps = React.ComponentProps<typeof AlertDialog.Content>;

export default function AlertDialogContent({
  children,
  className,
  ...props
}: AlertDialogContentProps) {
  const { slots } = useAlertDialogContext();

  return (
    <AlertDialog.Portal>
      <AlertDialogOverlay />
      <AlertDialog.Content
        data-slot="alert-dialog-content"
        className={cn(slots.content(), className)}
        {...props}
      >
        {children}
      </AlertDialog.Content>
    </AlertDialog.Portal>
  );
}
