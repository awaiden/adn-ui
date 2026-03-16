import { cn } from "@adn-ui/core";
import { AlertDialog } from "radix-ui";

import { useAlertDialogContext } from "./alert-dialog-context";

export type AlertDialogTitleProps = React.ComponentProps<typeof AlertDialog.Title>;

export default function AlertDialogTitle({ className, ...props }: AlertDialogTitleProps) {
  const { slots } = useAlertDialogContext();

  return (
    <AlertDialog.Title
      data-slot="alert-dialog-title"
      className={cn(slots.title(), className)}
      {...props}
    />
  );
}
