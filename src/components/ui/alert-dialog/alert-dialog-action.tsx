import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAlertDialogContext } from "./alert-dialog.context";

export type AlertDialogActionProps = React.ComponentProps<typeof AlertDialog.Action>;

export const AlertDialogAction = ({ className, ...props }: AlertDialogActionProps) => {
  const { slots } = useAlertDialogContext();

  return <AlertDialog.Action className={cn(slots.action(), className)} {...props} />;
};
