import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAlertDialogContext } from "./alert-dialog.context";

export type AlertDialogDescriptionProps = React.ComponentProps<typeof AlertDialog.Description>;

export const AlertDialogDescription = ({ className, ...props }: AlertDialogDescriptionProps) => {
  const { slots } = useAlertDialogContext();

  return <AlertDialog.Description className={cn(slots.description(), className)} {...props} />;
};
