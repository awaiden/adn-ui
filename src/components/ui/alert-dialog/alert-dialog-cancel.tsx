import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAlertDialogContext } from "./alert-dialog.context";

export type AlertDialogCancelProps = React.ComponentProps<typeof AlertDialog.Cancel>;

export const AlertDialogCancel = ({ className, ...props }: AlertDialogCancelProps) => {
  const { slots } = useAlertDialogContext();

  return <AlertDialog.Cancel className={cn(slots.cancel(), className)} {...props} />;
};
