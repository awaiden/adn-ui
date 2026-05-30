import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAlertDialogContext } from "./alert-dialog.context";

export type AlertDialogContentProps = React.ComponentProps<typeof AlertDialog.Content>;

export const AlertDialogContent = ({ children, className, ...props }: AlertDialogContentProps) => {
  const { slots } = useAlertDialogContext();

  return (
    <AlertDialog.Portal>
      <AlertDialog.Overlay className={slots.overlay()} />
      <AlertDialog.Content className={cn(slots.content(), className)} {...props}>
        {children}
      </AlertDialog.Content>
    </AlertDialog.Portal>
  );
};
