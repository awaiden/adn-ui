import { AlertDialog } from "radix-ui";
import { cn } from "tailwind-variants";

import { useAlertDialogContext } from "./alert-dialog.context";

export type AlertDialogTitleProps = React.ComponentProps<typeof AlertDialog.Title>;

export const AlertDialogTitle = ({ className, ...props }: AlertDialogTitleProps) => {
  const { slots } = useAlertDialogContext();

  return <AlertDialog.Title className={cn(slots.title(), className)} {...props} />;
};
